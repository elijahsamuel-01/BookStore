import React, {useState} from 'react'
import styled from "styled-components"
import Globalbutto from '../common/GobalButton'
import {MdOutlineCancel} from "react-icons/md"
import {FiMenu} from "react-icons/fi"
import {FiMessageCircle} from "react-icons/fi"
import {RiArrowDropDownLine} from "react-icons/ri"

const Header = () => {

    const [show, setShow] = useState(false)
    const [shows, setShows] = useState(false)

    const Toggle = () => {
        setShow(!show);
    }
    const Drop = () => {
        setShows(!shows);
    }
  return (
    <Container>
        {shows ? (
            <Dropdown>
                <Part1>
                    <Tab1>
                        <Cover>
                            <IconMessage><FiMessageCircle/></IconMessage>
                            <Pre>Previews</Pre>
                        </Cover>   
                            <PreSub>Zer config, more innovation</PreSub>
                    </Tab1>
                    <Tab1>
                    <Cover>
                            <IconMessage><FiMessageCircle/></IconMessage>
                            <Pre>Next.js</Pre>
                        </Cover>   
                            <PreSub>The native Next.js platform</PreSub>
                    </Tab1>
                    <Tab1>
                    <Cover>
                            <IconMessage><FiMessageCircle/></IconMessage>
                            <Pre>Analytics</Pre>
                        </Cover>   
                            <PreSub>Real-time insights, peak performance</PreSub>
                    </Tab1>
                </Part1>       
                <Part2>
                    <Tab1>
                        <Cover>
                            <IconMessage><FiMessageCircle/></IconMessage>
                            <Pre>Infrastructure</Pre>
                        </Cover>   
                            <PreSub>Always fast,always online</PreSub>
                    </Tab1>
                    <Tab1>
                    <Cover>
                            <IconMessage><FiMessageCircle/></IconMessage>
                            <Pre>Edge Functions</Pre>
                        </Cover>   
                            <PreSub>Dynamic pages, static speed</PreSub>
                    </Tab1>
                    <Tab1>
                    <Cover>
                            <IconMessage><FiMessageCircle/></IconMessage>
                            <Pre>Storage</Pre>
                        </Cover>   
                            <PreSub>Serverless storage for the frontend</PreSub>
                    </Tab1>
                </Part2>   
            </Dropdown>
        ) : null}
          <Wrapper>
              <Wrap>
                  <Holder>
                  <svg
                width="76"
                height="40"
                viewBox="0 0 76 65"
                fill="none" xmlns="http://www.w3.org/2000/svg"><path
                          d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" /></svg>
                  
                  <h1>Vercel</h1>
            </Holder>

              <NavHolder>
                  <Navs1 onMouseOver={Drop} onMouseLeave={Drop}>Features
                    <IconD><RiArrowDropDownLine/></IconD>
                  </Navs1>
                  <Navs>Docs</Navs>
                  <Navs>Templates</Navs>
                  <Navs>Integrations</Navs>
                  <Navs>Customers</Navs>
                  <Navs>Enterprise</Navs>
                  <Navs>Pricing</Navs>
              </NavHolder>
              </Wrap>

              <ButtonHolder>
                  <Navs>Contact</Navs>
                  <Globalbutto bor="7px" text="Log in" bcc="gray" color="white" height="34px" width="90px"
                  mR='20px' font='18px'/>
                  <Globalbutto bor="7px" text="Sign Up" bcc="#fff" color="#000" height="34px" width="90px"
                  mR='20px' font='18px'/>
              </ButtonHolder>
              <Icon>
                {
                !show ?<FiMenu  onClick={Toggle}/> : <MdOutlineCancel  size={40}onClick={Toggle}/>
                }
              </Icon>

        </Wrapper>
        {show ? (
          <Card>
            <DropdownWrapper>
             <Globalbutto bor="7px" text="Log in" bcc="#1F1F1F" color="white" 
height="48px" width="92%" mR="0px" font='18px'/>
                 <Globalbutto bor="7px" text="Sign Up" bcc="#fff" color="#000" height="48px" width="92%" mR='0px'font='18px'/>
                 </DropdownWrapper>
                 <DropdownFeatures>
                    <F>
                    Features
                    <IconD1><RiArrowDropDownLine/></IconD1>
                    </F>
                 </DropdownFeatures>
                 <DropdownOthers>
                    <F>
                    Docs
                    </F>
                 </DropdownOthers>
                 <DropdownOthers>
                    <F>
                    Templates
                    </F>
                 </DropdownOthers>
                 <DropdownOthers>
                    <F>
                    integrations
                    </F>
                 </DropdownOthers>
                 <DropdownOthers>
                    <F>
                    Coustomers
                    </F>
                 </DropdownOthers>
                 <DropdownOthers>
                    <F>
                    Enterprise
                    </F>
                 </DropdownOthers>
                 <DropdownOthers>
                    <F>
                    Pricing
                    </F></DropdownOthers>            
                 <DropdownOthers>
                    <F>
                    Contact
                    </F></DropdownOthers>            
        </Card>
        ): null}
    </Container>
  )
}

export default Header;

const IconMessage = styled.div`
font-size:20px;
color:white;
`
const PreSub = styled.div`
font-size:17px;
color:white;
margin-left:10px;
`
const Cover = styled.div`
margin-left:10px;
width:200px;
gap:9px;
display:flex;
// justify-content:center;
flex-direction:rows;
`
const Pre = styled.div`
font-size:18px;
font-weight: 700;
color:white;
`
const DropdownOthers = styled.div`
&:hover{
    background-color: #1F1F1F;
    color: white;
    cursor: pointer;
    }
width:90%;
height:48px;
border-bottom: 2px solid grey;
background-color: black;
display: flex;
align-items:center;
`
const IconD1 = styled.div`
font-size: 38px;
margin-right: 20px;
// background-color: blue;
position:absolute;
right:-24px;
top: 8px;
height:40px;
width: 40px;
`
const F = styled.div`
color:white;
font-size:18px;
`
const DropdownFeatures = styled.div`
width:90%;
height:48px;
border-bottom: 2px solid grey;
background-color: black;
display: flex;
// Justify-content:center;
align-items:center;
flex-direction: rows;
position:relative;
`
const DropdownWrapper = styled.div`
width:100%;
height:120px;
// background-color:red;
display: flex;
align-items: center;
flex-direction: column;
gap:13px;
// &:hover{
//     background-color: #212121;
//     color: white;
//     cursor: pointer;
//     }
`
const Card = styled.div`
@media screen and (min-width: 780px) {
        display: none;
    }
width: 100%;
height: 89vh;
flex-direction: column;
display: flex;
align-items: center;
background-color: black;
position: absolute;
top: 80px;
right: 0;
`
const Icon = styled.div`
display: flex;
align-items: center;
color: #fff;
font-size: 30px;
cursor: pointer;

@media screen and (max-width: 780px) {
      display: flex;
}
display: none;
`
const ButtonHolder = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 780px) {
        display: none;
    }
`
const Wrap = styled.div`
    display: flex;
    align-items: center;
`
 const Tab1 = styled.div`
 height: 33%;
 width: 100%;
//  background-color: pink;
 border-radius:20px;
 display:flex;
 justify-content:center;
 flex-direction:column;
 &:hover{
    background-color: #212121;
    color: white;
    cursor: pointer;
    }
 `
 const Part2 = styled.div`
height: 95%;
 width: 50%;
//  background-color: green;
 display:flex;
 justify-content:center;
 flex-direction:column;
 gap:8px;
 margin-right:5px;
 `
 const Part1 = styled.div`
height: 95%;
 width: 50%;
//  background-color: blue;
 display:flex;
 justify-content:center;
 flex-direction:column;
 gap:8px;
 margin-left:5px;

 `
 const Dropdown = styled.div`
 height: 280px;
 width: 590px;
 display:flex;
 justify-content:center;
 align-items: center;
 gap:2px;
 flex-direction:rows;
 background-color: black;
 position: absolute;
 top:80px;
 border-radius: 13px;
 border: 1px solid grey;
 left: 210px;
 `
const IconD = styled.div`
font-size: 24px;
margin-top: 10px;
`
const Navs1 = styled.div`
display: flex;
align-items: center;
justify-content: center;
// /* background-color: blue; */
border-radius: 10px;
margin-right: 20px;
height: 32px;
width: 90px;
cursor: pointer;
color: grey;
&:hover{
background-color: #212121;
color: white;
}
`
const Navs = styled.div`
    color: gray;
    margin-right: 35px;
    transition: all ease-in-out 350ms;
    cursor: pointer;
    &:hover{
        color: #fff;
    }
`
const NavHolder = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;

    @media screen and (max-width: 780px) {
        display: none;
    }
`
const Holder = styled.div`
    display: flex;
    align-items: center;
    h1{
        color: #fff;
        margin-right: 15px;
        font-size: 20px;
    }
`
const Wrapper = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`

const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    background-color: #0000009b;
    justify-content: center;
    position: fixed;
    top:0px;
`








