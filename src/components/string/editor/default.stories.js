// @flow
import * as React from 'react';
import RefId from 'canner-ref-id';
import customPreview from 'stories/customPreview';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';

import Editor from '@canner/antd-string-editor';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';


const EditorWrapper = ExamplePrimitiveValueWrapper("This is an editor")(IntlComponent(Editor))

storiesOf('String', module)
  .add('Editor', customPreview(README, () => (
    <EditorWrapper
      refId={new RefId("editor")}
      />
  )));
