import React from "react"

export default function Info(){
    return (
        <div className="info">
        <img src="https://avatars.githubusercontent.com/u/60233803?v=4" alt="profile-picture" className="profile-picture"/>
        
        <h2 className="name">Ayaan Sharif</h2>
        <h3 className="role">Mern Stack Developer</h3>
        <h4 className="website"></h4>
        
        <div className="social-buttons">
        <button className="email-text" ><i className="fa-solid fa-envelope email-icon"></i> Email</button>
        <button className="linkedln-text"><i className="fa-brands fa-linkedin linkedin-icon"></i> LinkedIn</button>
        <button className="github-text"><i className="fa-brands fa-github github-icon"></i> Github</button>
        </div>
        </div>
    )
}