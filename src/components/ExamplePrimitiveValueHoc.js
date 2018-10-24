// @flow
import * as React from 'react';
import type RefId from 'canner-ref-id';
import {Button} from 'antd';
import styled from 'styled-components';
import set from 'lodash/set';

const Hint = styled.div`
  font-color: #aaa;
  margin-top: 16px;
`

type PrimitiveValue = string | boolean | number | Object | Array<any>;

export default (defaultValue: PrimitiveValue, rootValue?: PrimitiveValue) => (ConfigOrComposedComponent: any) => {
  class ExamplePrimitiveValueWrapper extends ConfigOrComposedComponent {
    constructor(props: any) {
      super(props);
      this.state = {
        value: defaultValue,
        rootValue: defaultValue || rootValue
      };
    }

    onDeploy = (callback: Function) => {
      this.setState({
        callback
      });
    }

    onChange = (refId: RefId | {firstRefId: RefId, secondRefId: RefId}, type: string, delta: PrimitiveValue): Promise<void> => {
      if (refId.length) {
        // $FlowFixMe
        return refId.map(v => this.onChange(v.refId, v.type, v.value));
      }
      let {value, rootValue} = this.state;
      if (type === 'update') {
        // $FlowFixMe
        if (refId.getPathArr()[0] === 'variants') {
          console.log(refId, type)
          // $FlowFixMe
          const createVal = set(value, refId.getPathArr().slice(1), delta);
          this.setState({value: createVal})
          // $FlowFixMe
        } else if (refId.getPathArr()[0] === 'relation') {
          console.log(refId, type, delta)
          this.setState({value: rootValue.filter(v => {
            if (typeof delta === 'string') return v._id === delta;
            // $FlowFixMe
            return (delta || []).indexOf(v._id) !== -1;
          })});
        } else {
          console.log(refId, type, delta)
          this.setState({value: delta});
        }
      } else if (type === 'delete' && !refId.firstRefId) {
        console.log(refId, type)
        const pathArr = refId.getPathArr();
        const delValue = value.remove(pathArr[pathArr.length - 1])
        this.setState({value: delValue})
      } else if (type === 'create') {
        // $FlowFixMe
        if (refId.getPathArr()[0] === 'variants') {
          console.log(refId, type)
          // $FlowFixMe
          const createVal = value.update(refId.getPathArr()[1], list => list.concat(delta))
          this.setState({value: createVal})
          // $FlowFixMe
        } else if (refId.getPathArr()[0] === 'relation'){
          console.log(refId, type, delta)
          this.setState({value: value.concat(delta)});
        } else {
          const createVal = value.concat(delta || {})
          console.log(refId, type, createVal)
          this.setState({value: createVal})
        }
      } else if (type === 'swap' && refId.firstRefId) {
        console.log(refId, type)
        // $FlowFixMe
        const {firstRefId, secondRefId} = refId;
        const firstRefIdArr = firstRefId.getPathArr();
        const secondRefIdArr = secondRefId.getPathArr();
        const firstIndex = firstRefIdArr[firstRefIdArr.length - 1];
        const secondIndex = secondRefIdArr[secondRefIdArr.length - 1];
        const secondValue = value[secondIndex];
        const firstValue = value[firstIndex];
        value[firstIndex] = secondValue;
        value[secondIndex] = firstValue;
        this.setState({value});
      }

      return Promise.resolve();
    }

    render() {
      const {value, callback} = this.state;
      const {refId} = this.props;
      return (
        <React.Fragment>
          <ConfigOrComposedComponent
            {...this.props}
            onChange={this.onChange}
            value={value}
            onDeploy={this.onDeploy}
          />
          {
            callback && <Hint>This button appears if the component call `onDeploy` function. Click it and you can see the data changed.</Hint>
          }
          {
            callback && (
              <Button onClick={() => console.log(refId, 'update', callback(value))}>
                Deploy
              </Button>
            )
          }
        </React.Fragment>
      );
    }
  }

  return ExamplePrimitiveValueWrapper;
};