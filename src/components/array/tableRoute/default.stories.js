// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';
import {Context} from 'canner-helpers';
import {withKnobs, object, boolean} from '@storybook/addon-knobs';

import TableRoute from '@canner/antd-array-table_route';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';
import contextValue from 'components/context';

const initalData = [{
  "title": "title 1",
  "content": "content 1"
}, {
  "title": "title 2",
  "content": "content 2"
}]

const TableRouteDefault = ExamplePrimitiveValueWrapper(initalData)(IntlComponent(TableRoute))

storiesOf('Array', module)
  .addDecorator(withKnobs)
  .add('Table Route', customPreview(README, () => (
    <Context.Provider value={contextValue()}>
      <TableRouteDefault
        refId={new RefId("table-route")}
        goTo={(route) => console.log('goto: ', route)}
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
