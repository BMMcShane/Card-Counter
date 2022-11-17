import {useState} from "react";
import {v4 as uuid} from "uuid";
import NotificationCard from "./NotificationCard";
import style from "../Stylesheets/Notifications.module.css";
import bell from "./Assets/bell.png";
// import Request from "./Request";
// import Ping from "./Ping";

function Notifications({profile, setProfile, database}) {
    const [isBrowsing, setIsBrowsing] = useState(false);

    function forceBrowsing() {
        setIsBrowsing(!isBrowsing);
    };

    // Let the below code stand testament to the fact... 
    // ...that none of this makes any damned sense

    // function notificationMap() {
    //     let thing;
    //     thing = profile.notifications
    //     // console.log(thing);
    //     thing.map((n) => {
    //         return(
    //             <Request notification={n} />
    //         )
    //     })
    // };

    // function notificationSort(n) {
    //     if(n.ping === null) {
    //         console.log(n.request)
    //         return(
    //                 <Request request={n.request} />
    //         )
    //     }else if(n.request === null) {
    //         console.log(n.ping)
    //         return(
    //                 <Ping ping={n.ping} />
    //         )
    //     }else {
    //         console.log("Uh Oh")
    //     }
    // }
        // for (var id in thing) {
        //     if(!thing.hasOwnProperty(id)) continue;
        //     var obj = thing[id];
        //     console.log(obj);
        //     if (obj.request === null) {
        //         console.log(obj.ping)
        //         return(
        //             <div>
        //                 <Ping ping={obj.ping} />
        //             </div>
        //         )
        //     } else if(obj.ping === null) {
        //         console.log(obj.request)
        //         return(
        //             <div>
        //                 <Request request={obj.request} />
        //             </div>
        //         )
        //     }else {
        //         console.log("Uh Oh")
        //     }
        // }
    
    const notifications = profile.notifications?.map((p) => {
        return (
            <div key={p.id}>
                <NotificationCard notification={p} setProfile={setProfile} profile={profile} database={database}  />
            </div>
        )
    })

    return(
        <div id={style.Total}>
            
            <button id={style.Prime} onClick={() => forceBrowsing()}>
                <img src={bell} alt="bell"/>
            </button>
                {/* <button onClick={() => console.log(profile)}>log profile</button> */}

            {/* <div id={style.Junior}> */}
            {isBrowsing ?
            (
             <div id={style.Junior}>
                <h2>Notifications:</h2>
                <hr/>
                {notifications}
            </div>
                ) : null}
            {/* </div> */}
        </div>
    )
}

export default Notifications;