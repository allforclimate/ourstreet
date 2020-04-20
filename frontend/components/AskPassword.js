import styled from 'styled-components';
import { withIntl } from '../lib/i18n';
import { Flex, Box } from 'reflexbox/styled-components'

const Error = styled.div`
  color: red;
  font-weight: bold;
`;

const StyledLabel = styled.label`
  display: block;
  position: relative;
  white-space: nowrap;
  border: none;
  padding: 0;
  margin: 0;
  width: 10%;
  border-top: 1px solid red;
  -webkit-transition: width 0.4s ease;
  transition: width 0.4s ease;
  height: 0px;
  & > span {
    font-size: 24px;
    font-weight: 300;
    margin: 0;
    position: absolute;
    color: #8F8F8F;
    top: -40px;
    left: 0px;
    z-index: -1;
    -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
    transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  }
`;

const InputField = styled.div`
  input:focus {
    outline: 0;
  }
  input:focus + label {
    width: 80%;
  }
  input:focus + label > span {
    top: -70px;
    font-size: 16px;
    color: #333;
  }
  input:valid + label {
    border-color: green;
  }

  @-webkit-keyframes appear {
    100% {
      opacity: 1;
    }
  }

  @keyframes appear {
    100% {
      opacity: 1;
    }
  }
  `;

const StyledInput = styled.input`
  display: block;
  margin: 10px;
  padding: 5px;
  font-size: 24px;
  font-weight: 300;
  border-radius: 2px;
  margin: 0;
  border: none;
  width: 80%;
  background: rgba(0, 0, 0, 0);
  transition: padding-top 0.2s ease, margin-top 0.2s ease;
  overflow-x: hidden; /* Hack to make "rows" attribute apply in Firefox. */
  &:focus {
    padding-top: 35px;
  } 
  &:valid {
    padding-top: 35px;
    & + label > span {
      top: -70px;
      font-size: 16px;
      color: #333;
    }
  }

  `;

const StyledSubmit = styled.input`
  border: 1px solid black;
  margin: 20px 0;
  padding: 10px;
  font-size: 16px;
`;

class AskPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = { form: {} };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(fieldname, value) {
    const { form } = this.state;
    form[fieldname] = value;
    this.setState({ form, error: null });
  }

  componentDidMount() {
    this.firstInput.focus();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.form.password);
    return false;
  }

  render() {
    const { t, error } = this.props;

    return (
      <Flex flexWrap="wrap">
        <form onSubmit={this.handleSubmit}>
          <InputField>
            <StyledInput
              type="password"
              id="password"
              name="password"
              onChange={(e) => this.handleChange('password', e.target.value)}
              ref={(input) => { this.firstInput = input; }}
              required
            />
            <StyledLabel htmlFor="password"><span>{t('password.label')}</span></StyledLabel>
          </InputField>
          <Box><StyledSubmit type="submit" value={t('submit.button')} /></Box>
          <Box><Error>{error && t(`error.${error.message}`)}</Error></Box>
        </form>
      </Flex>
    );
  }
}

export default withIntl(AskPassword);