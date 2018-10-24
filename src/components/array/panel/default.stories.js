// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';
import {Context} from 'canner-helpers';
import {withKnobs, text} from '@storybook/addon-knobs/react';

import Panel from '@canner/antd-array-panel';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';
import contextValue from 'components/context';


storiesOf('Array', module)
  .addDecorator(withKnobs)
  .addDecorator(customPreview(README))
  .add('Panel', () => {
    const titleKey = text('titleKey', 'title');
    const initalData = [{
      [titleKey]: "title 1",
      "content": "content 1"
    }, {
      [titleKey]: "title 2",
      "content": "content 2"
    }];
    
    const PanelDefault = ExamplePrimitiveValueWrapper(initalData)(IntlComponent(Panel))
    return (
      <Context.Provider value={contextValue()}>
        <PanelDefault
          refId={new RefId("panel")}
          uiParams={{
            titleKey
          }}
        />
      </Context.Provider>
    );
  });
