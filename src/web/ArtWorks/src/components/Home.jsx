import React from 'react'




function Home ({
    //add the props here??
    //the header is in Header.jsx for the home.jsx
}) {
    return (
        <>
             {/* Showcase Area */}

    <main className="showcase-grid">

        {/* Technical Artist Showcase */}
        <section className="column"> 

            <h2>Technical Artist Showcase</h2>

            <div className="tech-links">
                <a href="/src/pages/technical-projects/PythonToolDev.html" className="tech-card">
                    Python Tool Development
                </a>

                <a href="/src/pages/technical-projects/UnrealBluePrints.html#blueprints" className="tech-card">
                    Unreal Blueprints
                </a> 

                <a href="/src/pages/technical-projects/FullProjects.html#projects" className="tech-card">
                    Full Projects
                </a>    
            </div>

        </section> 

        {/* 3D Artist Showcase */}
        <section className="column"> 

            <h2>3D Artist Showcase</h2>

            <div className="card-stack">
                
                <a href="/src/pages/3d-projects/EnvironmentPiece.html" className="placeholder-card">
                    Environment Art
                </a>
                
                <a href="/src/pages/3d-projects/ModularKit.html" className="placeholder-card">
                    Modular Kits  
                </a>

                <a href="/src/pages/3d-projects/ConceptArt.html" className="placeholder-card">
                    Concept Art
                </a>

            </div>

        </section> 

        {/* Composer Showcase */}
        <section className="column"> 

            <h2>Composer Showcase</h2>

            <div className="media-box">
                
                <video controls>
                    {/* <source src="audio/composer-showcase.mp4" type="video/mp4"> */}
                    Your browser does not support the video tag.
                </video>

            </div>

        </section>

    </main>
        </>
    )
}

export default Home;