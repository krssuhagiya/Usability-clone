import React from 'react'

const BigFeature = () => {
  return (
    <div className="BigFeature _container">
        <div class="container flex big-feature-container" id="big-feature-container-id">
        <div class="feature-img">
          <img src="src/assets/asset 15.png" alt="image"/>
        </div>
        <div class="feature-description flex">
          <h4>Effortless validation for</h4>
          <h3>Design professionals</h3>
          <p>
            Test interfaces, interaction flows, iconography and more, to help
            you create intuitive and delightful experiences for your users.
          </p>
        </div>
      </div>
        <div class="container flex big-feature-container" id="big-feature-container-id">
        
        <div class="feature-description flex">
          <h4>Optimisation for</h4>
          <h3>Marketers</h3>
          <p>
          Fine-tune landing pages, messaging, and creative, helping you optimise conversion rates on marketing campaigns and product launches. 
          </p>
        </div>
        <div class="feature-img">
          <img src="src/assets/asset 16.png" alt="image"/>
        </div>
      </div>
        <div class="container flex big-feature-container" id="big-feature-container-id">
        <div class="feature-img">
          <img src="src/assets/asset 17.png" alt="image"/>
        </div>
        <div class="feature-description flex">
          <h4>Easier decision making for</h4>
          <h3>Product managers</h3>
          <p>
          Ensure you're delivering the right features to the right customers by validating product concepts with your target audience. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default BigFeature