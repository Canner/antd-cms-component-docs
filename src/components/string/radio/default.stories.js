// @flow
import React from 'react';
import RefId from 'canner-ref-id';
import customPreview from 'stories/customPreview';
import README from './README.md';

import Radio from '@canner/antd-string-radio';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const RadioDefault = ExamplePrimitiveValueWrapper("1")(Radio)

storiesOf('String', module)
  .add('Radio', customPreview(README, () => (
    <RadioDefault
      refId={new RefId("radio")}
      uiParams={{
        options: [{
          text: 'option 1',
          value: "1"
        }, {
          text: 'option 2',
          value: "2"
        }],
        defaultSelected: 1
      }}
      />
  )));
