// @flow
import React from 'react';
import RefId from 'canner-ref-id';
import customPreview from 'stories/customPreview';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';

import TimePicker from '@canner/antd-string-time_picker';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const TimePickerDefault = ExamplePrimitiveValueWrapper("16:18")(IntlComponent(TimePicker))

storiesOf('String', module)
  .add('TimePicker', customPreview(README, () => (
    <TimePickerDefault
      refId={new RefId("timePicker")}
      />
  )));
