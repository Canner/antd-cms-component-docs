// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';

import Card from '@canner/antd-string-card';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const CardDefault = ExamplePrimitiveValueWrapper('world')(Card)

storiesOf('String', module)
  .add('Card', customPreview(README, () => (
    <CardDefault
      refId={new RefId("card")}
      uiParams={{
        options: [{
          text: "this is hello",
          value: "hello"
        }, {
          text: "this is world",
          value: "world"
        }]
      }}
      />
  )));
