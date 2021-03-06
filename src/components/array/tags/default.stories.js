// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';
import {Context} from 'canner-helpers';
import {withKnobs, object} from '@storybook/addon-knobs';

import Tag from '@canner/antd-array-tag';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';
import contextValue from 'components/context';


storiesOf('Array', module)
  .addDecorator(withKnobs)
  .addDecorator(customPreview(README))
  .add('Tag', () => {
    const initalData = object('defaultOptions', ["tag 1", "tag 2"]);
    const TagDefault = ExamplePrimitiveValueWrapper(initalData)(IntlComponent(Tag))

    return (
      <Context.Provider value={contextValue()}>
        <TagDefault
          refId={new RefId("tag")}
          uiParams={{
            defaultOptions: initalData
          }}
        />
      </Context.Provider>
    );
  });
