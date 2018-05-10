// @flow
import * as React from 'react';
import RefId from 'canner-ref-id';
import customPreview from 'stories/customPreview';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';

import Image from '@canner/antd-string-image';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';


const ImageWrapper = ExamplePrimitiveValueWrapper("https://cdn.canner.io/images/logo/logo-word.png")(IntlComponent(Image))

storiesOf('File', module)
  .add('Image', customPreview(README, () => (
    <ImageWrapper
      refId={new RefId("image")}
      />
  )));
