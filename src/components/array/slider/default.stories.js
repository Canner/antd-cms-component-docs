// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import {fromJS} from 'immutable';
import IntlComponent from 'components/IntlComponent';
import {Context} from 'canner-helpers';

import Slider from '@canner/antd-array-slider';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';
import contextValue from 'components/context';

const initalData = fromJS([5, 11])

const SliderDefault = ExamplePrimitiveValueWrapper(initalData)(IntlComponent(Slider))

storiesOf('Array', module)
  .add('Slider', customPreview(README, () => (
    <Context.Provider value={contextValue()}>
      <SliderDefault
        refId={new RefId("slider")}
        />
    </Context.Provider>
  )));
