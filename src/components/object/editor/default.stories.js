// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import {fromJS} from 'immutable';
import IntlComponent from 'components/IntlComponent';

import Editor from '@canner/antd-object-editor';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const initialData = fromJS({
  state: '',
  html: ''
});

const StringDefault = ExamplePrimitiveValueWrapper(initialData)(IntlComponent(Editor))

storiesOf('Object', module)
  .add('Editor', customPreview(README, () => (
    <React.Fragment>
      <StringDefault
        refId={new RefId("editor")}
      />
    </React.Fragment>
  )));
