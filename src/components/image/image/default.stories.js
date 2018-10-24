// @flow
import * as React from 'react';
import RefId from 'canner-ref-id';
import customPreview from 'stories/customPreview';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';

import Image from '@canner/antd-object-image';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const value = {
  url: "https://cdn.canner.io/images/logo/logo-word.png",
  size: 0,
  name: "",
  contentType: ""
};

const ImageWrapper = ExamplePrimitiveValueWrapper(value)(IntlComponent(Image))

storiesOf('Image', module)
  .add('Image', customPreview(README, () => (
    <ImageWrapper
      refId={new RefId("image")}
      />
  )));
