import React, { useState } from "react";
import './About.css';

export default function About() {

    const [open, setOpen] = useState(null);

    const handleAccordion = (index) => {
        if (open === index) {
            setOpen(null);
        } else {
            setOpen(index);
        }
    }

    const [btnState, setBtnState] = useState("Enable Dark Mode");

    const [aboutStyle, setAboutStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    }
    );

    const handleClick = () => {
        if (btnState === "Enable Dark Mode") {
            setBtnState("Enable Light Mode")
            setAboutStyle({
                color: 'white',
                backgroundColor: 'black'
            }
            );
        }
        else {
            setBtnState("Enable Dark Mode")
            setAboutStyle({
                color: 'black',
                backgroundColor: 'white'
            }
            );
        }
    }


    return (
        <div className="about-container" style={aboutStyle}>

            <h2>About TextUtils</h2>

            <div className="accordion" style={aboutStyle}>

                <div className="accordion-item" style={aboutStyle}>
                    <button
                        className="accordion-button"
                        onClick={() => handleAccordion(0)} style={aboutStyle}
                    >
                        What is TextUtils?
                    </button>

                    {open === 0 && (
                        <div className="accordion-body" style={aboutStyle}>
                            TextUtils is a simple React application
                            that provides useful text manipulation features.
                        </div>
                    )}
                </div>


                <div className="accordion-item" style={aboutStyle}>
                    <button
                        className="accordion-button"
                        onClick={() => handleAccordion(1)} style={aboutStyle}
                    >
                        What can TextUtils do?
                    </button>

                    {open === 1 && (
                        <div className="accordion-body" style={aboutStyle}>
                            You can convert text to uppercase,
                            lowercase, reverse text and count characters.
                        </div>
                    )}
                </div>


                <div className="accordion-item" style={aboutStyle}>
                    <button
                        className="accordion-button"
                        onClick={() => handleAccordion(2)}
                    >
                        Which technology is used?
                    </button>

                    {open === 2 && (
                        <div className="accordion-body" style={aboutStyle}>
                            TextUtils is built using React and JavaScript.
                        </div>
                    )}
                </div>

            </div>

            <button className="darkModeBtn" onClick={handleClick}>{btnState}</button>

        </div>
    );
}