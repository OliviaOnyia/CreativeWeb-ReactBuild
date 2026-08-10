import React from 'react';


 function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>Olivia Onyia</p>
        <p>oliviaonyiamusic@gmail.com</p>
        <p>Technical Artist | 3D Artist | Composer</p>

        <div className="social-icons">
          <a href="https://www.artstation.com/colorsecho2" target="_blank" rel="noreferrer">
            {/* ArtStation Link */}
            <i className="fab fa-artstation"></i>
          </a>

          <a href="https://www.linkedin.com/in/oliviaonyia" target="_blank" rel="noreferrer">
            {/* LinkedIn Link */}
            <i className="fab fa-linkedin"></i>
          </a>

          <a href="https://www.instagram.com/oliviaonyiamusic?igsh=dTA2aXA4dDc0azh6" target="_blank" rel="noreferrer">
            {/* Instagram Link */}
            <i className="fab fa-instagram"></i>
          </a>

          <a href="https://www.youtube.com/@oliviaonyiamusic?si=iOyzdzCbG6IVNFN" target="_blank" rel="noreferrer">
            {/* YouTube Link */}
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
} 
export default Footer;