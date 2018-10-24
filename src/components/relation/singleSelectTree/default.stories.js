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
const dataList = connection.edges.map(edge => edge.node);
const SingleSelectTreeDefault = ExamplePrimitiveValueWrapper(dataList[0])(IntlComponent(SingleSelectTree))

storiesOf('Relation', module)
  .addDecorator(withKnobs)
  .addDecorator(customPreview(README))
  .add('SingleSelectTree', () => (
    <SingleSelectTreeDefault
      refId={new RefId("relation/0/relation")}
      uiParams={{
        textCol: text('textCol', 'title'),
        relationField: text('relationField', 'relation')
      }}
      relation={{
        to: 'posts',
        type: 'toOne'
      }}
      Toolbar={({children}) => children(dataList)}
      rootValue={{relation: dataList}}
      relationValue={connection}
    />
  ));
