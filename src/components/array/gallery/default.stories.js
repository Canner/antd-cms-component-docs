// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';
import {Context} from 'canner-helpers';
import {withKnobs, number, boolean, text} from '@storybook/addon-knobs/react';
import ArrayGallery from '@canner/antd-array-gallery';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';
import contextValue from 'components/context';
import {ImgurStorage} from '@canner/storage';





storiesOf('Array', module)
  .addDecorator(withKnobs)
  .addDecorator(customPreview(README))
  .add('Gallery', () => {
    const imageKey = text('imageKey', 'image');
    const initalData = [{
      [imageKey]: {
        url: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2ba0ce35b750cf280ed5319c07ae13c&auto=format&fit=crop&w=3150&q=80",
        size: 0,
        contentType: '',
        name: ''
      }
    }, {
      [imageKey]: {
        url: "https://images.unsplash.com/photo-1522204507765-be33852f2e28?ixlib=rb-0.3.5&s=5ed399c55beb5bee7ac055a3d946bb20&auto=format&fit=crop&w=3334&q=80",
        size: 0,
        contentType: '',
        name: ''
      }
    }, {
      [imageKey]: {
        url: "https://images.unsplash.com/photo-1522204657746-fccce0824cfd?ixlib=rb-0.3.5&s=ddc8760689fba9224d60fc5a1b031506&auto=format&fit=crop&w=3150&q=80",
        size: 0,
        contentType: '',
        name: ''
      }
    }, {
      [imageKey]: {
        url: "https://images.unsplash.com/photo-1522206024047-9c925421675b?ixlib=rb-0.3.5&s=7c43b852552a84227da908450ad2e863&auto=format&fit=crop&w=3334&q=80",
        size: 0,
        contentType: '',
        name: ''
      }
    }];
    const ArrayGalleryDefault = ExamplePrimitiveValueWrapper(initalData)(IntlComponent(ArrayGallery))
    return (
      <Context.Provider value={contextValue()}>
        <ArrayGalleryDefault
          refId={new RefId("gallery")}
          imageStorage={new ImgurStorage({
            clientId: '<clientId>'
          })}
          uiParams={{
            limitSize: number('limitSize', 6000),
            disableDrag: boolean('disableDrag', false),
            dirname: text('dirname', ''),
            imageKey: imageKey
          }}
        />
      </Context.Provider>
    );
  });
