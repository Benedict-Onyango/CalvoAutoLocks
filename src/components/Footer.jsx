import "./Footer.css";

export function Footer() {
  return (
    <>
      <footer>
        <div className="top_layer">
          <div className="page_links">
            <div className="nav_links">
              <a href="#services">SERVICES</a>
            </div>
            <div className="nav_links">
              <a href="#how-it-works">HOW IT WORKS</a>
            </div>
            <div className="nav_links">
              <a href="#book">BOOK</a>
            </div>
            <div className="nav_links">
              <a href="#book">GET HELP NOW</a>
            </div>
          </div>

          <div className="map_container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.790856990696!2d36.777850373500655!3d-1.3003299356385654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b264fa4327b%3A0x4a4fd87e6260dbe!2sAdams%20Arcade!5e0!3m2!1sen!2ske!4v1789112086209!5m2!1sen!2ske"
              width="600"
              height="450"
              style={{border:0}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          <div className="social_media_container">
            <div className="social_media_links instagram">
              <a href="https://www.instagram.com/calvoautolocks/">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="social_media_links facebook">
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
            <div className="social_media_links whatsapp">
              <a href="https://wa.me/+254722215442?text=Hello!">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <div className="social_media_links x-twitter">
              <a href="">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="bottom_layer">
          <p> &copy; 2026 CALVO AUTO LOCKS. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
