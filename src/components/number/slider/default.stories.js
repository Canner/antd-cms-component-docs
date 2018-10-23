// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import { withKnobs, number, text } from '@storybook/addon-knobs/react';

import Slider from '@canner/antd-number-slider';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const SliderDefault = ExamplePrimitiveValueWrapper(6)(Slider)

storiesOf('Number', module)
  .addDecorator(withKnobs)
  .add('Slider', customPreview(README, () => (
    <SliderDefault
      refId={new RefId("slider")}
      uiParams={{
        min: number('min', 2),
        max: number('max', 10),
        step: number('step', 2),
        unit: text("unit", 'unit')
      }}
      />
  )));
