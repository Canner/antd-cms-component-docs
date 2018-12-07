// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import Editor from '@canner/antd-object-editor';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const initialData = {
  state: '',
  html: ''
};

const StringDefault = ExamplePrimitiveValueWrapper(initialData)(IntlComponent(Editor))

storiesOf('Object', module)
  .addDecorator(withKnobs)
  .add('Editor', customPreview(README, () => (
    <React.Fragment>
      <StringDefault
        refId={new RefId("editor")}
        uiParams={{
          minHeight: text('minHeight', '300px')
        }}
      />
    </React.Fragment>
  )));
