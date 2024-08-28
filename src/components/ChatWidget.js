import React from 'react'
import Widget from 'rasa-webchat';


function ChatWidget() {

    function calculateMessageDelay(message) {
        let delay = message.length * 12; // Change this value to adjust the delay per character
        if (delay > 1400) delay = 1400; // Set an upper limit for the delay
        if (delay < 400) delay = 400; // Set a lower limit for the delay
        return delay;
    }

    

    return (<Widget
        socketUrl={"http://localhost:5005"} // http://192.168.8.102:5005
        socketPath={"/socket.io"}
        initPayload={"/greet"}
        customData={{"language": "en"}} // arbitrary custom data. Stay minimal as this will be added to the socket
        title={"HotelBot"}
        subtitle={"Powered by Dauntless"}
        autoClearCache={true}
        displayUnreadCount={true}
        
        customMessageDelay={calculateMessageDelay}
        params={{
            storage: 'local',
        }}

        customComponent={({text}) => <div><p>{text}{text}{text}</p></div>}
        onWidgetEvent={{
            onChatClose: () => {
                localStorage.clear();
            }, onChatOpen: () => {
                localStorage.clear();
            }
        }}

    />)
}

export default ChatWidget; 