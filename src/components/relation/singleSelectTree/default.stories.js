// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import { withKnobs, text, object } from '@storybook/addon-knobs/react';
import IntlComponent from 'components/IntlComponent';

import SingleSelectTree from '@canner/antd-relation-single_select_tree';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';


const connection = {
  edges: [{
    cursor: 'item1',
    node: {
      id: 'item1',
      name: 'item1',
      parentCategory: null
    }
  }, {
    cursor: 'item2',
    node: {
      id: 'item2',
      name: 'item2',
      parentCategory: {
        id: 'item1'
      }
    }
  }, {
    cursor: 'item3',
    node: {
      id: 'item3',
      name: 'item3',
      parentCategory: {
        id: 'item2'
      }
    }
  }, {
    cursor: 'item4',
    node: {
      id: 'item4',
      name: 'item4',
      parentCategory: null
    }
  }, {
    cursor: 'item5',
    node: {
      id: 'item5',
      name: 'item5',
      parentCategory: {
        id: 'item4'
      }
    }
  }],
  pageInfo: {
    hasNextInfo: false
  }
};
const dataList = connection.edges.map(edge => edge.node);
const SingleSelectTreeDefault = ExamplePrimitiveValueWrapper(dataList[0])(IntlComponent(SingleSelectTree))

storiesOf('Relation', module)
  .addDecorator(withKnobs)
  .addDecorator(customPreview(README))
  .add('SingleSelectTree', () => (
    <SingleSelectTreeDefault
      refId={new RefId("categories/0/parentCategory")}
      uiParams={{
        textCol: text('textCol', 'name'),
        relationField: text('relationField', 'parentCategory')
      }}
      relation={{
        to: 'categories',
        type: 'toOne'
      }}
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
            parentCategory: {
              keyName: 'parentCategory',
              type: 'relation'
            }
          }
        }
      }}}
      Toolbar={({children}) => children(dataList)}
      rootValue={{categories: dataList}}
      relationValue={connection}
    />
  ));
