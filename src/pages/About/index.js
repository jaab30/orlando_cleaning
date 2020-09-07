import React from 'react';
import Ribbon from "../../components/Ribbon";
import bookImg from "../../images/calendar_icon.png"
import cleanImg from "../../images/about_room.png"
import relaxImg from "../../images/relax2c.png"
import aboutIcon from "../../images/about_icon.png"

export const About = () => {
    return (
        <section className="about">
            <div className="about__icon">
                <img className="about__icon--img" src={aboutIcon} />
            </div>
            <div className="about__content">
                <h3 className="about__content--title">Professional cleaning service, with a personal touch</h3>
                <p className="about__content--text">We know and trust our MaidPro employees on a personal and professional level. Our cleaning PROs undergo thorough background checks prior to employment and are bonded and insured. They also receive extensive maid service training to reinforce the skills needed to clean to the highest standards yours! And while we strive to help our employees work to their greatest ability, we also make sure to have fun. Because when you love what you do, it shows in your work.</p>
                <br />
                <p className="about__content--text">We know and trust our MaidPro employees on a personal and professional level. Our cleaning PROs undergo thorough background checks prior to employment and are bonded and insured. They also receive extensive maid service training to reinforce the skills needed to clean to the highest standards yours! And while we strive to help our employees work to their greatest ability, we also make sure to have fun. Because when you love what you do, it shows in your work.</p>
            </div>
            <div className="about__ribbon-box">
                <Ribbon
                    title="book"
                    image={bookImg}
                />
                <Ribbon
                    title="clean"
                    image={cleanImg}
                />
                <Ribbon
                    title="relax"
                    image={relaxImg}
                />
            </div>

        </section>
    )
}

export default About;