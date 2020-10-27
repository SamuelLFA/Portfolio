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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat massa orci, nec faucibus tortor vehicula non. Praesent eu suscipit nisi. Fusce in bibendum neque. Ut sapien urna, dapibus eu hendrerit faucibus, fringilla et mi. Etiam nunc nisi, pharetra id sapien quis, aliquam consequat lectus. Curabitur eget massa lacus. Morbi quis elit non justo dictum consectetur. Curabitur vitae leo quis metus faucibus maximus at at massa. Proin sodales ullamcorper nisl sed egestas. Vestibulum ultricies libero turpis, quis finibus tortor aliquet sit amet. Nam aliquet nec libero a volutpat. Vivamus nec scelerisque nunc. Suspendisse tempus rutrum justo, in volutpat sem. Mauris eget suscipit libero.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;