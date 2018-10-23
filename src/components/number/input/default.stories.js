// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import { withKnobs, text, number } from '@storybook/addon-knobs/react';

import NumberInput from '@canner/antd-number-input';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const NumberInputDefault = ExamplePrimitiveValueWrapper('100')(NumberInput)

storiesOf('Number', module)
  .addDecorator(withKnobs)
  .add('Input', customPreview(README, () => (
    <NumberInputDefault
      refId={new RefId("input")}
      uiParams={{
        min: number('min', 0),
        max: number('max', 100),
        step: number('step', 1),
        unit: text('unit', '')
      }}
    />
  )));
