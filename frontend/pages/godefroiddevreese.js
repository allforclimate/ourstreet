import styled from 'styled-components';
import { Flex, Box } from 'reflexbox/styled-components'

const Page = styled.div`
  max-width: 960px;
  padding: 16px;
  margin: 0 auto;
`;

function StreetPage({ letters }) {
  return (
    <Page>
      <center>
        <img src="/images/header-godefroiddevreese.png" style={{ width: '100%', maxWidth: '600px' }} />
      </center>
      <Box mt={4}>
        <p>
          Please fill out this form so that we can get to know each other!<br />
          Merci de bien vouloir remplir ce formulaire pour qu'on puisse apprendre à se connaitre!<br />
          Vul dit formulier in zodat we elkaar kunnen leren kennen!
        </p>
        <p>
          👉 <a href="https://docs.google.com/forms/d/e/1FAIpQLSfdWVOLb95QCJQ5ufmkKgTt-yBuXWZoVFEToY9MTAjkEqr95g/viewform">Form</a>
        </p>
      </Box>
    </Page>
  )
}

export default StreetPage;