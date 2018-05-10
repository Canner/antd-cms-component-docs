// @flow
import React from 'react';
import RefId from 'canner-ref-id';
import customPreview from 'stories/customPreview';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';

import Link from '@canner/antd-string-link';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const LinkPicker = ExamplePrimitiveValueWrapper('this is link value')(IntlComponent(Link))

storiesOf('String', module)
  .add('Link', customPreview(README, () => (
    <LinkPicker
      refId={new RefId("link")}
      />
  )));
