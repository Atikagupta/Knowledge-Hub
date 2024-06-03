import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif !important;
  }
`;

const AdvertisersSection = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #f5f5f5;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #333;

  span {
    color: rgb(255, 23, 131);
  }
`;

const SectionIcon = styled.p`
  position: relative;
  display: inline-block;
  margin: 0 auto;
  padding: 0;
  font-size: 24px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 60%;
    height: 1px;
    background: #333;
  }

  &::before {
    left: -70px;
    width: 50px;
    margin-top: -5.5px;
    background: #f5f5f5;
  }

  &::after {
    right: -70px;
    width: 50px;
    margin-top: -5.5px;
  }
`;

const ServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

const ServiceCard = styled(Link)`
  background: #fff;
  padding: 2em 1.5em;
  border-radius: 5px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: 0.5s;
  position: relative;
  overflow: hidden;
  text-align: center;
  width: 300px;
  margin: 20px;
  display: block;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(#0dcaf0, rgb(255, 23, 131));
    position: absolute;
    left: 0;
    top: -98%;
    z-index: -2;
    transition: all 0.4s cubic-bezier(0.77, -0.04, 0, 0.99);
  }

  &:hover::after {
    top: 0;
  }
`;

const IconWrapper = styled.div`
  background-color: #ffffff;
  color: rgb(255, 23, 131);
  position: relative;
  margin: auto;
  font-size: 30px;
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: 0.5s;
  z-index: 3;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 600;
  color: #1f194c;
  margin: 1em 0;
  z-index: 3;
`;

const CardDescription = styled.p`
  color: #575a7b;
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: 0.03em;
  z-index: 3;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const DOstudy = () => {
    return (
        <AdvertisersSection id="advertisers">
            <div className="container">
                <div className="row">
                    <SectionHeader className="section-header text-center">
                        <SectionTitle className="fw-bold fs-1">
                            <br />
                            <br />
                            Upflairs<span className="b-class-secondary"> DevOps, Cloud & SRE </span> Study Material
                        </SectionTitle>
                        <SectionIcon className="sec-icon">
                            <i className="fa-solid fa-gear"></i>
                        </SectionIcon>
                    </SectionHeader>
                </div>
                <ServicesGrid className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
                    <ServiceCard className="col" to="/full-stack-web-development">
                        <Image src='' alt="Full Stack Web Development" />
                        <CardTitle>Full Stack Web Development</CardTitle>
                        <CardDescription>
                            Full Stack web development has increased its popularity like never before. A full stack developer needs both front-end and back-end skills.  Where backend requires a lot of coding skills and front-end requires more of designing & experience perspective for a coder.
                        </CardDescription>
                    </ServiceCard>
                    <ServiceCard className="col" to="/data-science">
                        <Image src='' alt="Data Science And Machine Learning with AI" />
                        <CardTitle>Data Science And Machine Learning with AI</CardTitle>
                        <CardDescription>
                            Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured, and unstructured data.
                        </CardDescription>
                    </ServiceCard>
                    <ServiceCard className="col" to="/devops-cloud-sre">
                        <Image src='' alt="DevOps, Cloud & SRE" />
                        <CardTitle>DevOps, Cloud & SRE</CardTitle>
                        <CardDescription>
                            The biggest industry infrastructure movement from anything to cloud is the basic reason to learn cloud computing and its practical use cases without any doubt and we are presenting this course for you.
                        </CardDescription>
                    </ServiceCard>
                    <ServiceCard className="col" to="/embedded-systems-robotics-iot">
                        <Image src='' alt="Embedded Systems and Robotics with IoT" />
                        <CardTitle>Embedded Systems and Robotics with IoT</CardTitle>
                        <CardDescription>
                            If you're ready to dive into the captivating realm of Embedded Systems and Robotics With IoT and carve out a rewarding career path, then look no further!
                        </CardDescription>
                    </ServiceCard>
                    <ServiceCard className="col" to="/embedded-systems-robotics-iot">
                        <Image src='' alt="Embedded Systems and Robotics with IoT" />
                        <CardTitle>Embedded Systems and Robotics with IoT</CardTitle>
                        <CardDescription>
                            If you're ready to dive into the captivating realm of Embedded Systems and Robotics With IoT and carve out a rewarding career path, then look no further!
                        </CardDescription>
                    </ServiceCard>
                    <ServiceCard className="col" to="/embedded-systems-robotics-iot">
                        <Image src='' alt="Embedded Systems and Robotics with IoT" />
                        <CardTitle>Embedded Systems and Robotics with IoT</CardTitle>
                        <CardDescription>
                            If you're ready to dive into the captivating realm of Embedded Systems and Robotics With IoT and carve out a rewarding career path, then look no further!
                        </CardDescription>
                    </ServiceCard>
                    <ServiceCard className="col" to="/embedded-systems-robotics-iot">
                        <Image src='' alt="Embedded Systems and Robotics with IoT" />
                        <CardTitle>Embedded Systems and Robotics with IoT</CardTitle>
                        <CardDescription>
                            If you're ready to dive into the captivating realm of Embedded Systems and Robotics With IoT and carve out a rewarding career path, then look no further!
                        </CardDescription>
                    </ServiceCard>
                    <ServiceCard className="col" to="/embedded-systems-robotics-iot">
                        <Image src='' alt="Embedded Systems and Robotics with IoT" />
                        <CardTitle>Embedded Systems and Robotics with IoT</CardTitle>
                        <CardDescription>
                            If you're ready to dive into the captivating realm of Embedded Systems and Robotics With IoT and carve out a rewarding career path, then look no further!
                        </CardDescription>
                    </ServiceCard>
                    <ServiceCard className="col" to="/embedded-systems-robotics-iot">
                        <Image src='' alt="Embedded Systems and Robotics with IoT" />
                        <CardTitle>Embedded Systems and Robotics with IoT</CardTitle>
                        <CardDescription>
                            If you're ready to dive into the captivating realm of Embedded Systems and Robotics With IoT and carve out a rewarding career path, then look no further!
                        </CardDescription>
                    </ServiceCard>
                </ServicesGrid>
            </div>
        </AdvertisersSection>
    );
};



export default DOstudy;
