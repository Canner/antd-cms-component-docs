// @flow
import React from 'react';
import RefId from 'canner-ref-id';
import customPreview from 'stories/customPreview';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';
import README from './README.md';

import Input from '@canner/antd-string-input';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const InputDefault = ExamplePrimitiveValueWrapper('This is input value')(Input)
const sizeOptions = [
  'small',
  'default',
  'large'
];
const typeOptions = [
  'color',
  'date',
  'datetime-local',
  'email',
  'hidden',
  'month',
  'number',
  'password',
  'range',
  'text',
  'time',
  'week'
];
storiesOf('String', module)
  .addDecorator(withKnobs)
  .addDecorator(customPreview(README))
  .add('Input', () => (
    <InputDefault
      uiParams={{
        addonAfter: text('addonAfter', ''),
        addonBefore: text('addonBefore', ''),
        prefix: text('prefix', ''),
        size: select('size', sizeOptions),
        suffix: text('suffix', ''),
        type: select('type', typeOptions),
        placeholder: text('placeholder', 'Enter Input')
      }}
      refId={new RefId("input")}
    />
  ));
