// @flow
import React from 'react';
import customPreview from 'stories/customPreview';
import RefId from 'canner-ref-id';
import README from './README.md';
import { withKnobs, text, object } from '@storybook/addon-knobs/react';
import IntlComponent from 'components/IntlComponent';

import MultipleSelect from '@canner/antd-relation-multiple_select';
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

const MultipleSelectDefault = ExamplePrimitiveValueWrapper(originValue)(IntlComponent(MultipleSelect))

storiesOf('Relation', module)
  .addDecorator(withKnobs)
  .addDecorator(customPreview(README))
  .add('MultipleSelect', () => (
    <MultipleSelectDefault
      refId={new RefId("user/0/lovedPosts")}
      relation={{
        to: 'posts',
        type: 'toMany'
      }}
      uiParams={{
        columns: object('columns', [{
          title: "Title",
          dataIndex: "title"
        }, {
          title: "Image",
          dataIndex: "image"
        }, {
          title: "Created Date",
          dataIndex: "createdDate"
        }]),
      }}
      schema={{posts: {
        title: 'posts',
        type: 'array',
        items: {
          type: 'object',
          items: {
            title: {
              type: 'string'
            },
            image: {
              type: 'image'
            },
            createdDate: {
              type: 'dateTime'
            }
          }
        }
      }}}
      Toolbar={({children}) => <div>{children(originValue)}</div>}
      relationValue={connection}
    />
  ));
