import Ping from "./Legacy/Ping";
import Request from "./Request";

function NotificationCard({notification, setProfile, profile, database}) {
      
    return(
        <div>
            {/* <button onClick={() => console.log(profile)}>log profile</button> */}
            {(notification.kind === 1) ? <Request notification={notification} setProfile={setProfile} profile={profile} database={database}/> : <Ping notification={notification} setProfile={setProfile} profile={profile}/> }
        </div>
    )
}

export default NotificationCard;