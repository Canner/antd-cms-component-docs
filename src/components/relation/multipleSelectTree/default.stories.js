// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs/react';
import IntlComponent from 'components/IntlComponent';

import MultipleSelectTree from '@canner/antd-relation-multiple_select_tree';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const connection = {
  edges: [{
    cursor: 'item1',
    node: {
      id: 'item1',
      name: 'item1',
      parentCategories: {}
    }
  }, {
    cursor: 'item2',
    node: {
      id: 'item2',
      name: 'item2',
      parentCategories: {
        id: 'item1'
      }
    }
  }, {
    cursor: 'item3',
    node: {
      id: 'item3',
      name: 'item3',
      parentCategories: {
        id: 'item2'
      }
    }
  }, {
    cursor: 'item4',
    node: {
      id: 'item4',
      name: 'item4',
      parentCategories: {}
    }
  }, {
    cursor: 'item5',
    node: {
      id: 'item5',
      name: 'item5',
      parentCategories: {
        id: 'item4'
      }
    }
  }],
  pageInfo: {
    hasNextInfo: false
  }
};

// $FlowFixMe
const dataList = connection.edges.map(edge => edge.node);

const MultipleSelectTreeDefault = ExamplePrimitiveValueWrapper(dataList)(IntlComponent(MultipleSelectTree))

storiesOf('Relation', module)
  .addDecorator(withKnobs)
  .addDecorator(customPreview(README))
  .add('MultipleSelectTree', () => (
    <MultipleSelectTreeDefault
      refId={new RefId("categories/0/parentCategories")}
      relation={{
        to: 'categories',
        type: 'toMany'
      }}
      uiParams={{
        textCol: text('textCol', 'name'),
        columns: object('columns', [{
          title: "name",
          dataIndex: "name"
        }]),
        relationField: text('relationField', 'parentCategories')
      }}
      rootValue={{categories: dataList}}
      schema={{categories: {
        keyName: 'categories',
        type: 'array',
        items: {
          type: 'object',
          items: {
            name: {
              keyName: 'name',
              type: 'string'
            },
            parentCategories: {
              keyName: 'parentCategories',
              type: 'relation'
            }
          }
        }
      }}}
      Toolbar={({children}) => <div>{children(dataList)}</div>}
      relationValue={connection}
    />
  ));
