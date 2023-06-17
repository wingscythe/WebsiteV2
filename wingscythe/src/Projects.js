import React from 'react';
import { SlideShow, Slide } from './SlideShow.js';
import doodledariotempbanner from "./imgs/doodledariotempbanner.jpg";

function About() {
    const slideContent = [
        {image:"https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg", projectName: "Project 1", projectDescription: "This is project 1.", github: "https://github.com/wingscythe"},
        {image:"https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg", projectName: "Project 2", projectDescription: "This is project 2.", github: "https://github.com/wingscythe"},
        {image:"https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg", projectName: "Project 3", projectDescription: "This is project 3.", github: "https://github.com/wingscythe"},
        {
            image: doodledariotempbanner, 
            projectName: "Doodle Dario", 
            projectDescription: "Doodle Dario was meant to be a contrarian approach to platformers and player assumptions. Players must fight their instincts and win through patience, knowledge, and skill.", 
            github: "https://github.com/WingScythe/Doodle-Dario",
            linkCard: "https://github-link-card.s3.ap-northeast-1.amazonaws.com/WingScythe/Doodle-Dario.png"
        }
    ];
    
    const slideImages = [
        <Slide content = {slideContent[0]} />,
        <Slide content = {slideContent[1]} />,
        <Slide content = {slideContent[2]} />,
        <Slide content = {slideContent[3]} />
    ];

    return (
        <div>
            <SlideShow slides = {slideImages}/>
        </div>
    );
}

export default About;