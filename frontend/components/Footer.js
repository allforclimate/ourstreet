import styled from "styled-components";

const Fineprint = styled.div`
  margin-top: 150px;
  color: #555;
  text-align: center;
  font-size: 10pt;
`;

const Footer = () => {
  return (
    <Fineprint>
      Our Street is an{" "}
      <a href="https://github.com/allforclimate/ourstreet">
        open source project
      </a>
      .<br />
      If you want to add your street,{" "}
      <a href="https://opencollective.com/ourstreet/conversations">
        start a conversation
      </a>{" "}
      on our <a href="https://opencollective.com/ourstreet">collective</a>.
      <br />
    </Fineprint>
  );
};

export default Footer;
