import headerStyle from "./Header.module.css";
import iconImg from './imgs/wingscythe_icon.png';
import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <>
            <link href="https://fonts.googleapis.com/css2?family=Exo&display=swap" rel="stylesheet" />
            <div className = {headerStyle.container}>
                <img src = {iconImg} className = {headerStyle.icon}></img>
                <h1 className = {headerStyle.page}>{this.props.headerName}</h1>
            </div>

            </>
        )
    }
}

export default Header