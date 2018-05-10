// @flow
import React from 'react';
import RefId from 'canner-ref-id';
import customPreview from 'stories/customPreview';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';

import Textarea from '@canner/antd-string-textarea';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const TextareaDefault = ExamplePrimitiveValueWrapper('This is a textarea')(IntlComponent(Textarea))

storiesOf('String', module)
  .add('Textarea', customPreview(README, () => (
    <TextareaDefault
      refId={new RefId("textarea")}
      />
  )));
