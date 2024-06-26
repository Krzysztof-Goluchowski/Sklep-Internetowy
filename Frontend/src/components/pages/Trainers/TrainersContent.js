import {TRAINERS} from "./trainersinfo.js";
import "../../../assets/styles/trainers.css";
import phone from "../../../assets/images/orangephone.png";
import mail from "../../../assets/images/orangemail.png";
import React from 'react';

function TrainersContent() {
    const trainer = TRAINERS[0];

    return (
        <div className="trainersContainer">
            <h1 className="team">MEET OUR TEAM</h1>
            {TRAINERS.map((trainer) => (
                <div className="trainer">
                    <h3 className="name">{trainer.name}</h3>
                    <h3 className="title">{trainer.info}</h3>
                    <div className="trainerInfo">
                        <img className="photo" src={trainer.photo}/>
                        <div className="trainerText">
                            <p className="bio">
                                {trainer.bio}
                            </p>
                            <p className="contact">
                                <img className="icon" src={mail}/>
                                {trainer.mail}
                            </p>
                            <p className="contact">
                                <img className="icon" src={phone}/>
                                {trainer.phone}
                            </p>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default TrainersContent;