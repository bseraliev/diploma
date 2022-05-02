import React from 'react'
import styled from 'styled-components';
import { NavLink, useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'; 

const Frame = styled.div`
    text-align:center;
    iframe{
        width:1000px;
        height:120vh;    
    }   
`

const ReturnButton = styled.div`
    position:fixed;
    bottom:20px;
    left:50%;
    transform:translateX(-50%); 
`

const Lab = ({labs}) => {
    let {id} = useParams();
    const lab = labs[id-1];

  return (
      <>
        <Frame> { ReactHtmlParser(lab.link) }</Frame>
        <ReturnButton>
            <NavLink to="/labs">Return to labs</NavLink> 
        </ReturnButton>
      </>
  )
}

export default Lab