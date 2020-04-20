import React from 'react';

export const IntlContext = React.createContext();

const t = (key, messages) => messages[key] || `[no message for key '${key}']`;

export const withIntl = ComposedComponent => class extends React.Component {
  render() {
    return (
      <IntlContext.Consumer>
        { context => (
          <ComposedComponent {...this.props} locale={context.locale} messages={context.messages} t={(key) => t(key, context.messages)} />
        )}
      </IntlContext.Consumer>
    );
  }
};