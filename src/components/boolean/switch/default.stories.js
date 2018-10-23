// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import BooleanSwitch from '@canner/antd-boolean-switch';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const BooleanSwitchDefault = ExamplePrimitiveValueWrapper(false)(IntlComponent(BooleanSwitch))

storiesOf('Boolean', module)
  .addDecorator(withKnobs)
  .add('Switch', customPreview(README, () => (
    <BooleanSwitchDefault
      refId={new RefId("switch")}
      uiParams={{
        yesText: text('yesText', "yes"),
        noText: text('noText', "no")
      }}
    />
  )));
