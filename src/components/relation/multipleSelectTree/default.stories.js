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
      title: 'item1',
      relation: null
    }
  }, {
    cursor: 'item2',
    node: {
      id: 'item2',
      title: 'item2',
      relation: {
        id: 'item1'
      }
    }
  }, {
    cursor: 'item3',
    node: {
      id: 'item3',
      title: 'item3',
      relation: {
        id: 'item2'
      }
    }
  }, {
    cursor: 'item4',
    node: {
      id: 'item4',
      title: 'item4',
      relation: null
    }
  }, {
    cursor: 'item5',
    node: {
      id: 'item5',
      title: 'item5',
      relation: {
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
      refId={new RefId("relation/1/relation")}
      relation={{
        to: 'posts',
        type: 'toMany'
      }}
      uiParams={{
        textCol: text('textCol', 'title'),
        columns: object('columns', [{
          title: "title",
          key: "title",
          dataIndex: "title"
        }]),
        relationField: text('relationField', 'relation')
      }}
      rootValue={{relation: dataList}}
      schema={{posts: {
        title: 'posts',
        type: 'array',
        items: {
          type: 'object',
          items: {
            title: {
              type: 'string'
            }
          }
        }
      }}}
      Toolbar={({children}) => <div>{children(dataList)}</div>}
      relationValue={connection}
    />
  ));
