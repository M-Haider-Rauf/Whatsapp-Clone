import { forwardRef } from "react";

import { FlatList } from "react-native";

import { Message } from "./Message";

const MessageList = forwardRef((props, ref) => {
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
            ref={ref}
        />
    );
});

export { MessageList };