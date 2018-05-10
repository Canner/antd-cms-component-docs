// @flow
import React from 'react';
import RefId from 'canner-ref-id';

import Input from '@canner/antd-string-input';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../ExamplePrimitiveValueHoc';

const InputDefault = ExamplePrimitiveValueWrapper('This is input value')(Input)
storiesOf('String/Input', module)
  .add('Default', () => (
    <InputDefault
      refId={new RefId("input")}
      />
  ));
