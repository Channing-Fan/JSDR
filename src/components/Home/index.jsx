import "./index.scss";
import Loader from "react-loaders";

// React Router Link to Navigate through Pages
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Loader type="line-scale" color="#fed002" width={500} />
            <div className="homepage">
                {/* <div class="color-area">
                    <p>Change sphere color</p>
                    <input
                        type="text"
                        id="rc"
                        maxLength={3}
                        placeholder="R"
                        size={3}
                    />
                    <input
                        type="text"
                        id="gc"
                        maxLength={3}
                        placeholder="G"
                        size={3}
                    />
                    <input
                        type="text"
                        id="bc"
                        maxLength={3}
                        placeholder="B"
                        size={3}
                    />
                    <button id="submit">Change Color</button>
                    <p id="chosen-color"></p>
                </div> */}

                <div class="sphere">
                    <div class="glow"></div>
                </div>

                <div class="center">
                    <h1 class="glitch is-glitching" data-text="I’m Chen Fan">
                        I’m Chen Fan
                    </h1>
                </div>
                <p className="homepage__paragraph">
                    Front End Web & App Developer.
                </p>
                <p className="homepage__paragraph lighter">
                    View my{" "}
                    <span>
                        {" "}
                        <Link
                            className="homepage__paragraph__link"
                            to="/portfolio"
                        >
                            {" "}
                            Projects
                        </Link>
                    </span>{" "}
                    and{" "}
                    <span>
                        <Link
                            className="homepage__paragraph__link"
                            to="/contact"
                        >
                            {" "}
                            Contact Me
                        </Link>
                    </span>{" "}
                    to turn your ideas into a great website.
                </p>
            </div>
        </>
    );
};

export default Home;
