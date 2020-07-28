import PropTypes from 'prop-types'
import React from 'react'

//Import Images
import sc from '../images/sc.png'
import pic02 from '../images/pic02.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import pic06 from '../images/pic06.jpg'
import dkathletics from '../images/dkathletics.png'
import proton from '../images/proton.png'
import consultation from '../images/consultation.jpg'
import compass from '../images/compass.jpg'
import shoes from '../images/shoes.jpg'
import cube from '../images/cube.jpg'
import code from '../images/code.jpg'
import vida from '../images/vida.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="solutions"
          className={`${this.props.article === 'solutions' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h1 className="major">Solutions</h1>
          <h3>
            BY UTILIZING THE LATEST TECHNOLOGIES ON THE MARKET, WE HAVE THE
            ABILITY TO QUICKLY AND EFFICIENTLY GET YOUR APPLICATION UP AND
            RUNNING.
          </h3>
          <span className="image main">
            <img src={code} alt="" />
          </span>
          <h2 className="major">Tech Support</h2>
          <h3>
            We provide technical support, hosting services, SEO optimization,
            routine de-bugging and site maintenance / upkeep, staging site for
            testing new features and updates, and security against hackers
          </h3>
          <span className="image main">
            <img src={cube} alt="" />
          </span>
          <h2 className="major">Consultation</h2>
          <h3>
            By working closely with UX / UI designers and industry experts, we
            are here to educate and integrate innovative design and optimization
            services for your business. We develop customized road maps for
            success, providing guidance and direction to help you achieve your
            business goals
          </h3>
          <span className="image main">
            <img src={consultation} alt="" />
          </span>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h1 className="major">Projects</h1>
          <a href="https://vidahealing.net/">
            <h2>Vida Healing - Life Coach | Web App | Check it out! </h2>
          </a>
          <h3>
            A Mobile and Web based Business application | Individual, Group,
            Marriage, and Couples Therapy
          </h3>
          <span className="image main">
            <img src={vida} alt="vida healing picture" />
          </span>
          <a href="https://sustainablecleaning.net/">
            <h2>Sustainable Cleaning | Web App | Check it out!</h2>
          </a>
          <h3>
            High End Luxury Retail Cleaning Services + Enviromentally Conscious
            Cleaning Products
          </h3>
          <span className="image main">
            <img src={sc} alt="" />
          </span>
          <h2>Cana La Reina - Social Collective | Web App | Coming Soon!</h2>
          <h3>
            WHAT: Digital Social Media Marketing Agency | Agency that
            specializes in engaging and custom content creation that establishes
            and elevates brand identity for small businesses
          </h3>
          <span className="image main">
            <img src={pic06} alt="" />
          </span>
          <h2>DK Athletics - Personal Trainer | Web App | Coming Soon!</h2>
          {/* <h3>WHAT: Something about Dk</h3> */}
          <span className="image main">
            <img src={dkathletics} alt="" />
          </span>
          <h2>Proton Ministries Global Network | Web App | Coming Soon!</h2>
          {/* <h3>WHAT: Something about proton</h3> */}
          <span className="image main">
            <img src={proton} alt="" />
          </span>
          <h2>Prophesea Fish Tracker + Forum | Web App | Coming Soon!</h2>
          <h3>
            WHAT: Mobile and Web based application that allows users to search
            for sportfishing species and fishery information | Blog and Forum
            where fishermen can come together and disuss their favorite topics
          </h3>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <span className="image main"></span>
          <h2>YSK - Digital Gallery | Web App | Coming Soon!</h2>
          <h3>
            WHAT: Digital Gallery showcasing Artist's work with interactive
            interface
          </h3>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h1 className="major">Who We are</h1>
          <h3>
            Prophecy Web Solutions is a full-service web development agency
            founded in 2020 in Miami Florida. Our goal is to provide clients
            with solutions that will increase business and online conversions by
            building custom, functional, aesthetically pleasing applications
          </h3>
          <span className="image main">
            <img src={compass} alt="" />
            <br />
            <h1>What We do</h1>
            <h3>
              We develop innovative and functional custom web and mobile
              applications that generate more revenue and improve efficiency for
              your business using the latest technology on the market
            </h3>
            <br />
            <img src={shoes} alt="" />
            <br />
            <h1>Why We Do it</h1>
            <h3>
              Starting a business or changing directions can be a challenge, but
              we are here to help build and enhance your online presence. Your
              application will be managed and hosted with cloud based platforms
              allowing for seamless and regular management to suit your business
              needs as they develop
            </h3>
          </span>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h1 className="major">Get In Touch!</h1>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Phone Number</label>
              <input type="tel" name="tel" id="tel" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <textarea name="email" id="email" rows="1"></textarea>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.instagram.com/prophecywebsolutions/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/prophecy-web-solutions"
                className="icon fa-linkedin"
              >
                <span className="label">linkedin</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
