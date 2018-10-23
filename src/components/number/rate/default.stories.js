// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import { withKnobs, boolean, number } from '@storybook/addon-knobs/react';

import Rate from '@canner/antd-number-rate';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const RateDefault = ExamplePrimitiveValueWrapper(2)(Rate)

storiesOf('Number', module)
  .addDecorator(withKnobs)
  .add('Rate', customPreview(README, () => (
    <RateDefault
      refId={new RefId("rate")}
      uiParams={{
        allowHalf: boolean('allowHalf', false),
        count: number('count', 5)
      }}
    />
  )));
