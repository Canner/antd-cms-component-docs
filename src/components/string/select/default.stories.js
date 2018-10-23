// @flow
import React from 'react';
import RefId from 'canner-ref-id';
import customPreview from 'stories/customPreview';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import Select from '@canner/antd-string-select';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const SelectDefault = ExamplePrimitiveValueWrapper('2')(IntlComponent(Select))

storiesOf('String', module)
  .addDecorator(withKnobs)
  .addDecorator(customPreview(README))
  .add('Select', () => (
    <SelectDefault
      refId={new RefId("select")}
      uiParams={{
        options: object('options', [{
          text: 'option 1',
          value: "1"
        }, {
          text: 'option 2',
          value: "2"
        }])
      }}
    />
  ));
