// @flow
import * as React from 'react';
import RefId from 'canner-ref-id';
import customPreview from 'stories/customPreview';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';
import { withKnobs, number, text } from '@storybook/addon-knobs/react';
import {ImgurStorage} from '@canner/storage';

import Image from '@canner/antd-object-image';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .addDecorator(customPreview(README))
  .add('Image', () => {
    const value = {
      url: "https://cdn.canner.io/images/logo/logo-word.png",
      size: 0,
      name: "",
      contentType: ""
    };
    
    const ImageWrapper = ExamplePrimitiveValueWrapper(value)(IntlComponent(Image))
    
    return (
      <ImageWrapper
        refId={new RefId("image")}
        imageStorage={new ImgurStorage({
          clientId: '<clientId>'
        })}
        uiParams={{
          limitSize: number('limitSize', 6000),
          dirname: text('dirname', ''),
          filename: text('filename', '')
        }}
      />
    )
  });
