/*import React from "react";

const PageContent = ({ activePage }) => {
  switch (activePage) {
    case "dashboard":
      return (
        <div>
          <h2 className="display-5 mb-4">Dashboard</h2>
          <div className="card mb-4 p-3">
            <h3 className="h5">Welcome To Keshav Memorial Institute of Technology</h3>
            <p>KESHAV MEMORIAL INSTITUTE OF TECHNOLOGY (KMIT), established in 2007...</p>
          </div>
          {}
        </div>
      );
    case "about":
      return (
        <div>
          <h2 className="display-6 mb-4">About KMIT</h2>
          <p>Keshav Memorial Institute of Technology (KMIT) is a premier engineering college...</p>
        </div>
      );
    case "events":
      return (
        <div>
          <h2 className="display-6 mb-4">Upcoming Events</h2>
          <div className="card mb-3 p-3">
            <h3 className="h5">Synergy 2024</h3>
            <p>Date: March 15-17, 2024...</p>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default PageContent;*/
/*import React from 'react';
import './PageContent.css';

const PageContent = ({ activePage }) => {
    const renderContent = () => {
        switch (activePage) {
            case 'dashboard':
                return (
                    <div>
                        <h2>Dashboard</h2>
                        <p>Welcome to the KMIT Dashboard. Here's some introductory information about KMIT.</p>
                    </div>
                );
            case 'about':
                return (
                    <div>
                        <h2>About KMIT</h2>
                        <p>Keshav Memorial Institute of Technology (KMIT) is a premier engineering college...</p>
                    </div>
                );
            case 'events':
                return (
                    <div>
                        <h2>Upcoming Events</h2>
                        <ul>
                            <li>Synergy 2024: March 15-17</li>
                            <li>Tech Symposium: April 5</li>
                        </ul>
                    </div>
                );
            default:
                return <p>Select a page to view content.</p>;
        }
    };

    return <div className="page-content">{renderContent()}</div>;
};

export default PageContent;*/
/*import React from 'react';
import './PageContent.css';

const PageContent = ({ activePage }) => {
    const renderContent = () => {
        switch (activePage) {
            case 'dashboard':
                return (
                    <div>
                        <h2>Dashboard</h2>
                        <p>Welcome to the KMIT Dashboard. Here's some introductory information about KMIT.</p>
                    </div>
                );
            case 'about':
                return (
                    <div>
                        <h2>About KMIT</h2>
                        <p>Keshav Memorial Institute of Technology (KMIT) is a premier engineering college...</p>
                    </div>
                );
            case 'events':
                return (
                    <div>
                        <h2>Upcoming Events</h2>
                        <ul>
                            <li>Synergy 2024: March 15-17</li>
                            <li>Tech Symposium: April 5</li>
                        </ul>
                    </div>
                );
            default:
                return <p>Select a page to view content.</p>;
        }
    };

    return (
        <div className="page-content-container">
            <div className="page-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default PageContent;*/
/*import React from 'react';
import './PageContent.css';

const PageContent = ({ activePage }) => {
    const renderContent = () => {
        switch (activePage) {
            case 'dashboard':
                return (
                    <div>
                        <h2>Dashboard</h2>
                        <p>Welcome to the KMIT Dashboard. Here's some introductory information about KMIT.</p>
                    </div>
                );
            case 'about':
                return (
                    <div>
                        <h2>About KMIT</h2>
                        <p>Keshav Memorial Institute of Technology (KMIT) is a premier engineering college...</p>
                    </div>
                );
            case 'events':
                return (
                    <div>
                        <h2>Upcoming Events</h2>
                        <ul>
                            <li>Synergy 2024: March 15-17</li>
                            <li>Tech Symposium: April 5</li>
                        </ul>
                    </div>
                );
            default:
                return <p>Select a page to view content.</p>;
        }
    };

    return (
        <div className="page-content-wrapper">
            <div className="page-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default PageContent;*/
/*import React from 'react';
import './PageContent.css';

const PageContent = ({ activePage }) => {
    const renderContent = () => {
        switch (activePage) {
            case 'dashboard':
                return (
                    <div>
                        <h2>Dashboard</h2>
                        <p>Welcome to the KMIT Dashboard. Here's some introductory information about KMIT.</p>
                    </div>
                );
            case 'about':
                return (
                    <div>
                        <h2>About KMIT</h2>
                        <p>Keshav Memorial Institute of Technology (KMIT) is a premier engineering college...</p>
                    </div>
                );
            case 'events':
                return (
                    <div>
                        <h2>Upcoming Events</h2>
                        <ul>
                            <li>Synergy 2024: March 15-17</li>
                            <li>Tech Symposium: April 5</li>
                        </ul>
                    </div>
                );
            default:
                return <p>Select a page to view content.</p>;
        }
    };

    return (
        <div className="page-content-wrapper">
            <div className="page-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default PageContent;*/
/*import React from 'react';
import './PageContent.css';


const PageContent = ({ activePage }) => {
    const renderContent = () => {
        switch (activePage) {
            case 'dashboard':
                return (
                    <div>
                        <h2>Dashboard</h2>
                        <p>Welcome to the KMIT Dashboard. Here's some introductory information about KMIT.</p>
                    </div>
                );
            case 'about':
                return (
                    <div>
                        <h2>About KMIT</h2>
                        <p>Keshav Memorial Institute of Technology (KMIT) is a premier engineering college...</p>
                    </div>
                );
            case 'events':
                return (
                    <div>
                        <h2>Upcoming Events</h2>
                        <ul>
                            <li>Synergy 2024: March 15-17</li>
                            <li>Tech Symposium: April 5</li>
                        </ul>
                    </div>
                );
            default:
                return <p>Select a page to view content.</p>;
        }
    };

    return (
        <div className="page-content-wrapper">
            <div className="page-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default PageContent;*/
/*import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './PageContent.css';

const PageContent = ({ activePage }) => {
    const renderContent = () => {
        switch (activePage) {
            case 'dashboard':
                return (
                    <div>
                        <h2>Dashboard</h2>
                        <p>Welcome to the KMIT Dashboard. Here's some introductory information about KMIT.</p>
                    </div>
                );
            case 'about':
                return (
                    <div>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://res.cloudinary.com/dsfgf7eb7/image/upload/v1732109250/cover_pbns3r.png"
                                    alt="First Slide"
                                />
                                <Carousel.Caption>
                                    <h3>Our Vision</h3>
                                    <p>To foster innovation and academic excellence.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://res.cloudinary.com/dsfgf7eb7/image/upload/v1732109385/9864ad64139023aff21e2f9cc2641bf4_iowgms.jpg"
                                    alt="Second Slide"
                                />
                                <Carousel.Caption>
                                    <h3>Our Mission</h3>
                                    <p>To empower students with knowledge and skills for the future.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        
                    </div>
                );
            case 'events':
                return (
                    <div>
                        <h2>Upcoming Events</h2>
                        <ul>
                            <li>Synergy 2024: March 15-17</li>
                            <li>Tech Symposium: April 5</li>
                        </ul>
                    </div>
                );
            default:
                return <p>Select a page to view content.</p>;
        }
    };

    return (
        <div className="page-content-wrapper">
            <div className="page-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default PageContent;*/
/*import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './PageContent.css';

const PageContent = ({ activePage }) => {
    const renderContent = () => {
        switch (activePage) {
            case 'dashboard':
                return (
                    <div>
                        <h2>Dashboard</h2>
                        <p>Keshav Memorial Institute of Technology (KMIT), established in year 2007, is one of the premier engineering colleges in the state of Telangana. KMIT is sponsored by Keshav Memorial Education Society (KMES), well known in Hyderabad, for the past 75 years, for running various educational institutions of repute. KMIT is approved by All India Council for Technical Education (AICTE), New Delhi, and affiliated to Jawaharlal Nehru Technological University (JNTU), Hyderabad and recognized by the Govt. of Telangana. KMIT is co-promoted and powered by Genesis Solutions Pvt. Ltd, a premier institute in Hyderabad imparting industry focused software training and education in emerging technologies and having tie-ups with leading MNCs. KMIT campus is located in Narayanaguda, a central locality in the city of Hyderabad.</p>
                    </div>
                );
            case 'about':
                return (
                    <div>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel-image"
                                    src="https://res.cloudinary.com/dsfgf7eb7/image/upload/v1732109250/cover_pbns3r.png"
                                    alt="First Slide"
                                />
                                <Carousel.Caption>
                                    
                                    
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel-image"
                                    src="https://res.cloudinary.com/dsfgf7eb7/image/upload/v1732109385/9864ad64139023aff21e2f9cc2641bf4_iowgms.jpg"
                                    alt="Second Slide"
                                />
                                <Carousel.Caption>
                                    
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                );
            case 'events':
                return (
                    <div>
                        <h2>Upcoming Events</h2>
                        <ul>
                            <li>Synergy 2024: March 15-17</li>
                            <li>Tech Symposium: April 5</li>
                        </ul>
                    </div>
                );
            default:
                return <p>Select a page to view content.</p>;
        }
    };

    return (
        <div className="page-content-wrapper">
            <div className="page-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default PageContent;*/
/*import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './PageContent.css';

const PageContent = ({ activePage }) => {
    const renderContent = () => {
        switch (activePage) {
            case 'dashboard':
                return (
                    <div className="dashboard-container">
                        <div className="dashboard-text">
                            <h2>Dashboard</h2>
                            <p>
                                Keshav Memorial Institute of Technology (KMIT), established in the year 2007, is one of the premier engineering colleges in the state of Telangana. KMIT is sponsored by Keshav Memorial Education Society (KMES), well known in Hyderabad, for the past 75 years, for running various educational institutions of repute. KMIT is approved by All India Council for Technical Education (AICTE), New Delhi, and affiliated to Jawaharlal Nehru Technological University (JNTU), Hyderabad and recognized by the Govt. of Telangana. KMIT is co-promoted and powered by Genesis Solutions Pvt. Ltd, a premier institute in Hyderabad imparting industry-focused software training and education in emerging technologies and having tie-ups with leading MNCs. 
                            </p>
                        </div>
                        <div className="dashboard-image">
                            <img
                                src="https://res.cloudinary.com/dsfgf7eb7/image/upload/v1732109385/9864ad64139023aff21e2f9cc2641bf4_iowgms.jpg"
                                alt="KMIT Campus"
                            />
                        </div>
                    </div>
                );
            case 'about':
                return (
                    <div>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel-image"
                                    src="https://res.cloudinary.com/dsfgf7eb7/image/upload/v1732109250/cover_pbns3r.png"
                                    alt="First Slide"
                                />
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel-image"
                                    src="https://res.cloudinary.com/dsfgf7eb7/image/upload/v1732524938/Keshav_Memorial_Institute_of_Technology-182_qzns1p.jpg"
                                    alt="Second Slide"
                                />
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                );
            case 'academics':
                return (
                    <div>
                        <h2>Upcoming Events</h2>
                        <ul>
                            <li>Codenovate:November 30</li>
                        </ul>
                    </div>
                );
            default:
                return <p>Select a page to view content.</p>;
        }
    };

    return (
        <div className="page-content-wrapper">
            <div className="page-content">{renderContent()}</div>
        </div>
    );
};

export default PageContent;*/
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './PageContent.css';

const PageContent = ({ activePage }) => {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (cardIndex) => {
        setActiveCard(cardIndex);
    };

    const renderContent = () => {
        switch (activePage) {
            case 'dashboard':
                return (
                    <div className="dashboard-container">
                        <div className="dashboard-text">
                            <h2>Dashboard</h2>
                            <p>
                                Keshav Memorial Institute of Technology (KMIT), established in the year 2007, is one of the premier engineering colleges in the state of Telangana. KMIT is sponsored by Keshav Memorial Education Society (KMES), well known in Hyderabad, for the past 75 years, for running various educational institutions of repute. KMIT is approved by All India Council for Technical Education (AICTE), New Delhi, and affiliated to Jawaharlal Nehru Technological University (JNTU), Hyderabad and recognized by the Govt. of Telangana. KMIT is co-promoted and powered by Genesis Solutions Pvt. Ltd, a premier institute in Hyderabad imparting industry-focused software training and education in emerging technologies and having tie-ups with leading MNCs. 
                            </p>
                        </div>
                        <div className="dashboard-image">
                            <img
                                src="https://res.cloudinary.com/dsfgf7eb7/image/upload/v1732109385/9864ad64139023aff21e2f9cc2641bf4_iowgms.jpg"
                                alt="KMIT Campus"
                            />
                        </div>
                    </div>
                );
            case 'about':
                return (
                    <div>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel-image"
                                    src="https://res.cloudinary.com/dsfgf7eb7/image/upload/v1732109250/cover_pbns3r.png"
                                    alt="First Slide"
                                />
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel-image"
                                    src="https://res.cloudinary.com/dsfgf7eb7/image/upload/v1732524938/Keshav_Memorial_Institute_of_Technology-182_qzns1p.jpg"
                                    alt="Second Slide"
                                />
                                <Carousel.Caption></Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                );
            case 'academics':
                return (
                    <div className="academics-container">
                        <h2>Departments</h2>
                        <div className="card-container">
                            {[
                                { name: 'Computer Science and Engineering', short: 'CSE' },
                                { name: 'CSE (Artificial Intelligence and Machine Learning)', short: 'CSM' },
                                { name: 'Information Technology', short: 'IT' }
                            ].map((department, index) => (
                                <div
                                    key={index}
                                    className={`card ${activeCard === index ? 'active-card' : ''}`}
                                    onClick={() => handleCardClick(index)}
                                >
                                    <h3>{department.short}</h3>
                                    <p>{department.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return <p>Select a page to view content.</p>;
        }
    };

    return (
        <div className="page-content-wrapper">
            <div className="page-content">{renderContent()}</div>
        </div>
    );
};

export default PageContent;
