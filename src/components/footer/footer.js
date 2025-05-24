import './footer.css'
import insta from '../../assets/footer/instagram.png'
import facebook from '../../assets/footer/facebook.png'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate();

  return (
    <>
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-section company">
                <p></p>
                <div className="social-icons">
                    <a href="https://www.instagram.com/kriishnaa._.k/"><img src={insta} alt="Instagram"/></a>
                    <a href="https://www.facebook.com/"><img src={facebook} alt="Facebook"/></a>
                </div>
            </div>

            <div class="footer-section quick-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href=' ' onClick={() => navigate("/")}>Home</a></li>
                    <li><a href=' ' onClick={() => navigate("/about")}>About</a></li>
                    <li><a href=' ' onClick={() => navigate("/ideas")}>Ideas</a></li>
                    <li><a href=' ' onClick={() => navigate("/contact")}>Contact</a></li>
                </ul>
            </div>

            <div class="footer-section contact">
                <h3>Contact Us</h3>
                <p><span class="icon">⟟</span> 500 N Bell Ave #109, Denton, TX 76209, United States</p>
                <p><span class="icon">✆</span> +19406129127</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 WORKS Studio. All rights reserved.</p>
            <div class="bottom-links">
                <a href="#HOME" onClick={() => navigate("/")}>Home</a>
                <a href="#ABOUT" onClick={() => navigate("/about")}>About</a>
                <a href="#IDEAS" onClick={() => navigate("/ideas")}>Ideas</a>
            </div>
        </div>
    </footer>

    </>
  )
}

export default Footer