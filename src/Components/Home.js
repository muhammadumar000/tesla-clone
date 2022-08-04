import React from 'react'
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (

    <Container >
        
       <Section
        title = "Model S" 
        subTitle = "Order Online for Touchless Delivery"
        bgImg = "model-s.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
       
       />
       <Section
        title = "Model Y" 
        subTitle = "Order Online for Touchless Delivery"
        bgImg = "model-y.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
       
       />
       <Section
        title = "Model X" 
        subTitle = "Order Online for Touchless Delivery"
        bgImg = "model-x.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
       
       />
       <Section
        title = "Model 3" 
        subTitle = "Order Online for Touchless Delivery"
        bgImg = "model-3.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
       
       />
       <Section
        title = "Lowest Cost Solar Panels in America" 
        subTitle = "Money Back Guarantee"
        bgImg = "solar-panel.jpg"
        leftBtnText = "Order Now"
        rightBtnText = "Learn More"
       />
       <Section
        title = "Solar for New Roofs" 
        subTitle = "New Solar Roofs Cost less than a New Roof plus Solar Panels"
        bgImg = "solar-roof.jpg"
        leftBtnText = "Order Now"
        rightBtnText = "Learn More"
       />
       <Section
        title = "Accessories" 
        bgImg = "accessories.jpg"
        leftBtnText = "Shop Now"

       />
    
    </Container>
  )
}

export default Home;

const Container = styled.div`
 height: 100vh;

`