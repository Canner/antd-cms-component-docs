// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';
import {Context} from 'canner-helpers';
import {withKnobs, text, select} from '@storybook/addon-knobs';

import Tab from '@canner/antd-array-tabs';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';
import contextValue from 'components/context';


storiesOf('Array', module)
  .addDecorator(withKnobs)
  .addDecorator(customPreview(README))
  .add('Tab', () => {
    const titleKey = text('titleKey', 'title');
    const initalData = [{
      [titleKey]: "title 1",
      "content": "content 1"
    }, {
      [titleKey]: "title 2",
      "content": "content 2"
    }];
    
    const TabTopDefault = ExamplePrimitiveValueWrapper(initalData)(IntlComponent(Tab))
    return (
      <Context.Provider value={contextValue()}>
        <TabTopDefault
          refId={new RefId("tab")}
          uiParams={{
            titleKey,
            position: select('position', ['top', 'left', 'right', 'bottom'])
          }}
        />
      </Context.Provider>
    );
  });
