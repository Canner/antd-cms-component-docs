// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import {fromJS} from 'immutable';
import {Context} from '@canner/react-cms-helpers';

import Options from '@canner/antd-object-options';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';
import contextValue from 'components/context';

const initialData = fromJS({
  selectedKey: "option1",
  option1: {
    title: "this is title 1"
  },
  option2: {
    content: "this is content 2"
  }
})

const OptionsDefault = ExamplePrimitiveValueWrapper(initialData)(Options)
const items = {
  option1: {
    type: "string",
    keyName: "option1"
  },
  option2: {
    keyName: "option2",
    type: "string",
    ui: "editor"
  }
};

storiesOf('Object', module)
  .add('Options', customPreview(README, () => (
    <Context.Provider value={contextValue(items)}>
      <OptionsDefault
        refId={new RefId("options")}
        uiParams={{
          options: [{
            title: 'Option1',
            key: 'option1'
          }, {
            title: 'Option2',
            key: 'option2'
          }],
          optionKey: 'selectedKey'
        }}
        items={items}
        />
    </Context.Provider>
  )));
