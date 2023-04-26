import { FlatList } from "react-native";

import { Message } from "./Message";

export function MessageList(props) {
    const renderItem = ({item}) => {
        return(
            <Message
                text={item.text} 
                sent={item.sent}
                time={item.time} 
            />
        );
    }

    const data = props.messages;

    return(
        <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            ref={listRef}
        />
    );
}