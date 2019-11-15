import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import universe from '../assets/universe.jpg';

class Main extends Component {
    render() 
    {
        return (
            <main>
                <div className="info">
                    <div className="info-avatar">
                        <img src={universe} alt="avatar" />
                    </div>
                    <div className="info-user">
                        <div className="info-user-name">
                            TestUsername
                        </div>
                        <div className="info-user-edit">
                            <Link to="#">Edit Profile</Link>
                        </div>
                        <div className="info-user-activities">
                            <span>5 Posts</span>
                            <span>23k followers</span>
                            <span>212 following</span>
                        </div>
                        <div className="info-user-info">
                            <span>Cool Title</span>
                            <span>Description</span>
                            <span><Link to="#">test.com</Link></span>
                        </div>
                    </div>
                    <div className="info-action">
                        <span><Link to="#">Add New Post</Link></span>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;
