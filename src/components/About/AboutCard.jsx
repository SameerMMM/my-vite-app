import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Mohamed Sameer </span>
                        from <span className="purple"> Batticaloa, Sri Lanka.</span>
                        <br />
                        Web Developer who loves to transform ideas into reality using
                        code.
                        <br />
                        Motivated designer and developer with experience creating
                        custom websites with ReactJs, JavaScript, HTML5, CSS3.
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Writing Tech Blogs
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Watching Movies
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
