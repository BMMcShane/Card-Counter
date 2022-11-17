import Header from "./Header";
import style from "../Stylesheets/Contact.module.css";

function Contact() {
    return (
        <div id={style.Contactotal}>
            <h1>Contact Us</h1>
            <br/>
            <h2>Ben McShane</h2>
            <h4>Founder and CEO of Card Counter</h4>
            <a href="https://www.linkedin.com/in/benjamin-mcshane/">LinkedIn</a>
            <br/>
            <br/>
            <a href="https://github.com/BMMcShane">GitHub</a>
            <br/>
            <br/>
            <a href="https://dev.to/bmmcshane">DEV Blog</a>
            <h3>Email Address: benjaminmartinmc@gmail.com</h3>
            <h3>Phone Number: 417-414-4300</h3>
        </div>
    );
}

export default Contact;