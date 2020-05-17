import styled from 'styled-components';
import { Flex, Box } from 'reflexbox/styled-components'
import Link from 'next/link';
import Footer from '../components/Footer';

const Page = styled.div`
  max-width: 660px;
  padding: 16px;
  margin: 0 auto;
`;

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

function Index({ locale, messages }) {
  return (
    <Page>
      <center>
        <img src="/images/header-ourstreet.png" style={{ width: '100%', maxWidth: '600px' }} />
      </center>

      <h1>Communes</h1>
      <h2>1030 Schaerbeek</h2>
      <ul>
      <li><A href="https://openletter.earth/open-letter-to-the-city-of-schaerbeek-give-priority-to-pedestrians-runners-and-bicycles-54952bee">Open letter pour demander une zone de rencontre 🚶🏻‍♂️🚴‍♂️</A></li>
      </ul>
      <ul>
        <li><Link href="/godefroiddevreese"><A>Godefroid Devreese</A></Link></li>
      </ul>
      <h2>1210 Saint-Josse-ten-Noode</h2>
      <ul>
        <li><A href="https://openletter.earth/lettre-ouverte-a-la-commune-de-saint-josse-ten-noode-5f9076a5">Open letter pour demander une zone de rencontre 🚶🏻‍♂️🚴‍♂️</A></li>
      </ul>
      <h1>Useful links</h1>
      <ul>
        <li><A href="https://influencair.be/map-brussels/">Air quality in Brussels</A></li>
        <li><A href="https://www.telraam.net">Foot 🚶🏻‍♂️, bicycle 🚲, car 🚗💨 and truck 🚚💨 traffic in Brussels</A></li>
        <li><A href="https://openletter.earth">Create an Open Letter</A> to ask your commune for changes (<A href="https://openletter.earth/open-letter-to-the-city-of-schaerbeek-give-priority-to-pedestrians-runners-and-bicycles-54952bee">like this one</A>)</li>
      </ul>
      
      <Footer />
    </Page>
  )
}

export default Index;