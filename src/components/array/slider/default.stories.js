// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';
import {Context} from 'canner-helpers';
import {withKnobs, number, text} from '@storybook/addon-knobs/react';

import Slider from '@canner/antd-array-slider';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';
import contextValue from 'components/context';

const initalData = [5, 11]

const SliderDefault = ExamplePrimitiveValueWrapper(initalData)(IntlComponent(Slider))

storiesOf('Array', module)
  .addDecorator(withKnobs)
  .add('Slider', customPreview(README, () => (
    <Context.Provider value={contextValue()}>
      <SliderDefault
        refId={new RefId("slider")}
        uiParams={{
          min: number('min', 0),
          max: number('max', 100),
          step: number('step', 1),
          unit: text('unit', '')
        }}
      />
    </Context.Provider>
  )));
