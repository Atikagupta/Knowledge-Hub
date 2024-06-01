import React from 'react';

const FirstPage = () => {
    const sectionStyle = {
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
    };
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
        zIndex: 1,
    };
    const containerStyle = {
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: 'white',
        textAlign: 'center',
    };
    const videoBackgroundStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
    };
    const videoStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none', // So that clicks pass through the video
    };
    return (
        <section style={sectionStyle} id="hero-16-ubqjZm08YW">
            <div style={overlayStyle}></div>
            <div style={containerStyle}>
                <h1 className="mbr-section-title display-1">
                    <strong>Knowledge Hub</strong>
                </h1>
                <p className="mbr-text display-7">
                    Unlock Your Learning Potential with Upflairs - Dive into a World of Endless Knowledge!
                </p>
                <div className="mbr-section-btn">
                    <a className="btn btn-white-outline display-7" href="Register.jsx">
                        Start Learning
                    </a>
                </div>
            </div>
            <div style={videoBackgroundStyle}>
                <video autoPlay loop muted style={videoStyle}>
                    <source src="/images/Title video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};
export default FirstPage;
