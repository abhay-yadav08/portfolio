import React from 'react'


import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCards } from "./ProjectCards";
import ProjectCards from './ProjectCards';
import projImg1 from "../assets/img/project-img1.png";

// import projImg2 from "../assets/img/project-img2.png";
import projImg2 from "../assets/img/textInsightpic.png";

import projImg3 from "../assets/img/fooddeliveryimage.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";


// import 'animate.css';
// import TrackVisibility from 'react-on-screen';


export default function Projects() {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];


    return (
        <div>

            <section className="project" id="project">
                <Container>
                    <Row>
                        <Col >
                            <div>
                                <h2>Projects</h2>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                <ProjectCards title="project-1" description="project-1 description" imgUrl={projImg1} />
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <Row>
                                                <ProjectCards title="Text-Insight" description="analyze and extract valuable insights from text data" imgUrl={projImg2} />
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <Row>
                                                <ProjectCards title="food-delievery app" description="provide seamless and satisfying food ordering experience" imgUrl={projImg3} />
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src={colorSharp2}></img>
            </section>

        </div>
    )
}


// export default function Projects() {

//     const projects = [
//         {
//             title: "Business Startup",
//             description: "Design & Development",
//             imgUrl: projImg1,
//         },
//         {
//             title: "Business Startup",
//             description: "Design & Development",
//             imgUrl: projImg2,
//         },
//         {
//             title: "Business Startup",
//             description: "Design & Development",
//             imgUrl: projImg3,
//         },
//         {
//             title: "Business Startup",
//             description: "Design & Development",
//             imgUrl: projImg1,
//         },
//         {
//             title: "Business Startup",
//             description: "Design & Development",
//             imgUrl: projImg2,
//         },
//         {
//             title: "Business Startup",
//             description: "Design & Development",
//             imgUrl: projImg3,
//         },
//     ];


//     return (
//         <div>

//             <section className='project' id='project'>
//                 <Container>
//                     <Row>
//                         <Col>
//                             <h2>Projects</h2>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ab quia perferendis! Sint voluptatum, beatae voluptatibus vel dolore nulla, culpa ducimus in rerum ad facere commodi illum consectetur, quaerat aliquid!</p>

//                             <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                                 <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                                     <Nav.Item>
//                                         <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                                     </Nav.Item>
//                                     <Nav.Item>
//                                         <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                                     </Nav.Item>
//                                     <Nav.Item>
//                                         <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                                     </Nav.Item>
//                                 </Nav>

//                             </Tab.Container>

//                             <Tab.Content>
//                                 <Tab.Pane eventKey="first">
//                                     <Row>
//                                         {
//                                             projects.map((project, index) => {
//                                                 return (
//                                                     <ProjectCards
//                                                         key={index}
//                                                         {...project}                                {...project}
//                                                     />
//                                                 )
//                                             })
//                                         }
//                                     </Row>
//                                 </Tab.Pane>
//                                 <Tab.Pane eventKey="second">
//                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                                 </Tab.Pane>
//                                 <Tab.Pane eventKey="third">
//                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                                 </Tab.Pane>
//                             </Tab.Content>

//                         </Col>
//                     </Row>
//                 </Container>
//                     <img className="background-image-right" src={colorSharp2}></img>
//             </section>
//         </div>
//     )
// }
