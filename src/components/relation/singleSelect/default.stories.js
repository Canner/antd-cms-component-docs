// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import { withKnobs, text, object } from '@storybook/addon-knobs/react';
import IntlComponent from 'components/IntlComponent';

import SingleSelect from '@canner/antd-relation-single_select';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const connection = {
  edges: [{
    cursor: 'item1',
    node: {
      id: 'item1',
      title: 'item1'
    }
  }, {
    cursor: 'item2',
    node: {
      id: 'item2',
      title: 'item2'
    }
  }, {
    cursor: 'item3',
    node: {
      id: 'item3',
      title: 'item3'
    }
  }, {
    cursor: 'item4',
    node: {
      id: 'item4',
      title: 'item4'
    }
  }, {
    cursor: 'item5',
    node: {
      id: 'item5',
      title: 'item5'
    }
  }],
  pageInfo: {
    hasNextInfo: false
  }
};
const originValue = connection.edges.map(edge => edge.node);

const SingleSelectDefault = ExamplePrimitiveValueWrapper(originValue[0])(IntlComponent(SingleSelect))

storiesOf('Relation', module)
  .addDecorator(withKnobs)
  .addDecorator(customPreview(README))
  .add('SingleSelect', () => (
    <SingleSelectDefault
      refId={new RefId("singleSelect")}
      uiParams={{
        textCol: text('textCol', 'title'),
        columns: object('columns', [{
          title: "title",
          key: "title",
          dataIndex: "title"
        }]),
      }}
      Toolbar={({children}) => <div>{children(originValue)}</div>}
      relationValue={connection}
    />
  ));
