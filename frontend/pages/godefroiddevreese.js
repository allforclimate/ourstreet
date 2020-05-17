import React from 'react';
import styled from 'styled-components';
import { Box } from 'reflexbox/styled-components'
import axios from 'axios'
import AskPassword from '../components/AskPassword';
import ShowStreetForms from '../components/ShowStreetForms';
import Newsfeed from '../components/Newsfeed';
import Footer from '../components/Footer';
import { withIntl } from '../lib/i18n';

const Page = styled.div`
  max-width: 660px;
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
    const { t } = this.props;
    const showAskPassword = !data && !loading;
    return (
      <Page>
        <center>
          <img src="/images/header-godefroiddevreese.png" style={{ width: '100%', maxWidth: '600px' }} />
        </center>
        <Box mt={4}>
          {loading && <Loading>{t('loading')}</Loading>}
          {showAskPassword &&
            <AskPassword onSubmit={this.handleSubmit} error={error} />
          }
          {data && <ShowStreetForms data={data} />}
          <Newsfeed />
        </Box>
        <Footer />
      </Page>
    )
  }
}

export default withIntl(StreetPage);
