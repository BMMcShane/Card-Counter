import { useState, useEffect } from "react";
import style from "../Stylesheets/FriendCard.module.css"
import anon from "./Assets/User.jpg"
import { redirect, NavLink, Link } from "react-router-dom";




function FriendCard({ database, friend, profile }) {
    const [friendProf, setFriendProf] = useState(null)
    const [friendRoute, setFriendRoute] = useState("/");
    
    useEffect(() => {
      findFriend();
    }, [])

    function findFriend() {
        const hit = database.find(item => item.id === friend.friend_id);
        setFriendProf(hit)
        console.log(hit)
        setFriendRoute(`/Profiles/${hit.id}`)
        }
    

    
    return (
        <div className={style.Card}>
            {friendProf ? (
             <div className={style.Card}> 
                <div id={style.left}> 
                { friendProf && (friendProf.portrait.img_url !== null) ? (
                            <img src={friendProf.portrait.img_url} alt="Friend Profile Picture" className={style.Picture}/>
                       ):(
                            <img src={anon} alt="Friend Profile Picture" className={style.Picture}/>
                        )}
                </div>
                <div id={style.right}>
                    <NavLink to={friendRoute}>
                        {friendProf.name}
                    </NavLink>
                </div>
                
            </div>
            ) : null}
        </div>
    )
}

export default FriendCard;