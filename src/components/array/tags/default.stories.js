// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import {fromJS} from 'immutable';
import IntlComponent from 'components/IntlComponent';
import {Context} from '@canner/react-cms-helpers';

import Tag from '@canner/antd-array-tag';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';
import contextValue from 'components/context';

const initalData = fromJS(["tag 1", "tag 2"])

const TagDefault = ExamplePrimitiveValueWrapper(initalData)(IntlComponent(Tag))

storiesOf('Array', module)
  .add('Tag', customPreview(README, () => (
    <Context.Provider value={contextValue()}>
      <TagDefault
        refId={new RefId("tag")}
        />
    </Context.Provider>
  )));
