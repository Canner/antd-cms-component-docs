// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';
import {Context} from 'canner-helpers';
import {withKnobs, object, boolean} from '@storybook/addon-knobs';

import Table from '@canner/antd-array-table';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';
import contextValue from 'components/context';

const initalData = [{
  "title": "title 1",
  "content": "content 1"
}, {
  "title": "title 2",
  "content": "content 2"
}];

const TableDefault = ExamplePrimitiveValueWrapper(initalData)(IntlComponent(Table))

storiesOf('Array', module)
  .addDecorator(withKnobs)
  .add('Table', customPreview(README, () => (
    <Context.Provider value={contextValue()}>
      <TableDefault
        refId={new RefId("table")}
        uiParams={{
          columns: object('columns', [{
            title: "title",
            key: "title",
            dataIndex: "title"
          }]),
          disableDelete: boolean('disableDelete', false),
          createKeys: object('createKeys', ['title', 'content']),
          updateKeys: object('updateKeys', ['title', 'content'])
        }}
        items={{
          type: "object",
          items: {
            title: {
              type: "string"
            },
            content: {
              type: "string"
            }
          }
        }}
        />
    </Context.Provider>
  )));
