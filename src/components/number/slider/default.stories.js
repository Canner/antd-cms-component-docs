// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';

import Slider from '@canner/antd-number-slider';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const SliderDefault = ExamplePrimitiveValueWrapper(6)(Slider)

storiesOf('Number', module)
  .add('Slider', customPreview(README, () => (
    <SliderDefault
      refId={new RefId("slider")}
      uiParams={{
        min: 2,
        max: 10,
        step: 2,
        unit: "unit"
      }}
      />
  )));
