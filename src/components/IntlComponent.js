// @flow
import * as React from 'react';
import {IntlProvider} from 'react-intl';
import cmsLocale from '@canner/antd-locales';

export default (Component: React.Element<*>) => {
  class DemoComponent extends React.Component {
    render() {
      return (
        <IntlProvider
            locale="en"
            messages={cmsLocale["en"]}>
          <Component {...this.props}/>
        </IntlProvider>
      );
    }
  }

  return DemoComponent;
}