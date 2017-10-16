import {Component} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  text-align: center;
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    padding: 10px;
  }
  h1{
    margin-bottom: 0;
  }
  h2 {
    margin-top: 0.5em;
    margin-bottom: 0em;
  }
`
export const Link = styled.a`
display: inline-block;
position: relative;
overflow: hidden;
vertical-align: top;
z-index: 0;
-webkit-transition: color 0.2s;
transition: color 0.2s;
color: #197bc9;
text-decoration: none;
outline: none;

&:hover {
  &:before  {
    background-color: #197bc9;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}
&:before {
  position: absolute;
  top: auto;
  bottom: 2px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #197bc9;
  content: '';
  -webkit-transition: all 0.2s;
  -webkit-backface-visibility: hidden;
  transition: all 0.2s;
  backface-visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
}
`
const Profile = styled.div`
  width: 200px;
  height: 200px;
  background-image: url('/static/profile.jpg');
  background-size: cover;
  background-position: 60% 50%;
  border-radius: 50%;
  margin-bottom: 2em;
  margin-top: 2em;
`

export default class Index extends Component {
  render () {
    return (
      <Container>

        <h1>Hey there, I'm Nadim!</h1><p> I'm a software engineer based in Montreal, Canada.</p>
        <Profile />

        <p>
          I'm a Full-Stack Developer with a keen interest in building and designing rich web experience.
          <br />Former Software Engineer at <Link target='_blank' href='https://vigilantglobal.com/'>Vigilant</Link> and Tech Lead at <Link target='_blank' href='http://wearhacks.com/'> Wearhacks</Link>.
          <br />
          Currently working at <Link target='_blank' href='https://rhodium.io/'>rhodium labs </Link>. <br />

        </p>
        <hr />
        <h2> Open Source & Personal Work </h2>
        <ul>
          <li> <Link target='_blank' href='https://nadbm.github.io/react-datasheet/'> React datasheet </Link> </li>
          <li> <Link target='_blank' href='https://rhodium.io/'> Rhodium Labs Website</Link> </li>
          <li> <Link target='_blank' href='https://echelon.fund'> Echelon Fund Website</Link> </li>
        </ul>
        <hr />
        <h2> Contact </h2>
        <ul>
          <li> <Link target='_blank' href='https://github.com/nadbm'> <i className='ion-social-github' /> Github </Link> </li>
          <li> <Link target='_blank' href='https://www.linkedin.com/in/nadimislam/'><i className='ion-social-linkedin' /> LinkedIn</Link> </li>
        </ul>
        <p>
          Interested in me giving a workshop/consulting/talk ? <Link href='mailto:nadim@rhodium.io'>Email me</Link>
        </p>
      </Container>
    )
  }
}
