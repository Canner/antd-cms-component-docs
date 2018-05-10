// @flow
import React from 'react';
import RefId from 'canner-ref-id';
import customPreview from 'stories/customPreview';
import README from './README.md';

import Input from '@canner/antd-string-input';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const InputDefault = ExamplePrimitiveValueWrapper('This is input value')(Input)

storiesOf('String', module)
  .add('Input', customPreview(README, () => (
    <InputDefault
      refId={new RefId("input")}
      />
  )));
