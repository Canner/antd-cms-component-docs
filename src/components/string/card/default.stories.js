// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import Card from '@canner/antd-string-card';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const CardDefault = ExamplePrimitiveValueWrapper('world')(Card)

storiesOf('String', module)
  .addDecorator(withKnobs)
  .addDecorator(customPreview(README))
  .add('Card', () => (
    <CardDefault
      refId={new RefId("card")}
      uiParams={{
        options: object('options', [{
          text: "this is hello",
          value: "hello"
        }, {
          text: "this is world",
          value: "world"
        }])
      }}
      />
  ));
