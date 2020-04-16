import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import pic06 from '../images/pic06.jpg'
import pic07 from '../images/pic07.jpg'

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
          id="tech"
          className={`${this.props.article === 'tech' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Technology</h2>
          <p>
            At Prophecy Web Solutions, we develop innovative and functional custom web applications that generate more revenue and improve efficiency for your business using the latest technology in the market
          </p>
          <span className="image main">
            <img src={pic07} alt="" />
          </span>
          <h3 className="major">Frontend</h3>
          <p>
            Our front-end toolbox extends from HTML, CSS, javascript, Angular, React, and SASS asset pre-compilers. We design your applications with built in standards-compliant and mobile responsive solutions
          </p>
          <span className="image main">
            <img src={pic07} alt="" />
          </span>
          <h3 className="major">Backend</h3>
          <p>
            Our back-end stack includes Ruby, Rails, JavaScript, and postgreSQL and SQL for database management. We aim to use the most efficient back-end technologies, allowing for fast development and testing, deployment, versatility, and customization
          </p>
          <span className="image main">
            <img src={pic07} alt="" />
          </span>
          <h3 className="major">API Integration</h3>
          <p>
            With thousands of APIs available on the market, we have the access and ability to incorporate them into your application depending on your business needs and goals. Whether you need analytics, weather, maps, nearby locations, payment processing, or social media APIs, we have the integration solution for you
          </p>
          <span className="image main">
            <img src={pic07} alt="" />
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
          <h2 className="major">Projects</h2>
          <span className="image main">
            <h3>Mission Booked | Find a Volunteer Match |<br /> Web Application</h3>
            <img src={pic01} alt="" />
          </span>
          <p>
            WHAT: Platform that connects users with the desire to get involved in their community with a volunteer event
          </p>
          <p>
            HOW: Created and managed our own API/database for the organizations and events rendered upon a query by the user
          </p>
          <p>
            TECH USED: Ruby, Rails, JavaScript, React, React on Rails, React Spring/Select, HTML/CSS, PostgreSQL, Axios
          </p>
          <span className="image main">
            <h3>Prophesea Fishing App / Forum | Web Application | <br /> Coming Soon!</h3>
            <img src={pic02} alt="" />
          </span>
          <p>
            WHAT: Mobile and Web based application that allows users to search for sportfishing species and fishery information | Blog and Forum where fishermen can come together and disuss their favorite topics
          </p>
          <span className="image main">
            <h3>El Taco | Search For Taco Recipes |<br /> Web Application</h3>
            <img src={pic03} alt="" />
          </span>
          <p>
            WHAT: Platform that allows users to search for a wide variety of Taco recipes
          </p>
          <p>
            HOW: Utilized Edemam API allowing the site to render Taco recipe matches based on user query
          </p>
          <p>
            TECH USED: JavaScript, React, HTML/CSS, Express, Axios, Material UI
          </p>
          <span className="image main">
            <h3>YSK Artist - Digital Gallery | Web Application | <br /> Coming Soon!</h3>
            <img src={pic04} alt="" />
          </span>
          <p>
            WHAT: Digital Gallery showcasing Artist's work with interactive interface
          </p>
          <span className="image main">
            <h3>Vida Healing - Life Coach | Web Application | <br /> Coming Soon!</h3>
            <img src={pic05} alt="" />
          </span>
          <p>
            WHAT: Mobile and Web based Business application | Individual, Group, Marriage, and Couples Therapy
          </p>
          <span className="image main">
            <h3>Cana La Reina - Social Collective | Web Application <br /> Coming Soon!</h3>
            <img src={pic06} alt="" />
          </span>
          <p>
            WHAT: Digital Social Collective Agency
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
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
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
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
