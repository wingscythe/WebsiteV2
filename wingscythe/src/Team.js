import './Team.css';
import { SlideShow, Slide } from './SlideShow.js';
import helen_icon from './imgs/helen_icon.png';
import github_logo from './imgs/github_logo.png';
import linkedin_logo from './imgs/linkedin_logo.png';

function Team() {
    const slideContent = [
        {
            image: helen_icon,
            name: "Helen Luo",
            title: "Developer",
            github: "https://www.github.com",
            linkedin: "https://www.linkedin.com",
            description: "It's Helen Luo. Check her out at twitch.tv/CookiezforYou"
        },
        {
            image: helen_icon,
            name: "Helen Luo",
            title: "Artist",
            github: "https://www.github.com",
            linkedin: "https://www.linkedin.com",
            description: "It's Helen Luo. Check her out at twitter.com/CookiezForYou"
        }
    ];

    const slides = [
        <TeamSlide content = {slideContent[0]} />,
        <TeamSlide content = {slideContent[1]} />
    ];

    return (
        <div>
            <SlideShow slides = {slides} showArrows = {false}/>
        </div>
    );
}

function TeamSlide({content}) {
    return (
        <div className = "slide-content">
            <div className = "profile-container">
                <div className = "member-image">
                    <img id = "profile-image" src = {content.image} alt = "Profile Picture" />
                </div>
                <div className = "member-name">{content.name}</div>
                <div className = "member-title">{content.title}</div>
                <div className = "connection-icons">
                    <a href = {content.github} >
                        <img id = "github-logo" src = {github_logo} alt = "Github Logo" />
                    </a>
                    <a href = {content.linkedin} >
                        <img id = "linkedin-logo" src = {linkedin_logo} alt = "LinkedIn Logo" />
                    </a>
                </div>
            </div>
            <div className = "description-container">
                <div className = "description">
                    {content.description}
                </div>
            </div>
        </div>
    );
}

export default Team;