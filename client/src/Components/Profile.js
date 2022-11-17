import { Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import style from "../Stylesheets/Profile.module.css";
import anon from "./Assets/User.jpg"

import ProfileSetting from "./ProfileSetting";
// import CardGen from "./Legacy/CardGen";
// import CardList from "./Legacy/CardList";
import Friends from "./Friends";
import Links from "./Links";

function Profile({database, user, setUser, profile, setProfile}) {
    const [profileSelect, setProfileSelect] = useState(undefined)
    const [owns, setOwns] = useState(false)
    const [databaseTrue, setDatabaseTrue] = useState(false);
    let pageCode = useParams();
    let num;
    let prof;


    useEffect(() => {
        if (database){
        determineOwnership();
        }
    })

    const dataOwn = useEffect(() => determineOwnership());

    function determineOwnership() {
        if (database) {
        if(user){
            setOwns(true);
            num = user.id
            prof = database.find(item => item.id === num);
            setProfileSelect(prof)
        }else {
            num = parseInt(pageCode.id)
            prof = database.find(item => item.id === num);
            setProfileSelect(prof)
        }
        num = 0
        // if(database !== undefined && profileSelect !== undefined) {
        // console.log(profileSelect)
        // }}
    }} 


    return (
        <div>
            

            <div id={style.ProfileTotal}>
                <div id={style.LeftColumn}>
                    <br/>
                    {profileSelect ? (
                    <div id={style.ProfileTop}>
                        { profileSelect && (profileSelect.portrait.img_url !== null) ? (
                            <img src={profileSelect.portrait.img_url} alt="User Profile Picture" className={style.Portrait}/>
                       ):(
                            <img src={anon} alt="User Profile Picture" className={style.Portrait}/>
                        )}
                        {profileSelect && (profileSelect.name !== null) ? (
                        <h1>{profileSelect.name}</h1>
                        ) : <h1>Unnamed User</h1>}
                    </div>
                    ): null}
                    <br/>
                    <div id={style.Info}>
                    {profileSelect ? (
                        <p>{profileSelect.phone_no}</p>
                    ): null}

                    {profileSelect ? (
                        <p>{profileSelect.email}</p>
                    ): null}
                    </div>
                    <hr/>
                    {profileSelect && (profileSelect.bio !== null) ? (
                        <div>
                            <h2 id={style.BioTitle}>Profile Bio:</h2>
                            <p className={style.bio}>{profileSelect.bio}</p>
                        </div>
                    ): (<p className={style.bio}>User has yet to write a bio...</p>)}


                    {owns && user ? (
                    <ProfileSetting user={user} setUser={setUser} profile={profile} owns={owns} setOwns={setOwns} />
                    ) : null}
                </div>
                <div id={style.RightColumn}>
                    {profileSelect ? (
                    <div id={style.LinkBox}>
                        <Links profileSelect={profileSelect} setProfileSelect={setProfileSelect} setUser={setUser} owns={owns}/>
                    </div>
                     ) : null}
                    {database && profileSelect ? (
                    <div id={style.FriendBox}>
                        <Friends database={database} profile={profile} user={user} owns={owns} profileSelect={profileSelect}/>
                    </div>
                    ) : null}
                </div>
                {database && (!profileSelect || profileSelect.id !== pageCode.id) ? (dataOwn) : null}
            </div>
            {/* <button onClick={() => console.log(profileSelect)}>Log</button> */}
            <div id={style.BottomBreak}></div>


        </div>
    );
}

export default Profile;