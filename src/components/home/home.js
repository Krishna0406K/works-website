import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import './home.css'
import { useEffect } from 'react'
import Footer from '../footer/footer'
import pic1 from '../../assets/pic1.webp'
import pic2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import pic5 from '../../assets/pic5.webp'
import LocomotiveScroll from 'locomotive-scroll';
import pic6 from '../../assets/page3 pics/1726409479-works_mineralhealth_brand_identity_01.webp'
import pic7 from '../../assets/page3 pics/1727537111-works_virginmusic-design_thumbnail.webp'
import pic8 from '../../assets/page3 pics//1728929066-works_essentials-identity_thumbnail.webp'
import pic9 from '../../assets/page3 pics/1738687527-works_apparatus_subjects_design_thumbnail.webp'  
import pic10 from '../../assets/page3 pics/1741972100-works_nikeskims_identity_thumbnail.webp' 
import pic11 from '../../assets/page3 pics/1740603450-works_americaneagle_life_your_life_design_thumb.webp'
import Tagline from '../tagline/tagline'


function Front() {
    useGSAP(() => {
        gsap.to("#loader", {
            top: "-100%",
            delay: 0.7,
            duration: 2,
            ease: "expo.out",
        })
    })

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#loader"),
      smooth: true,
      lerp: 1,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  useEffect(() => {
    const elems = document.querySelectorAll('.elem');
    const page2 = document.querySelector('#page2');
    elems.forEach((elem) => {
      elem.addEventListener('mouseenter', function() {
       const img = this.getAttribute('data-img');
       page2.style.backgroundImage = `url(${img})`;
      });
    });
    return () => {
      elems.forEach((elem) => {
        elem.removeEventListener('mouseenter', function() {});
      });
    };
  }, []);

  return (
      <>
      <div id='loader'>
              <h1><em>Reflect. Express. Empower.</em></h1>
          </div>
      <div id='main'>   
          <div id='page1' className='bg-[rgb(245, 227, 26)]' data-scroll data-scroll-speed ="-2.5">
              <h1>CREATIVE <em>PROFESSIONALS<br /></em> DEDICATED <em>to</em> CULTURAL<br />
                  ADVANCEMENT <em>through<br /></em> STRATEGY <em>and</em> DESIGN.</h1>
          </div>
          <div id='page2' data-scroll data-scroll-speed ="2">
              <div className='elem' data-img={pic1} loading ="lazy">
                    <h2>Converse</h2>
                  <div className='moving'>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>

                  </div>
              </div>
              <div className='elem' data-img={pic2} loading ="lazy">
                  <h2>Nike NFL</h2>
                  <div className='moving'>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>

                  </div>
              </div>
              <div className='elem' data-img={pic3} loading ="lazy">
                  <h2>Mineral </h2>
                  <div className='moving'>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>

                  </div>
              </div>
              <div className='elem' data-img={pic4} loading ="lazy">
                  <h2>Future World</h2>
                  <div className='moving'>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>

                  </div>
              </div>
              <div className='elem' data-img={pic5} loading ="lazy">
                  <h2>Beyonce</h2>
                  <div className='moving'>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>
                      <div className='moving-in'>
                          <h5>Creating Direction</h5>
                          <h5>Digital Design</h5>
                          <h5>Art Direction</h5>
                          <h5>Branding Identity</h5>
                          <h5>Type Design</h5>
                      </div>

                  </div>
              </div>
          </div>
          <div id='page3' data-scroll>
            <div className='image-container'>
                <div className='image-div'>
                    <div className='overlay'>
                        <p>Mineral Health</p>
                    </div>
                    <img src={pic6} alt='mineral health'/>
                </div>
                <div className='image-div'>
                    <div className='overlay'>
                        <p>Virgin Music</p>
                    </div>
                    <img src= {pic7} alt='virgin music'/>
                </div>
                <div className='image-div'>
                    <div className='overlay'>
                        <p>Essentials<br/>Fear of God</p>
                    </div>
                    <img src= {pic8} alt='essentials fear of god'/>
                </div>
                <div className='image-div'>
                    <div className='overlay'>
                        <p>Apparatus</p>
                    </div>
                    <img src= {pic9} alt='apparatus'/>
                </div>
                <div className='image-div'>
                    <div className='overlay'>
                        <p>Skims</p>
                    </div>
                    <img src= {pic10} alt='skims'/>
                </div>
                <div className='image-div'>
                    <div className='overlay'>
                        <p>American Eagle</p>
                    </div>
                    <img src= {pic11} alt='american eagle'/>
                </div>
            </div>
          </div>
      </div> 
      <Tagline/>
      <Footer/>   
      </>
  )
}

export default Front