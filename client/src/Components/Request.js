import {useState, useEffect} from "react";
import style from "../Stylesheets/Request.module.css"

function Request({notification, setProfile, profile, database}) {
    const [accepted, setAccepted] = useState()
    const [answered, setAnswered] = useState(false);
    const [friendProf, setFriendProf] = useState("")
    let prof;
    let num;

    useEffect(() => {
        if(database){
        findFriend();
        }
    })

    function findFriend() {
        num = notification.request.friend_id
        prof = database.find(item => item.id === num);
        setFriendProf(prof)
    }

    function handleFriendAccept(e) {
        setAccepted(true);
        setAnswered(true);
        e.preventDefault();

        friendshipOne();
        friendshipTwo();
        deleteRequest();
    }

    function handleFriendDecline(e) {
        setAccepted(false);
        setAnswered(true);
        e.preventDefault();

        // console.log(profile);
        deleteRequest();
    }

    function deleteRequest() {
        fetch(`/notifications/${notification.id}`, { method: "DELETE" } )
        .then((resp) => resp.json())
        .then((data) => console.log(data))
    }

    function friendshipOne() {
        const userFriendship = {
            profile_id: profile.id,
            friend_id: notification.request.friend_id,
        }

        fetch("/friendships", {
            method: "POST" ,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userFriendship),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
    }

    function friendshipTwo() {
        const otherUserFriendship = {
            profile_id: notification.request.friend_id,
            friend_id: profile.id,
        }

        fetch("/friendships", {
            method: "POST" ,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(otherUserFriendship),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
    }


    return(
        <div className={style.Note}>
            <p className={style.Flavor}>Friend Request from: <br/> <strong>{friendProf.name}</strong> </p>
            {/* <br/> */}
            {/* <button onClick={() => console.log(friendProf)}>Log Request</button> */}
            <div>
                {answered ? 
                (
                <div>
                    {accepted ? (<p>Friend Request Accepted!</p>) : (<p>Friend Request Declined.</p>)}
                </div>
                ) : (
                <div>
                <button onClick={(e) => handleFriendAccept(e)}>Accept</button>
                <button onClick={(e) => handleFriendDecline(e)}>Decline</button>
                </div>
                )
            }
            </div>
            <hr/>
        </div>
    )
}

export default Request;