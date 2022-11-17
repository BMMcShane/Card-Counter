import LinkCard from "./LinkCard";
import {useEffect, useState} from "react";
import style from "../Stylesheets/Links.module.css";


function Links({profileSelect, setProfileSelect, setUser, owns}) {
    const [adding, setAdding] = useState(false)
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    let num;

    const links = profileSelect.links?.map((p) => {
        return (
            <div key={p.id}>
                <LinkCard link={p} owns={owns} />
                <br/>
            </div>
        )})

    function startAdding() {
        setAdding(true);
    }

    function handleAddLink(e) {
        e.preventDefault();
        console.log(name)
        let num = profileSelect.id;
        const newLink = {
            description: description,
            name: name,
            url: url,
            profile_id: num,
        };
        console.log(newLink)
        fetch(`/links`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newLink),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setAdding(false);
            setDescription("");
            setName("");
            setUrl("");
            if(data.ok){
                refreshPage(data);
            }
        })

    }

    function refreshPage(thing) {
        if(thing !== undefined) {
            window.location.reload()
        }else {
            console.log("Error")
        };
    }

    function forceCancel() {
        setAdding(false);
    }

    return(
        <div>
            <div>
                <h2>{profileSelect.name}'s Links:</h2>
                {links}
            </div>
            <br/>
            {owns ? (
            <div id={style.LinkCreate}>
                <button id={style.LinkCreate} onClick={startAdding}> Add New Link </button>
            </div>
            ) : null }
            <br/>
            {adding ? (
                <form id={style.CreateForm} onSubmit={(e) => handleAddLink(e)}>
                    <input 
                    type="text"
                    value={name}
                    placeholder="Link Website"
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="off"
                    />
                    <br/>
                    <textarea 
                    type="text"
                    value={description}
                    placeholder="Link Description"
                    onChange={(e) => setDescription(e.target.value)}
                    autoComplete="off"
                    />
                    <br/>
                    <input 
                    type="text"
                    value={url}
                    placeholder="Link URL"
                    onChange={(e) => setUrl(e.target.value)}
                    autoComplete="off"
                    />
                    <br/>
                    <button type="submit"> Add Link</button>
                    <br/>
                    <button onClick={forceCancel}>Cancel</button>
                </form>
            ) : null}
            {/* <button onClick={() => console.log(profileSelect.links)}>Log Links</button> */}
        </div>
    )
}

export default Links;