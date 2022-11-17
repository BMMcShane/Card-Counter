import React, {useState} from "react";
import { Navigate } from 'react-router-dom';
import style from "../Stylesheets/ProfileSettings.module.css";


function ProfileSetting({user, setUser, profile}) {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [company, setCompany] = useState("");
    const [job, setJob] = useState("");
    const [school, setSchool] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [friendCode, rememberFriendCode] = useState("");
    const [confirmUsername, setConfirmUsername] = useState("");
    const [deleted, setDeleted] = useState(false);




    function startEditing(){
        setIsEditing(!isEditing);
        setIsDeleting(false);
    };

    function stopEditing(){
        setIsDeleting(false);
        setIsEditing(false);
    }

    function userlog(){
        console.log(profile)
    }

    function forceConfirm() {
        setIsDeleting(!isDeleting);
    }

    function deleteHandler(e) {
        e.preventDefault();
        setIsDeleting(false);
        setIsEditing(false);
        // setOwns(!owns);
        if (confirmUsername === user.username) {
            handleLogout();
            // deleteProf();
        }

        function deleteProf(thing) {
            fetch(`/users/${profile.id}`, { method: "DELETE"} )
            .then((resp) => resp.json())
            .then((data) => {
                // if(data && !user){
                setUser(null);
                setDeleted(true);
                // refreshPage(data)
            // }
            })
        }

    function handleLogout() {
        fetch("/logout", {method: "DELETE"}).then((r) => {
            if (r.ok) {
                setUser(null);
                console.log("All Good!");
                deleteProf();
            }
        });
    }

    }
    function refreshPage(thing) {
        if(thing !== undefined) {
            window.location.reload()
        }else {
            console.log("Error")
        };
    }

    function handleUpdateProfile(e) {
        e.preventDefault();
        rememberFriendCode(user.profile.friend_code);



        fetch(`/profiles/${user.profile.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                bio: bio,
                friend_code: friendCode,
                company: company,
                job: job,
                school: school,
                email: email,
                address: address,
                phone_no: phoneNo,
            }),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setUser(data)
            if(data){
                refreshPage(data)
            }
        })
        setIsEditing(false);
    }

    return (
        <div>
            {/* <button onClick={() => userlog()}> User Log (will be Portrait start) </button> */}
            <div id={style.EditButton}>
                <button onClick={() => startEditing()}>Edit Profile?</button>
            </div>
            
            {/* sets deleting triggering a ternary
            a fixed pop up will appear and require a checkbox verification */}

            {isEditing ? (

                <div id={style.EditForm}>
                    <br/>
                    <br/>
                    <form onSubmit={(e) => handleUpdateProfile(e)}>
                        <input
                        type="text"
                        id="name"
                        autoComplete="off"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        />
                        <br/>
                        <textarea 
                        type="text"
                        rows="3"
                        id="bio"
                        placeholder="Enter your Bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        />
                        <br/>
                        <input 
                        type="text"
                        id="company"
                        autoComplete="off"
                        placeholder="Company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        />
                        <br/>
                        <input
                        type="text"
                        id="job"
                        autoComplete="off"
                        placeholder="Job"
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                        />
                        <br/>
                        <input
                        type="text"
                        autoComplete="off"
                        id="school"
                        placeholder="School"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        />
                        <br/>
                        <input
                        type="text"
                        autoComplete="off"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <br/>
                        <input
                        type="text"
                        autoComplete="off"
                        id="address"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />
                        <br/>
                        <input
                        type="text"
                        autoComplete="off"
                        id="phone"
                        placeholder="Phone Number"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        />
                        <br/>
                        <br/>
                        <button type="submit">Update Profile</button>
                        <br/>
                        <br/>
                    </form>
                    <button onClick={() => stopEditing()}>Stop Editing</button>
                    <br/>
                    <br/>
                    <button onClick={() => forceConfirm()}>{isDeleting ? "Stop Deletion Process"  : "Delete Profile?"} </button>

                </div>

            ) : null}
            <br/>
            {isDeleting ? (
                <div id={style.EditForm}>
                    <form  onSubmit={(e) => deleteHandler(e)}>
                        <label>Please enter your Username to confirm account deletion.</label>
                        <br/>
                        <br/>
                        <input 
                        type="text"
                        autoComplete="off"
                        id="delete"
                        placeholder="Please Type Username to Confirm"
                        value={confirmUsername}
                        onChange={(e) => setConfirmUsername(e.target.value)}
                        />
                        <br/>
                        <br/>
                        <button type="submit">Delete My Account</button>
                    </form>
                </div>
            ): null}

            {deleted ? (<Navigate to="/" />) : null}
        </div>
    );
}

export default ProfileSetting;