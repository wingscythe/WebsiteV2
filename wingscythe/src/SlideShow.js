import { useState } from "react";

export function SlideShow({slides}) {

    const [ currentIndex, SetCurrentIndex ] = useState(0);

    const slideContainerStyle = {
        height: "1000px",
        width: "1000px",
        position: "relative"
    };

    const slideStyle = {
        height: "100%", 
        width: "100%",
        backgroundImage: `url(${slides[currentIndex]})`
    };

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
        <div className = "slideshow-container" style = {slideContainerStyle}>
            <div className = "slideshow-inner" style = {slideStyle}></div>
            <div className = "prev" onClick = {PrevSlide}>&#10094;</div>
            <div className = "next" onClick = {NextSlide}>&#10095;</div>
            <div className = "dots-container">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick = {() => GoToSlide(slideIndex)}>
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
}