// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';

import NumberInput from '@canner/antd-number-input';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const NumberInputDefault = ExamplePrimitiveValueWrapper('100')(NumberInput)

storiesOf('Number', module)
  .add('Input', customPreview(README, () => (
    <NumberInputDefault
      refId={new RefId("input")}
      />
  )));
