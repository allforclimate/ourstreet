import styled from 'styled-components';
import { withIntl } from '../lib/i18n';

const Disclaimer = styled.p`
color: #555;
font-size:11pt;
`;

export default withIntl(({ data, t }) => {
  if (!data) return (<div />);
  return (
    <div>
      <p>
        {t('street.forms.intro')}
      </p>
      <p>
        <li>✍️ <a href={data.form_url}>Form</a></li>
        <li>🔍 <a href={data.results_url}>Results</a></li>
      </p>
      <Disclaimer>
        {t('street.forms.disclaimer')}
      </Disclaimer>
    </div>
  );
});