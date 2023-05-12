function interleaveStrings(str1, str2) {
    const chars = [];

    for (let i = 0; i < str1.length; ++i) {
        chars.push(str1.charAt(i));
        chars.push(str2.charAt(i));
    }

    return chars.join("");
}

export function joinUIDs(uid1, uid2) {
    if (uid1.localeCompare(uid2) < 0) {
        return interleaveStrings(uid1, uid2);
    }
    else {
        return interleaveStrings(uid2, uid1);
    }
}