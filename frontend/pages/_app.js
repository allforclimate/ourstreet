import App from "next/app";
import React from "react";
import Gun from "gun";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { IntlContext, getLocaleFromHeaders } from "../lib/i18n";

const theme = {
  colors: {
    primary: "black",
  },
  fontSizes: ["12pt", "16pt", "24pt", "32pt", "48pt", "64pt"],
};

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "CrimsonText";
    src: url("fonts/CrimsonText-Regular.ttf")
  }

  @font-face {
    font-family: "CrimsonText";
    src: url("fonts/CrimsonText-Italic.ttf")
    font-style: italic, oblique;
  }

  @font-face {
    font-family: "CrimsonText";
    src: url("fonts/CrimsonText-Bold.ttf")
    font-weight: bold;
  }

  @font-face {
    font-family: "CrimsonText";
    src: url("fonts/CrimsonText-BoldItalic.ttf")
    font-weight: bold;
    font-style: italic, oblique;
  }

  body {
    font-family: CrimsonText;
    font-size: 14pt;
    line-height: 1.5;
  }
`;

class MyApp extends App {
  constructor() {
    super();
    this.gun = Gun("http://localhost:8765" + "/gun");
  }
  componentDidMount() {
    window.gun = this.gun; //To have access to gun object in browser console
  }
  render() {
    const { Component, pageProps, locale, messages } = this.props;
    return (
      <IntlContext.Provider value={{ locale, messages }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component gun={this.gun} {...pageProps} />
        </ThemeProvider>
      </IntlContext.Provider>
    );
  }
}

MyApp.getInitialProps = async (appContext) => {
  const i18n = getLocaleFromHeaders(
    appContext.ctx.req && appContext.ctx.req.headers
  );
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, ...i18n };
};

export default MyApp;
