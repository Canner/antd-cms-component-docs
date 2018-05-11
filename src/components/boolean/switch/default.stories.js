// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';

import BooleanSwitch from '@canner/antd-boolean-switch';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const BooleanSwitchDefault = ExamplePrimitiveValueWrapper(false)(IntlComponent(BooleanSwitch))

storiesOf('Boolean', module)
  .add('Switch', customPreview(README, () => (
    <BooleanSwitchDefault
      refId={new RefId("switch")}
      />
  )));
