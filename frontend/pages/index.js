import styled from 'styled-components';
import { Flex, Box } from 'reflexbox/styled-components'
import Link from 'next/link';
import Footer from '../components/Footer';

const Page = styled.div`
  max-width: 660px;
  padding: 16px;
  margin: 0 auto;
`;

function Index({ locale, messages }) {
  return (
    <Page>
      <center>
        <img src="/images/header-ourstreet.png" style={{ width: '100%', maxWidth: '600px' }} />
      </center>

      <h2>1030 Schaerbeek</h2>
      <ul>
        <li><Link href="/godefroiddevreese"><a>Godefroid Devreese</a></Link></li>
      </ul>
      <Footer />
    </Page>
  )
}

export default Index;