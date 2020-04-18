import App from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  colors: {
    primary: 'black',
  },
  fontSizes: ['12pt', '16pt', '24pt', '32pt', '48pt','64pt']
}

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

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}