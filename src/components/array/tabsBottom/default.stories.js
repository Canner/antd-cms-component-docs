// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import {fromJS} from 'immutable';
import IntlComponent from 'components/IntlComponent';
import {Context} from 'canner-helpers';

import TabBottom from '@canner/antd-array-tab_bottom';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';
import contextValue from 'components/context';

const initalData = fromJS([{
  "title": "title 1",
  "content": "content 1"
}, {
  "title": "title 2",
  "content": "content 2"
}])

const TabBottomDefault = ExamplePrimitiveValueWrapper(initalData)(IntlComponent(TabBottom))

storiesOf('Array', module)
  .add('Tab bottom', customPreview(README, () => (
    <Context.Provider value={contextValue()}>
      <TabBottomDefault
        refId={new RefId("tab-bottom")}
        />
    </Context.Provider>
  )));
