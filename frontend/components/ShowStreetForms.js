import styled from 'styled-components';
import { withIntl } from '../lib/i18n';
import { Flex, Box } from 'reflexbox/styled-components'

const Disclaimer = styled.p`
color: #555;
font-size:11pt;
`;

const Button = styled.a`
  display: block;
  width: 100px;
  border-radius: 5px;
  border: 1px solid black;
  padding: 5px;
  text-align: center;
  margin: 5px;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    background: #eee;
  }
  &:active {
    background: #ddd;
    box-shadow: inset 2px 2px 3px rgba(0,0,0,0.5);
    color: black;
  }
`;

const Emoji = styled.div`
  font-size: 48px;
  margin-bottom: -10px;
`;

export default withIntl(({ data, t }) => {
  if (!data) return (<div />);
  return (
    <div>
      <p>
        {t('street.forms.intro')}
      </p>
      <Flex flexWrap="wrap" justifyContent="space-around">
        <Button href={data.form_url}><Emoji>✍️</Emoji> Form</Button>
        <Button href={data.results_url}><Emoji>🔍</Emoji>Results</Button>
      </Flex>
      <Disclaimer>
        {t('street.forms.disclaimer')}
      </Disclaimer>
    </div>
  );
});