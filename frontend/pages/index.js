import styled from 'styled-components';
import { Flex, Box } from 'reflexbox/styled-components'

const Page = styled.div`
  max-width: 960px;
  padding: 16px;
  margin: 0 auto;
`;

function Index({ letters }) {
  return (
    <Page>
      <center>
        <img src="/images/header-ourstreet.png" style={{ width: '100%', maxWidth: '600px' }} />
      </center>
    </Page>
  )
}

export default Index;