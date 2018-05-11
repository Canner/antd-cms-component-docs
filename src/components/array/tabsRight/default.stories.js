// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import {fromJS} from 'immutable';
import IntlComponent from 'components/IntlComponent';
import {Context} from '@canner/react-cms-helpers';

import TabRight from '@canner/antd-array-tab_right';
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

const TabRightDefault = ExamplePrimitiveValueWrapper(initalData)(IntlComponent(TabRight))

storiesOf('Array', module)
  .add('Tab right', customPreview(README, () => (
    <Context.Provider value={contextValue()}>
      <TabRightDefault
        refId={new RefId("tab-right")}
        />
    </Context.Provider>
  )));
