function interleaveStrings(str1, str2) {
    if (str1.length != str2.length) {
        return "";
    }

    const joined = [];

    for (let i = 0; i < str1.length; ++i) {
        joined.push(str1.at(i));
        joined.push(str2.at(i));
    }

    return joined.join("");
}

function joinUIDs(uid1, uid2) {
    if (uid1.localeCompare(uid2) < 0) {
        return interleaveStrings(uid1, uid2);
    }
    else {
        return interleaveStrings(uid2, uid1);
    }
}


export { joinUIDs };