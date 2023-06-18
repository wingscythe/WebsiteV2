import React from 'react';
import { SlideShow, Slide } from './SlideShow.js';

function About() {
    const slideContent = [
        {image:"https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg", projectName: "Project 1", projectDescription: "This is project 1.", github: "https://github.com/wingscythe"},
        {image:"https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg", projectName: "Project 2", projectDescription: "This is project 2.", github: "https://github.com/wingscythe"},
        {image:"https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg", projectName: "Project 3", projectDescription: "This is project 3.", github: "https://github.com/wingscythe"}
    ];
    
    const slideImages = [
        <Slide content = {slideContent[0]} />,
        <Slide content = {slideContent[1]} />,
        <Slide content = {slideContent[2]} />,
    ];

    return (
        <div>
            <SlideShow slides = {slideImages}/>
        </div>
    );
}

export default About;