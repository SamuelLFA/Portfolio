import React from 'react';

import './styles.css';
import programmer from '../../assets/img/programmer.png';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content">
                <div className="title">
                    <h1>Back-end Developer</h1>
                    <h2>I develop and create simple and smart things that make something easier</h2>

                    <img
                        src={programmer}
                        alt="Programmer"
                        className="programmer-image"
                    />
                </div>

                <div className="presentation">
                    <h3>Hi, I’m Samuel Nice to meet you.</h3>
                    <div className="presentation-text">
                        <p>
                            A computer scientist who learned his first line of code in the year 2015 and is now passionate about the back-end world.
                            I am a qualified and curious developer with the desire to learn something new every day.
                            A person with great adaptability and able to deal with the problems that are presented.
                        </p>
                    </div>
                </div>

                <div className="tech">
                    <div className="card">
                        <h3>Back-end</h3>
                        <div className="groups">
                            <div className="tech-group">
                                <h4>Languages</h4>
                                <ul>
                                    <li>Javascript</li>
                                    <li>Elixir</li>
                                    <li>Java</li>
                                    <li>Python</li>
                                </ul>
                            </div>

                            <div className="tech-group">
                                <h4>Frameworks</h4>
                                <ul>
                                    <li>Node.js</li>
                                    <li>Phoenix</li>
                                    <li>Spring</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h3>Database</h3>
                        <div className="groups">
                            <div className="tech-group">
                                <h4>SQL</h4>
                                <ul>
                                    <li>PostgreSQL</li>
                                    <li>SQL Server</li>
                                </ul>
                            </div>

                            <div className="tech-group">
                                <h4>NoSQL</h4>
                                <ul>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
