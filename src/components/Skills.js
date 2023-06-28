import React from 'react'

import meter1 from "../assets/img/mernlogo2.png";
import meter2 from "../assets/img/Csslogo4.png";
import meter3 from "../assets/img/c++logo2Image.png";
import meter4 from "../assets/img/githubImg.png";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"



export default function Skills() {


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div>
            {/* <h4>this is skills section</h4> */}

            <section className="skill" id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="skill-bx wow zoomIn">
                                <h2>Skills</h2>
                                <p>possess good skills in MERN (MongoDB, Express.js, React, Node.js) stack , <br></br> html , css and javascript and c++</p>
                                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                    <div className="item">
                                        <img src={meter1} alt="Image" />
                                        <h5>Mern stack</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter2} alt="Image" />
                                        <h5>html , css and js</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter3} alt="Image" />
                                        <h5>C++</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter4} alt="Image" />
                                        <h5>git and github</h5>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="background-image-left" src={colorSharp} alt="Image" />
            </section>

        </div>
    )
}
