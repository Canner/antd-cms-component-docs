// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import BooleanCard from '@canner/antd-boolean-card';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const BooleanCardDefault = ExamplePrimitiveValueWrapper(true)(BooleanCard)

storiesOf('Boolean', module)
  .addDecorator(withKnobs)
  .addDecorator(customPreview(README))
  .add('Card', () => (
    <BooleanCardDefault
      refId={new RefId("card")}
      uiParams={{
        yesText: text('yesText', "YES!!"),
        noText: text('noText', "NO!!")
      }}
      />
  ));
