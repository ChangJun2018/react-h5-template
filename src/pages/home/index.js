import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.scss'

class Index extends Component {
    render() {
        return (
            <div className="index-page">
                <Link to='/swiper'>
                    <p className="name">My name is ChangJun</p>
                </Link>
            </div>
        );
    }
}

export default Index;