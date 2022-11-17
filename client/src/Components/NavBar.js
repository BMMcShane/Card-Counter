import { redirect, NavLink, Link } from "react-router-dom";
import Notifications from "./Notifications";
import style from "../Stylesheets/NavBar.module.css";

function NavBar({user, onLogin, profile, setProfile, userRoute, database}) {

    function handleLogout() {
        fetch("/logout", {method: "DELETE"}).then((r) => {
            if (r.ok) {
                onLogin(null);
                console.log("All Good!");
                refreshPage(r);
            }
        });
    }

    function refreshPage(thing) {
        if(thing !== undefined) {
            window.location.reload()
        }else {
            console.log("Error")
        };
    }

    return (
        <div>
            <div id={style.BottomBar}>
                <NavLink to="/">
                    <button className={style.NavButton}>About</button>
                </NavLink>
                <NavLink to="/Contact">
                    <button className={style.NavButton}>Contact</button>
                </NavLink>
                {user ? null :
                (<NavLink to="/Login">
                    <button className={style.NavButton}>Login or Signup!</button>
                </NavLink>)}
                {user ?
                (<NavLink to={userRoute}>
                    <button className={style.NavButton}>Profile</button>
                </NavLink>)
                : null}

                {user ? 
                (<div>
                    <button onClick={handleLogout} className={style.NavButton}>Sign Out</button>
                </div>)
                : null}
            </div>

            {user ?
            (<div>
                <Notifications profile={profile} setProfile={setProfile} database={database} />
            </div>)
            : null}

        </div>
    );
}

export default NavBar;