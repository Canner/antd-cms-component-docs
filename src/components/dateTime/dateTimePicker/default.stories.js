// @flow
import * as React from 'react';
import RefId from 'canner-ref-id';
import customPreview from 'stories/customPreview';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';
import {withKnobs, text, select} from '@storybook/addon-knobs';

import Date from '@canner/antd-string-date_time_picker';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const DatePicker = ExamplePrimitiveValueWrapper("2018-03-24T16:00:00.201Z")(IntlComponent(Date))

storiesOf('DateTime', module)
  .addDecorator(withKnobs)
  .addDecorator(customPreview(README))
  .add('DateTime', () => (
    <DatePicker
      refId={new RefId("date")}
      uiParams={{
        format: text('format', 'YYYY/MM/DD'),
        output: select('output', [
          'ISO_8601',
          'timestamp.millseconds',
          'timestamp.seconds',
          'epoch'
        ])
      }}
    />
  ));
