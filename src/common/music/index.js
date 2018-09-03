import React, { Component } from 'react';
import './assets/css/_icon-font.scss'
import './assets/css/style.scss'

class Music extends Component {
    render() {
        return (
            <div>
                <button className="btn-music">
                    <i className="icon-note"></i>
                </button>
            </div>
        );
    }
}

export default Music;