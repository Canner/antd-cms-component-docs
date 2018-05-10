// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';

import BooleanCard from '@canner/antd-boolean-card';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const BooleanCardDefault = ExamplePrimitiveValueWrapper(true)(BooleanCard)

storiesOf('Boolean', module)
  .add('Card', customPreview(README, () => (
    <BooleanCardDefault
      refId={new RefId("card")}
      uiParams={{
        yesText: "YES!!",
        noText: "NO!!"
      }}
      />
  )));
