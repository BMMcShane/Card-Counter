import {useState} from "react";
import style from "../Stylesheets/LinkCard.module.css"
function LinkCard({link, owns}) {
    const [linkDeleted, setLinkDeleted] = useState(false)
    
    function handleDeleteLink(e) {
        e.preventDefault();
        fetch(`/links/${link.id}`, {method: "DELETE"})
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
        window.location.reload()

    };



    return(
        <div className={style.LinkCardo}>
            <h3>{link.name}</h3>
            <hr/>
            <a href={link.url}>{link.url}</a>
            <br/>
            <br/>
            <p>{link.description}</p>
            <br/>
            {owns ? (
            <button onClick={(e) => handleDeleteLink(e)}>Remove Link</button>
            ) : null}
        </div>
    )
}

export default LinkCard;