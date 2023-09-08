import react from 'react'
import { styled } from 'styled-components';
import pic1 from "../../assets/ADOBE.png";
import pic2 from "../../assets/OKTA.png";
import pic3 from "../../assets/UNDER.jpeg";
import pic4 from "../../assets/EBAY.png"
import pic5 from "../../assets/TAILWIN.png"
import pic6 from "../../assets/ZAPIER.png"
import pic7 from "../../assets/HASHICORP.png"
import pic8 from "../../assets/TAILWIN.png"
import pic9 from "../../assets/THEMASHINGTON.png"
import pic10 from "../../assets/thevideopart.png"
import {TbBrandNextjs} from 'react-icons/tb'
import {BiLogoReact} from 'react-icons/bi'
import {SiSvelte} from 'react-icons/si'
import {SiNuxtdotjs} from 'react-icons/si'
import {FaVuejs} from 'react-icons/fa'
import {TbBrandEmber} from 'react-icons/tb'
import {FaAngular} from 'react-icons/fa'
import {SiHugo} from 'react-icons/si'
import {RiGatsbyLine} from 'react-icons/ri'
import {GiSpanner} from 'react-icons/gi'
import {FaLessThan} from 'react-icons/fa'
import {MdIntegrationInstructions} from 'react-icons/md'

const Page1 =()=>{
    return(
        <div>
            <Container>
                <Trust>
                   <T> TRUSTED BY THE BEST FRONTED TEAMS </T>
                <Logos>
                <LogosWrapper1>
                    <Logo2><Image src ={pic1}></Image></Logo2>    
                    <Logo2><Image1 src ={pic2}></Image1></Logo2>    
                    <Logo2><Image src ={pic3}></Image></Logo2>    
                    <Logo2><Image src ={pic4}></Image></Logo2>
                    <Logo1><Image src ={pic6}></Image></Logo1>    
                </LogosWrapper1> 
                <LogosWrapper2>   
                    <Logo1><Image2 src ={pic5}></Image2></Logo1>    
                    <Logo1><Image2 src ={pic7}></Image2></Logo1>    
                    <Logo1><Image2 src ={pic8}></Image2></Logo1>    
                    <Logo1><Image2 src ={pic9}></Image2></Logo1> 
                </LogosWrapper2>   
                </Logos>
                </Trust>
            </Container>
            <Container1>
                <Dev>
                   <E> EXPLORE THE VERCEL WAY </E>
                    <Pin></Pin>
                    <Circle1>1</Circle1>
                    <De>Develop</De>
                    <Build>
                        Build when inspiration strikes
                    </Build>
                    <Free>Free developers from time-consuming, unnecessary processes that slow your work, so you and your team can focus on creating.</Free>
                </Dev>
                <Num1Wrap>
                    <CodeImage src={pic10}></CodeImage>
                    <ListHolder>
                        <Tool1>
                            <Icon><GiSpanner/></Icon>
                            <H>The complete toolkit for the Web</H>
                            <W>Everything you need to build your site exactly how you imagine, from automatic API handling to built-in image and performance optimizations.
                            </W>
                        </Tool1>
                        <Tool2>
                        <Icon><MdIntegrationInstructions/></Icon>
                            <H>Easy integration with your backend</H>
                            <W>Everything you neeConnect your pages to any data source, headless CMS, or API and make it work in everyone’s dev environment.
                            </W>
                        </Tool2>
                        <Tool3>
                        <Icon><FaLessThan/></Icon>
                            <H>End-to-end testing on Localhost</H>
                            <W>From caching to Serverless Functions, all our cloud primitives work perfectly on localhost.
                            </W>
                        </Tool3>
                    </ListHolder>
                </Num1Wrap>
                <Work>WORKS WITH 30+ FRAMEWORKS</Work>
                <Labels>
                    <Label1><TbBrandNextjs/></Label1>
                    <Label1><BiLogoReact/></Label1>
                    <Label1><SiSvelte/></Label1>
                    <Label1><SiNuxtdotjs/></Label1>
                    <Label1><FaVuejs/></Label1>
                    <Label1><TbBrandEmber/></Label1>
                    <Label1><FaAngular/></Label1>
                    <Label1><SiHugo/></Label1>
                    <Label1><RiGatsbyLine/></Label1>
                </Labels>
                <Dev>
                    <Pin></Pin>
                    <Circle1>2</Circle1>
                    <Pre>Preview</Pre>
                    <Build>
                    Iterate with your team
                    </Build>
                    <Free>Make frontend development a collaborative experience with automatic Preview Deployments for every code change, by seamlessly integrating with<Span> GitHub, GitLab,</Span> and <Span>Bitbucket.</Span></Free>
                </Dev>
            </Container1>
        </div>

    )
}

export default Page1;
const Pre = styled.div`
 background-image: linear-gradient(to right, #ffff, #F00589); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
width:200px;
height:70px;
/* background-color: blue; */

font-size: 50px;
font-weight:700;
`
const Span = styled.div`
    cursor:pointer;
color:#F00589;
& :hover{
    color:white;

}
`
const Label1 = styled.div`
height:60px;
width:60px;
/* background-color: aqua; */
font-size: 50px;
color:white;
`
const Labels = styled.div`
height:70px;
width:700px;
/* background-color: aqua; */
display :flex;
align-items:center;
justify-content: center;
flex-direction: row;
margin-top: 40px;
gap:10px;
`
const Work = styled.div`
height: 40px;
width:600px;
background-color:yellow;
font-weight: 600px;
font-size: 20px;
color: #808080;
text-align:center;
`
const W = styled.div`
color:white;
font-size: 19px;
width:90%;
`
const H = styled.div`
color:white;
font-size: 22px;
font-weight: 800;
margin-bottom: 14px;
`
const Icon = styled.div`
height:80px;
width:80px;
background-color:#333333;
border-radius: 7px;
color: #808080;
font-size:30px;
display:flex;
justify-content: center;
align-items: center;
`
const Tool3 = styled.div`
height:200px;
width: 95%;
/* background-color: blue; */
`
const Tool2 = styled.div`
height:190px;
width: 95%;
/* background-color: red; */
`
const Tool1 = styled.div`
height:190px;
width: 95%;
/* background-color: aqua; */
`
const ListHolder = styled.div`
height: 700px;
width:47%;
/* background-color: brown; */
display:flex;
flex-direction: column;
gap:30px;
`
const CodeImage = styled.img`
width:44%;
height:520px;
margin-left: 40px;
`
const Num1Wrap = styled.div`
height:98vh;
width:95%;
/* background-color: coral; */
display: flex;
flex-direction: row;
margin-top:50px;
gap:40px;
`
const Free = styled.div`
width: 770px;
height: 20vh;
color: #808080;
font-size: 22px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align:center;
margin-top: 20px;
`
const Build = styled.div` 
width: 1000px;
height: 0vh;
color: white;
font-size: 60px;
font-weight:800;
display: flex;
justify-content: center;
align-items: center;
text-align:center;
margin-top: 50px;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const De = styled.div`
 background-image: linear-gradient(to right, #007cf0, #00dfd8); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
width:200px;
height:70px;
/* background-color: blue; */
/* color: white; */
font-size: 50px;
font-weight:700;
`
const Circle1 = styled.div`
height: 78px;
width:78px;
border-radius: 50%;
background-image: linear-gradient(to right, #007cf0, #00dfd8);
display: flex;
justify-content: center;
align-items: center;
font-size: 28px;
margin-bottom: 30px;
`
const Pin = styled.div`
height: 120px;
width:2px;
background-image: linear-gradient(to right, #007cf0, #00dfd8);
margin-top: 120px;
`
const E = styled.div`
height: 40px;
width:600px;
/* background-color:yellow; */
font-weight: 600px;
font-size: 20px;
color: #808080;
text-align:center;
`
const Dev = styled.div`
height:80vh;
width:80%;
/* background-color:green; */
display: flex;
align-items:center;
/* justify-content: center; */
flex-direction: column;
`
const Container1 = styled.div`
height:270vh;
width:100%;
background-color:black;
display: flex;
align-items:center;
/* justify-content: center; */
flex-direction: column;
`


const  Image2 = styled.img`
height: 46px;
width: 170px;
`
const  Image1 = styled.img`
height: 36px;
width: 140px;
`
const  Image = styled.img`
height: 100%;
width: 140px;
`
const  LogosWrapper2 = styled.div`
height:50%;
width:100%;
/* background-color: darkcyan; */
display: flex;
justify-content: center;
align-items: center;
flex-direction:row;
gap:10px;
`
const  LogosWrapper1 = styled.div`
height:50%;
width:100%;
/* background-color: black; */
display: flex;
justify-content: center;
align-items: center;
flex-direction:row;
gap:10px;
`
const Logo2 = styled.div`
height:58px;
width:280px;
/* background-color: aqua; */
display: flex;
align-items: center;
`
const Logo1 = styled.div`
height:65px;
width:280px;
/* background-color: aqua; */
display: flex;
align-items: center;
`
const Logos = styled.div`
min-height: 190px;
width:80%;
/* background-color:pink; */
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
`
const T = styled.div`
height: 40px;
width:600px;
/* background-color:grey; */
font-weight: 600px;
font-size: 20px;
color: #808080;
text-align:center;
`
const Trust = styled.div`
height:50vh;
width:80%;
/* background-color:green; */
display: flex;
align-items:center;
/* justify-content: center; */
flex-direction: column;
gap:30px;
`
const Container = styled.div`
height:46vh;
width:100%;
background-color:black;
display: flex;
/* align-items:center; */
justify-content: center;
`