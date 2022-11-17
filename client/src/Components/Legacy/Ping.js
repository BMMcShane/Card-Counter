import {useState} from "react";

function Ping({notification}) {
    const [dismissed, setDismissed] = useState(false);

    function handleDismiss(e) {
        e.preventDefault();
        setDismissed(true);

        fetch(`/notifications/${notification.id}`, { method: "DELETE" } )
        .then((resp) => resp.json())
        .then((data) => console.log(data))
    }

    return(
        <div hidden={true} >
            {dismissed ? (
                <p>Notification Removed</p>
            ) : 
            (
            <div>
            <p>Ping!</p>
            <p>Whosewhatsit Collected your card NAME!</p>
            <button onClick={(e) => handleDismiss(e)}>Dismiss</button>
            </div>
            )}

        </div>
    )
}

export default Ping;