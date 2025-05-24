import './about.css'
import Tagline from '../tagline/tagline'
import Footer from '../footer/footer'
import aboutvid from '../../assets/about page/ZN0WL59VSaG2rlYPK40e2w-works_2024_reel_web_optimized.mp4'

function About() {
  return (
    <div>
      <div id='page1'>
        <video src={aboutvid} autoPlay loop muted />
      </div>
      <div id='page2'>
        <div id='about-content'>
          <div id='left'>
            <div id='left-top'>
              <time dateTime='6:18'>6:18AM</time>
              <span>New York City</span>
            </div>
            <div id='left-middle'>
              <span>Services</span><br/>
              <p>Creative Direction<br />
                Brand Positioning<br />
                Art Direction<br />
                Experiential Design<br />
                Motion & Animation<br />
                Digital<br/>
                Print & Editorial Design</p>
            </div>
            <div id='left-bottom'>
              <h1>Recent Recognition</h1><br/>
              <a href='https://the-brandidentity.com/...'>The Brand Identity 🡥</a><br />
              <a href='https://www.wix.com/playground/...'>Wix Studio Spotlight 🡥</a><br />
              <a href='https://www.itsnicethat.com/...'>It's Nice That 🡥</a><br />
              <a href='https://player.vimeo.com/video/...'>Pantone 🡥</a>
            </div>
          </div>

          <div id='middle'>
            <div id='middle-top'>
              <a href='https://www.instagram.com/works.studio/'>Instagram 🡥</a>
            </div>
            <div id='middle-bottom'>
              <span>Select Clients</span>
              <p>Nike<br />Louis Vuitton<br />Equinox<br />Fear of God<br />Virgin Music<br />
                Ferrari<br />Calvin Klein<br />Converse<br />U.S. Soccer<br />Beyonce<br />
                Netflix<br />Heron Preston</p>
            </div>
          </div>

          <div id='right'>
            <p>We are a <em>New York City</em> based creative studio dedicated to <em>cultural advancement</em> through <em>strategies</em> and <em>interdisciplinary</em> design. </p><br />
            <p>The name WØRKS is an ode to the <em>Deutscher Werkbund</em>, the German association of artists, architects, designers and indus­tri­al­ists established in 1907, and the prelude to the Bauhaus. As such, we design for the <em>collective human experience</em>, across mediums, eschewing lines between physical and digital.</p>
          </div>
        </div>
      </div>
      <Tagline />
      <Footer />
    </div>
  )
}

export default About