// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';
import {Context} from 'canner-helpers';
import {withKnobs, object, boolean, text} from '@storybook/addon-knobs';

import Tree from '@canner/antd-array-tree';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';
import contextValue from 'components/context';

const initalData = [{
  "id": "id1",
  "name": "content 1",
  "category": { "id": "id2", "name": "content2"}
}, {
  "id": "id2",
  "name": "content 2",
  "category": null
}];

const TreeDefault = ExamplePrimitiveValueWrapper(initalData)(IntlComponent(Tree))

storiesOf('Array', module)
  .addDecorator(withKnobs)
  .add('Tree', customPreview(README, () => (
    <Context.Provider value={contextValue()}>
      <TreeDefault
        refId={new RefId("table")}
        goTo={(route) => console.log('goto: ', route)}
        uiParams={{
          relationField: text('relationField', 'category'),
          popup: boolean('popup', true)
        }}
        items={{
          type: "object",
          items: {
            name: {
              type: "string"
            },
            category: {
              type: "relation",
              uiParams: {
                textCol: 'name'
              }
            }
          }
        }}
      />
    </Context.Provider>
  )));
