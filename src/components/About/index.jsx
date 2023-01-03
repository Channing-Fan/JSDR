import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import React from "react";

// Animation Import
import gif from "../../assets/Videos/Web Portfolio About Me Animation.gif";

const About = () => {
    return (
        <>
            <Loader type="line-scale" color="#fed002" width={500} />

            <div className="about-me">
                <div className="about-me__description">
                    <h1 className="about-me__description__heading">
                        {" "}
                        <AnimatedLetters
                            strArray={"About Me".split("")}
                            startIdx={1}
                        />
                    </h1>
                    <p className="about-me__description__paragraph">
                        I’m Chen, a Front-End Developer based in Melbourne,
                        Australia. Interested in and passionate about building
                        the Frontend of Websites and Web Applications.
                        <br />
                        <br />
                        Here are a few technologies I’ve been working with
                        recently:
                    </p>
                    <ul className="about-me__description__list">
                        <li className="about-me__description__list__item">
                            HTML
                        </li>
                        <li className="about-me__description__list__item">
                            CSS
                        </li>
                        <li className="about-me__description__list__item">
                            Sass/Scss
                        </li>
                        <li className="about-me__description__list__item">
                            JavaScript
                        </li>
                        <li className="about-me__description__list__item">
                            React.js
                        </li>
                        <li className="about-me__description__list__item">
                            Nodejs
                        </li>
                    </ul>
                </div>
                <div className="about-me__illustration">
                    <img
                        src={gif}
                        alt="Welcome to Chen's Portfolio"
                        className="about-me__illustration__resource"
                    />
                </div>
            </div>
        </>
    );
};

export default About;
