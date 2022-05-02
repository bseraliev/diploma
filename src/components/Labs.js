import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LabsTitle =  styled.div`
    font-size: 70px;
    color: #1A1930;
    margin-bottom:50px;
`;

const LabsItem = styled.div`
    padding-right:66px;
    border-right:2px solid #E7E5FF;
    margin-right:66px;
    position:relative;
    &:last-child{
        border-right:none;
    }
`;

const LabsItemImg = styled.div`
    img{
        width:418px;
        height:314px;
    }
    margin-bottom:30px;
`;

const LabsItemType = styled.span`
    font-size: 15px;
    line-height: 22px;
    color: #2D2B5C;
    padding:3px 25px;
    background: #E7E5FF;
    border-radius: 5px;
`;

const LabsItemName = styled.div`
    font-size: 35px;
    line-height: 42px;
    color: #1A1930;
    margin-top:16px;
    margin-bottom:38px;
`;

const LabsItemButton = styled.div`
    display:flex;
    align-items:center;
    a{
        font-size: 18px;
        text-transform: uppercase;
        color: #1A1930;
        text-decoration:none;
    }
    position:absolute;
    bottom:-20px;
    
    &::before{
        content:'';
        display:block;
        width:14px;
        height:14px;
        background: #EA5959;
        margin-right:10px;
    }
`;

const LabsItems  = styled.div`
    overflow-x: auto;
    height:560px;
    ::-webkit-scrollbar {
        width: 0;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */
    }
    margin-bottom:30px;
    /* Optional: show position indicator in red */
`;


const Labs = ({labs}) => {
   

  return (
    <div>
        <div className="container">
            <LabsTitle>
                Labs
            </LabsTitle>
            <LabsItems className="d-flex justify-content-between">
            {
                labs.map((item,index) => (
                    <LabsItem>
                        <LabsItemImg>
                            <img src={item.img} alt="" />
                        </LabsItemImg>
                        <LabsItemType>
                            {item.tag}
                        </LabsItemType>
                        <LabsItemName>
                            {item.title}
                        </LabsItemName>
                        <LabsItemButton>
                            <NavLink to={`/lab/${index+1}`}>START LAB</NavLink>
                        </LabsItemButton>
                    </LabsItem>
                ))
            }
            </LabsItems>
        </div>
    </div>
  )
}

export default Labs