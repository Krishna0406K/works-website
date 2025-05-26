import './tagline.css'
import Mover from '../mover/mover.js'

function Tagline() {
  return (
    <div>
         <div id='tagline-page' data-scroll>
                <h1>We <em>believe in the</em> POWER <em>of</em><br />
                    INTERNATIONAL CREATIVITY</h1>
                        </div>
                        <div id='button-container'><button id='Partner' href='#CONTACT' >Partner With Us</button></div>
                        <Mover/>
    </div>
  )
}

export default Tagline