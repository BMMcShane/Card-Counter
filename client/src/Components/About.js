import Header from "./Header";
import {useEffect} from "react";
import style from "../Stylesheets/About.module.css";

function About({database, user}) {

    // useEffect(() => {
    //     window.location.reload();
    // })

    return (
        <div id={style.AboutTotal}>
            <h1>What Card Counter Is</h1>
            <br/>
            <p>Card Counter is a simple and easy to use social media platform designed with the intent of easily connecting every aspect of your online persona. 
                On Card Counter, you can create a profile which really speaks to who you are, and that provides others with links to your profiles elsewhere on the net.
                <br/>
                <br/>
                Tired of your Twitter bio being completely dedicated to directing onlookers to other sites? Want an easy way to guide recruiters directly to your LinkedIn? Trying to grow your presence on a new site, but don't want the headache of refriending all of your contemporaries? 
                With Card Counter, all of these problems are yesterday's news. In this age of unprecedented online presence, take a step above the rest, and start your journey towards a unified digital existence today with Card Counter! </p>
            <br/>
            <h2>Why use Card Counter</h2>
            <br/>
            <p>This website makes it incredibly easy to unite your digital presence. Simply create an account with us, fill out your profile information, create links for whatever platforms you want to connect, and then share your profile url across the web. Viewers will be able to easily navigate from your profile to any other account else you have connected.
                If you want to keep track of anyone in particulars profile, you can simply share your friend code with them directly, let them send you a friend request, and upon accepting you'll always be able to keep track of them from your dashboard. These features make Card Counter one of the best ways to keep track of your friends online, no matter where they are on the web!
            </p>
            <br/>
            <h2>What to Expect in the Future</h2>
            <br/>
            <p>Card Counter isn't just stopping here though, we have a whole suite of new features in development that we are excited to share with you all! 
                <br/>
                <br/>
                One of the features we are most excited to announce is the long awaited <em>Card Creator!</em> Using this feature, you will be able to create, customize, and download virtual business cards right here on our site. Whether you use them to link directly to your other socials, or just straight back to Card Counter, these cards will have a lot of versatility and will revolutionize the way we navigate the web. Using this feature, users will be able to more concisely limit which aspects of their online brand they are sharing at any time.
                    Put all of your professional links together for potential employers, create a card with all of your personal accounts to quickly connect with new friends, or just link straight back to your profile here on Card Counter. Additionally, this feature will come paired with the <em>Card Collector</em> feature, a system that allows you to save individual cards made by other users, allowing you to sidestep the friending process and making it simple to separate professional and personal interests!</p>
            {/* <button onClick={() => console.log(database)}>Log DB</button> */}
            <div id={style.BottomBreak}></div>
        </div>
    );
}

export default About;