import styled from "styled-components";
import LeftImage from '../assets/Vm_img.png'
export const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: #BF4F74;
`;

export const BTN = styled.button`
width: 150px;
height: 49px;
outline: none;
border: none;
border-radius: 49px;
background-color: #090c11;
color: #fff;
font-weight: 600;
text-transform: capitalize;
margin: 10px 0;
cursor: pointer;
transition: 0.5s;`

export const PanelsContainer = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: grid;
grid-template-columns: repeat(2, 1fr);
`

export const Panel = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-around;
text-align: center;
z-index: 7;
`
export const LeftPanel = styled.div`
pointer-events: all;
padding: 3rem 17% 2rem 12%;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-around;
text-align: center;
z-index: 7;
 `

export const Content = styled(Panel)`
color: #fff;
transition: 0.9s 0.6s ease-in-out;`

export const PanelTitle = styled.h3`
font-weight: 600;
line-height: 1;
font-size: 1.5rem;`

export const PanelBtn = styled(BTN)`
margin: 0;
background: none;
border: 2px solid #fff;
width: 130px;
height: 41px;
font-weight: 600;
font-size: 0.8rem;
`

export const PnlLeftImg = styled.img.attrs({
  src:`${LeftImage}`
})`
width: 100%;
transition: 1.1s 0.4s ease-in-out;
`

// export const RightPanel = styled(Panel)`
//   pointer-events: none;
//   padding: 3rem 12% 2rem 17%;
// `
