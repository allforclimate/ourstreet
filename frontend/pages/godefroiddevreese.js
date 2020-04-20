import React from 'react';
import styled from 'styled-components';
import { Box } from 'reflexbox/styled-components'
import axios from 'axios'
import AskPassword from '../components/AskPassword';
import ShowStreetForms from '../components/ShowStreetForms';
import { IntlContext } from '../lib/i18n';

const Page = styled.div`
  max-width: 960px;
  padding: 16px;
  margin: 0 auto;
`;

const Loading = styled.div`
  text-align: center;
  margin: 75px 0;
  text-transform: uppercase;
`;

class StreetPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const savedPassword = window.localStorage.getItem('password');
    savedPassword && this.getStreetData(savedPassword);
  }

  savePassword(password) {
    window.localStorage.setItem('password', password);
  }

  async getStreetData(password) {
    this.setState({ loading: true });
    try {
      const res = await axios({
        url: '/api/getStreetData',
        method: 'post',
        data: { password }
      });
      this.setState({ data: res.data, loading: false });
      this.savePassword(password);
    } catch (e) {
      if (e.response.status === 401) {
        const error = { code: 401, message: 'wrongPassword' };
        this.setState({ error, loading: false });
      }
    }
  }

  async handleSubmit(password) {
    await this.getStreetData(password);
  }

  render() {
    const { data, error, loading } = this.state
    const showAskPassword = !data && !loading;
    const { locale, messages } = this.props;
    return (
      <IntlContext.Provider value={{ locale, messages }}>
        <Page>
          <center>
            <img src="/images/header-godefroiddevreese.png" style={{ width: '100%', maxWidth: '600px' }} />
          </center>
          <Box mt={4}>
            {loading && <Loading>{messages['loading']}</Loading>}
            {showAskPassword &&
              <AskPassword onSubmit={this.handleSubmit} error={error} />
            }
            {data && <ShowStreetForms data={data} />}
          </Box>
        </Page>
      </IntlContext.Provider>
    )
  }
}

export default StreetPage;

export async function getServerSideProps(context) {
  try {
    const url = `${context.req.headers['x-forwarded-proto'] || 'http'}://${process.env.NOW_URL}/api/getLocale`;
    console.log(">>> calling api", url)
    const res = await axios({
      method: 'get',
      headers: {
        'accept-language': context.req.headers['accept-language']
      },
      url
    });
    const { locale, messages } = res.data;
    return {
      props: { locale, messages },
    }
  } catch (e) {
    console.log(">>> error", e);
  }
}