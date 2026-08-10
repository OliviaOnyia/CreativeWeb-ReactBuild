import React from 'react';

function Contact() {
  return (
    <div className="contact">
     <header className="contact-header">
        Let's create something together
    </header>
   
    <section className="contact-details">
        <div className="contact-card">
            <h2>EMAIL</h2>
            <p>oliviaonyiamusic@gmail.com</p>
        </div>

        <div className="contact-card">
            <h2>SERVICES</h2>
            <p>
                Techincal Art<br /> 
                Tools, Cinematic Animation<br /> <br />
                Environment Art <br /> <br />
                Composition <br /> 
                Orchestral<br />
            </p>
        </div> 
    </section>

    <section className="contact-form-selection">
        <h2>Get in Touch!</h2>
    </section>
  
     </div>
       
  
  );
}

export default Contact;