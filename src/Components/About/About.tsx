import React from 'react';
import Footer from '../../Footer/Footer';
import './About.css';

function About() {
  const skillsList = [
    { name: 'HTML, CSS, Javascript, Typescript', category: 'left', level: 70 },
    { name: 'Kotlin', category: 'left', level: 60 },
    { name: 'Python', category: 'left', level: 60 },
    { name: 'C++', category: 'right', level: 60 },
    { name: 'Java', category: 'right', level: 55 },
    { name: 'Arduino', category: 'right', level: 45 },
  ];

  return (
    <div className="about-container">
      <main className="about-main">

        <section className="about-content">
          <h2 className="about-title">About Me</h2>
          <div>
            <p className="about-text">
            I'm Emmanuel Gutierrez Rivera, currently pursuing my passion for 
            computer science at Wright State University . 
            At 22 years old, I'm dedicated and very exited to explore 
            the world of technology.
            </p>
          </div>
        </section>


        <section className="skills-section">
          <div className="skills-container">
            <h1 className="skills-title">SKILLS</h1>
            <h1>Programming Langguages</h1>
            
            <div className="skills-grid">
              <div className="skills-column">
                {skillsList
                  .filter((skill) => skill.category === 'left')
                  .map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <h2 className="skill-name">{skill.name}</h2>
                      <div className="skill-bar">
                        <div 
                          className="skill-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
              
              <div className="skills-column">
                {skillsList
                  .filter((skill) => skill.category === 'right')
                  .map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <h2 className="skill-name">{skill.name}</h2>
                      <div className="skill-bar">
                        <div 
                          className="skill-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;