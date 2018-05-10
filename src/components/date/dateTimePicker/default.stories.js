// @flow
import * as React from 'react';
import RefId from 'canner-ref-id';
import customPreview from 'stories/customPreview';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';

import Date from '@canner/antd-string-date_time_picker';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';


const DatePicker = ExamplePrimitiveValueWrapper("2018-03-24T16:00:00.201Z")(IntlComponent(Date))

storiesOf('Date', module)
  .add('Date', customPreview(README, () => (
    <DatePicker
      refId={new RefId("date")}
      />
  )));
