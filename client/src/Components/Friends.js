import FriendCard from "./FriendCard";
import style from "../Stylesheets/Friends.module.css";

import {useState, useEffect} from "react";


function Friends({user, database, profile, owns, profileSelect}) {
    const [currentCode, setCurrentCode] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [newNotification, setNewNotification] = useState(null);

    function handleSendRequest(e) {
        e.preventDefault();
        setIsSending(true);
        const foundProfile = database.find(item => item.friend_code === currentCode);
        makeNotification(foundProfile);
        setCurrentCode("");
        setIsSending(false);
    }

    function makeNotification(foundProfile) {
        const notificationData = {
            profile_id: foundProfile.id,
            kind: 1,
        };
        fetch("/notifications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(notificationData),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setNewNotification(data);
            console.log(data);
            makeRequest(data);
        })


    }

    function makeRequest(data) {
        console.log(newNotification);
        const requestData = {
            notification_id: data.id,
            friend_id: user.id,
        };
        fetch("/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            setNewNotification(null);
        })

    }
        const friends = profileSelect.friendships?.map((p) => {
        return (
            <div key={p.id}>
                <FriendCard friend={p} profile={profile} database={database}  />
            </div>
        )})


    return (
        <div>
            <div>
                <div>
                    <h2>{profileSelect.name}'s Friends:</h2>
                </div>
                <div>
                    {friends}
                </div>
                <br/>
                {owns ? 
                (<div id={style.AddBox}>
                    <h3>Send a Friend Request</h3>
                    <form onSubmit={(e) => handleSendRequest(e)}>
                        <input
                        type="text"
                        id="friend_code"
                        autoComplete="off"
                        value={currentCode}
                        placeholder="Friend Code"
                        onChange={(e) => setCurrentCode(e.target.value)}
                        />
                        <br/>
                        <button type="submit">{isSending ? "Processing..." : "Send"}</button>
                    </form>
                    {/* <button onClick={() => console.log(user)}>Log DB</button> */}
                </div>)
                : null}
                {owns ? (
                    <p id={style.Code}> Your Friend Code is #{profileSelect.friend_code}</p>
                ): null}
            </div>
        </div>
    )
}

export default Friends;