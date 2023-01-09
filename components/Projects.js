import React from "react"

export default function Projects() { 
 return (       
   <section className="projects">
   
    <h3  id="projectSection" className="projectText">PROJECTS</h3>
    <div className="project-cards">
       <article className="project-card">
        <div className="imageContainer">
          <img src="https://github.com/ayxxn-shxrif/Projects-Keeper/raw/master/example/frontpage.png" alt="" />
        </div>
        <div className="project-details">
          <h2>Projects Keeper</h2>
          <p>A Project storing website made using Nodejs, html, css, javascript, bootstrap, mongodb</p>
        </div>
        <div className="project-links">
          <a href="https://github.com/ayxxn-shxrif/Projects-Keeper">Github</a>
    
        </div>
      </article> 
      
      
      <article className="project-card">
       
        <div className="project-details">
          <h2>Web Scraping Stackoverflow
</h2>
          <p>Web crawler using Mongodb and Scrapy </p>
        </div>
        <div className="project-links">
          <a href="https://github.com/ayxxn-shxrif/scraping_stackoverflow">Github</a>
    
        </div>
      </article>
      
      
      
      
        <article className="project-card">
       
        <div className="project-details">
          <h2> BERT-TEXT-CLASSIFICATION

</h2>
          <p>This bert model uses tf.data api as input data pipeline and perform classification of the desired cases.</p>
        </div>
        <div className="project-links">
          <a href="https://github.com/ayxxn-shxrif/BERT-TEXT-CLASSIFICATION">Github</a>
    
        </div>
      </article>
      
      
   
      
      
      
      
      
    </div>
  </section>
  
  
  
  
  
    )
    
    
}       
    
    