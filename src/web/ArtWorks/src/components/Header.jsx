import React from 'react';


function Header() {
  return (
    <header className="hero">
      <div className="slides">
        <img src="/images/banner1.jpg" className="slide active" alt="Banner 1" />
        <img src="/images/banner2.jpg" className="slide" alt="Banner 2" />
        <img src="/images/banner3.jpg" className="slide" alt="Banner 3" />
      </div>

      <div className="hero-overlay">
        <h1 className="hero-title">Olivia Onyia</h1>
        <div className="divider"></div>
        <h4>
          Technical Artist | 3D Artist | Composer
        </h4>
      </div>
    </header>
  );
}

export default Header;