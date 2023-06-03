import { 
        query, 
        arrayUnion, 
        doc, 
        collection ,
        where, 
        getDocs,
        setDoc,
    } from "firebase/firestore";
import { joinUIDs } from "./util";
import { firestore, storage } from "./firebase";
import dayjs from "dayjs";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export async function getUserFromDB(email) {
    const value = email.trim();

        const q = query(collection(firestore, "users"), where("email", "==", value));

        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            return null;
        }
        else {
            const doc = querySnapshot.docs[0];
            return {
                uid: doc.id,
                data: doc.data()
            };
        }
}

export async function uploadToStorage(uri, folder, name)
{
        const path = ref(storage, `${folder}/${name}`);
        
        const body = await fetch(uri);
        const blob = await body.blob();

        const uploaded = await uploadBytes(path, blob);
        const url = await getDownloadURL(uploaded.ref);

        return url;
}

export async function sendMessageToDB(sender, receiver, message) {
    const senderUID = sender.uid;
    const receiverUID = receiver.uid;

    const roomID = joinUIDs(senderUID, receiverUID);
    const unix = dayjs().unix();

    const chatRoomRef = doc(firestore, "chatRooms", roomID);
    
    setDoc(doc(firestore, "chatRooms", roomID), {
        messages: arrayUnion({
            sender: senderUID,
            text: message,
            time: unix
        })
    }, { merge: true });

    await setDoc(doc(firestore, "chats", senderUID),{ 
        [roomID]: {
            roomID: roomID,
            uid: receiverUID,
            name: receiver.name,
            photoURL: receiver.photoURL,
            lastMessage: message,
            time: unix
    }}, { merge: true });

    await setDoc(doc(firestore, "chats", receiverUID),{ 
        [roomID]: {
            roomID: roomID,
            uid: senderUID,
            name: sender.name,
            photoURL: sender.photoURL,
            lastMessage: message,
            time: unix
    }}, { merge: true });
}