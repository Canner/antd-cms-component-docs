// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import {fromJS} from 'immutable';
import {ImgurService} from "@canner/image-service-config";
import IntlComponent from 'components/IntlComponent';
import {Context} from '@canner/react-cms-helpers';

import ArrayGallery from '@canner/antd-array-gallery';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';
import contextValue from 'components/context';

const initalData = fromJS([{
  image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2ba0ce35b750cf280ed5319c07ae13c&auto=format&fit=crop&w=3150&q=80"
}, {
  image: "https://images.unsplash.com/photo-1522204507765-be33852f2e28?ixlib=rb-0.3.5&s=5ed399c55beb5bee7ac055a3d946bb20&auto=format&fit=crop&w=3334&q=80"
}, {
  image: "https://images.unsplash.com/photo-1522204657746-fccce0824cfd?ixlib=rb-0.3.5&s=ddc8760689fba9224d60fc5a1b031506&auto=format&fit=crop&w=3150&q=80"
}, {
  image: "https://images.unsplash.com/photo-1522206024047-9c925421675b?ixlib=rb-0.3.5&s=7c43b852552a84227da908450ad2e863&auto=format&fit=crop&w=3334&q=80"
}])

const ArrayGalleryDefault = ExamplePrimitiveValueWrapper(initalData)(IntlComponent(ArrayGallery))

storiesOf('Array', module)
  .addDecorator(customPreview(README))
  .add('Gallery', () => (
    <Context.Provider value={contextValue()}>
      <ArrayGalleryDefault
        refId={new RefId("gallery")}
        imageServiceConfig={new ImgurService({
          mashapeKey: '<mashapeKey>',
          clientId: '<clientId>'
        })}
        />
    </Context.Provider>
  ));
