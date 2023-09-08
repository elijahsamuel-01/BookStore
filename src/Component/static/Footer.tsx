import react from 'react';
import { useState, useEffect } from 'react';
import { styled } from 'styled-components';

const Footer = () =>{
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

   useEffect(() => {
    const Target = new Date("9/8/2023 11:59:59")

    const interval = setInterval(() => {
      const now = new Date()
      const difference =Target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor((difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60) / (1000 * 60)))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60) / (1000)))
      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

    return(
        <div>
            <Container>
        <Wrap>
        <Daysdiv>
            <Holds>{days} :</Holds>
            <Div>Days</Div>
          </Daysdiv>
          <Daysdiv>
            <Holds>{hours} :</Holds>
            <Div>Hours</Div>
          </Daysdiv>
          <Daysdiv>
            <Holds>{minutes} :</Holds>
            <Div>Minutes</Div>
          </Daysdiv>
          <Daysdiv>
            <Holds>{seconds} :</Holds>
            <Div>Seconds</Div>
        </Daysdiv>
        </Wrap>
            </Container>
        </div>
    )
}

export default Footer;
// const Wrap = styled``
const Div = styled.div`
  color: #fff;
  font-size: 20px;
`
const Holds = styled.div`
color: #fff;
font-size: 25px;
`
const Daysdiv = styled.div`
display: flex;
flex-direction: column;
margin-left: 25px;
align-items: center;
`
const Wrap = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
margin-top: 30px;
`
// const Holds = styled.div`
// font-size: 20px;
// color:white;
// `
// const Daysdiv = styled.div``
// const Wrap = styled.div`
// background-color:blue;
// height:70px;
// width:70px;
// display: flex;
// align-items: center;
// justify-content: center;
// `
const Container = styled.div`
background-color:red;
height:50vh;
width:100%;
display: flex;
align-items: center;
justify-content: center;
`