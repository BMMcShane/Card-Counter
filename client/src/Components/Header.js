import NavBar from "./NavBar"
import style from "../Stylesheets/Header.module.css"
import cards from "../Components/Assets/Cards.png";

function Header({database, user, setUser, profile, setProfile, userRoute}) {
    return (
        <div>
            <div id={style.HeaderBar}>
                <img src={cards} alt="Cards"/>
                <h2 id={style.Logo}>&nbsp;Card Counter&nbsp;</h2>
                <img id={style.Cards2} src={cards} alt="Cards"/>
            </div>
            <div id={style.HeaderBreak}></div>
            <div id={style.StuckBreak}></div>
            <br />
            <NavBar user={user} onLogin={setUser} profile={profile} setProfile={setProfile} userRoute={userRoute} database={database} />
        </div>
    );
}

export default Header;