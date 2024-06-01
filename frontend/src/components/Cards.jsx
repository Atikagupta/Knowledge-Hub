import React, { useRef, useEffect } from 'react';

const Cards = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const scrollPosition = window.scrollY;
                const translation = scrollPosition * 0.2; // Adjust the multiplier for the desired effect
                containerRef.current.style.transform = `translateX(-${translation}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <>
        <section
                data-bs-version="5.1"
                className="image05 cid-ubqjZm1Tv8"
                id="image-8-ubqjZm1Tv8"
            >
                <div className="container">
                    <div className="row ">
                        <div className="col-5 col-lg-5">
                            <div className="image-wrapper mb-5">
                                <img
                                    className="w-100"
                                    src="public/images/boywith logo.png"
                                    alt="Upflairs"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-lg">
                            <p className="mbr-side-description mbr-fonts-style mb-4 align-center display-7"> 
                            <br /><br /><br /><br />
                                    UpFlairs is an innovative educational technology company dedicated to empowering students across India.
                                    With a focus on emerging technologies like AI/ML, Data Science, Cloud computing, DevOps, 
                                    Full Stack Web Development, Embedded Systems, IoT and Robotics. 
                                    We've educated over 50K+ students worldwide, including those from prestigious institutions like IITs and NITs, 
                                    Deemed Universities and Other engineering Colleges.
                                    Our courses are meticulously designed to equip students with practical skills for tech-driven careers, 
                                    and we also provide lab setups to colleges, universities, and project solutions to companies in AI-ML, 
                                    Web Development, IoT, Robotics, Cloud & DevOps domains
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        
        <section
            data-bs-version="5.1"
            className="gallery07 cid-ubqjZm1TjW"
            id="gallery-14-ubqjZm1TjW"
        >
            <div className="container-fluid gallery-wrapper">
                <div className="row justify-content-center">
                    <div className="col-12 content-head"></div>
                </div>
                <div className="grid-container" ref={containerRef}>
                    <div className="grid-container-3">
                        <div className="grid-item">
                            <img
                                    src="public/images/move1.jpeg"
                                    alt="Upflairs"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="grid-item">
                            <img
                                    src="public/images/move2.jpeg"
                                    alt="Upflairs"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="grid-item">
                            <img
                                    src="public/images/move3.jpeg"
                                    alt="Upflairs"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="grid-item">
                            <img
                                    src="public/images/move4.jpeg"
                                    alt="Upflairs"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="grid-item">
                            <img
                                    src="public/images/move5.jpeg"
                                    alt="Upflairs"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
        </>
    );
};

export default Cards;
