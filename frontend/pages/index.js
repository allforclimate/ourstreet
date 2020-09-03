import styled from "styled-components";
import { Flex, Box } from "reflexbox/styled-components";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Page = styled.div`
  max-width: 660px;
  padding: 16px;
  margin: 0 auto;
`;

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: blue;
`;

function Index({ locale, messages }) {
  return (
    <Page>
      <Header street="ourcommunity" />

      <h1>Communes</h1>
      <h2>1030 Schaerbeek</h2>
      <ul>
        <li>
          <Link href="/fransbinje">Frans Binjé</Link>
        </li>
        <li>
          <Link href="/godefroiddevreese">Godefroid Devreese</Link>
        </li>
      </ul>
      <h1>Useful links</h1>
      <ul>
        <li>
          <A href="https://influencair.be/map-brussels/">
            Air quality in Brussels
          </A>
        </li>
        <li>
          <A href="https://www.telraam.net">
            Foot 🚶🏻‍♂️, bicycle 🚲, car 🚗💨 and truck 🚚💨 traffic in Brussels
          </A>
        </li>
        <li>
          <A href="https://openletter.earth">Create an Open Letter</A> to ask
          your commune for changes (
          <A href="https://openletter.earth/open-letter-to-the-city-of-schaerbeek-give-priority-to-pedestrians-runners-and-bicycles-54952bee">
            like this one
          </A>
          )
        </li>
      </ul>

      <Footer />
    </Page>
  );
}

export default Index;
