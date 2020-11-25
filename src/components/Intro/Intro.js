import React from "react";

import "./Intro.css";
import bgVideo from "../../resources/video/webm/1300678_Abstract_huge_football_HD_BG.webm"

const Intro = () => {

    const playVideo = () => {
        return (
            <div className="intro__video fadeIn">
                <video className="intro__video__content" autoPlay muted loop>
                    <source src={bgVideo} type="video/webm" />
                    Your browser is not supported
                </video>
            </div>
        )
    }

    return (
        <section className="intro">
            {playVideo()}
            <div className="intro__top fadeIn">
                <div className="intro__top__skew">
                    <h1 className="intro__h1">
                        All You Ever Wanted <span className="intro__span span">to Know About Football</span>
                    </h1>
                </div>
            </div>
            <div className="intro__bot fadeIn">
                <div className="intro__top__skew">
                    <h2 className="intro__h2">
                        Is Right Here
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Intro;