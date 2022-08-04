import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade'

const Section = ({title,subTitle,leftBtnText,rightBtnText,bgImg}) => {
  return (
    <Wrap bgImg = {bgImg}>
      <Fade bottom>
        <ItemText>
           <h1>{title}</h1>
           <p>{subTitle}</p>
        </ItemText>
        </Fade>
      <Buttons>
        
        <Fade bottom>
        <ButtonGroup>
           <LeftButton>
             {leftBtnText}
           </LeftButton>
           {rightBtnText && <RightButton>
             {rightBtnText}
           </RightButton> } 
        </ButtonGroup>

        </Fade>

        <DownArrow src="/images/down-arrow.svg" />

      </Buttons>
        
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url('/images/${props.bgImg}')`};
`

const ItemText = styled.div`
padding-top: 5rem;
text-align: center;
@media(max-width:450px){
  h1{
    font-size:1.3rem;
  }
}

`

const ButtonGroup = styled.div`
  display:flex;
  margin-bottom: 4rem;
  @media (max-width: 570px){
    flex-direction: column;
  }

`
const LeftButton = styled.div`
  background-color: rgba(23,26,32,0.8);
  height: 40px;
  width:256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 0.5rem;
`

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;

`
const DownArrow = styled.img`
  height: 40px;
  margin-block: 20px;

  animation : animateDown infinite 1.5s;
  
`

const Buttons = styled.div`
display: flex;
flex-direction:column;
`