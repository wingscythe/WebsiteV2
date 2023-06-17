import { useState } from "react";
import "./SlideShow.css";

export function SlideShow({slides}) {

    const [ currentIndex, SetCurrentIndex ] = useState(0);

    function PrevSlide() {
        const onFirstSlide = currentIndex === 0;
        const newIndex = onFirstSlide ? slides.length - 1 : currentIndex - 1;
        SetCurrentIndex(newIndex);
    }
    
    function NextSlide() {
        const onLastSlide = currentIndex === slides.length - 1;
        const newIndex = onLastSlide ? 0 : currentIndex + 1;
        SetCurrentIndex(newIndex);
    }

    function GoToSlide(index) {
        SetCurrentIndex(index);
    }

    return (
        <div className="slideshow-wrapper">
            <div className = "slideshow-container">
                <div className = "slide">
                    {slides[currentIndex]}
                </div>
                <div className = "controls">
                    <div className = "prev" onClick = {PrevSlide}>&#9664;</div>
                    <div className = "dots-container">
                        {slides.map((slide, slideIndex) => (
                            <div className = "dots" key={slideIndex} onClick = {() => GoToSlide(slideIndex)}></div>
                        ))}
                    </div>
                    <div className = "next" onClick = {NextSlide}>&#9654;</div>
                </div>
            </div>

        </div>
    );
}

export function Slide({content}) {
    const slideImage = {
        height: "90%",
        width: "90%",
        margin: "auto",
        marginTop: "2%",
        backgroundImage: `url(${content.image})`
    }

    return (
    <div className = "slide-content">
        <div className = "image-container">
            <div className = "project-image" style = {slideImage}></div>        
        </div>
        <div className = "detail-container">
            <div className = "project-container">
                <div className = "project-title">
                    {content.projectName}
                </div>
                <div className = "project-description">
                    {content.projectDescription}
                </div>
            </div>
            <div className = "github-container"> 
                <div className = "github-title">
                    Github
                </div>
                <div className = "github-source">
                    {content.github}
                </div>
            </div>
        </div>
    </div>
    );
}