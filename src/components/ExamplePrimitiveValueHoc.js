// @flow
import * as React from 'react';
import type RefId from 'canner-ref-id';

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
          const createVal = value.setIn(refId.getPathArr().slice(1), delta)
          this.setState({value: createVal})
          // $FlowFixMe
        } else if (refId.getPathArr()[0] === 'relation') {
          console.log(refId, type, delta)
          this.setState({value: rootValue.filter(v => {
            if (typeof delta === 'string') return v.get('_id') === delta;
            // $FlowFixMe
            return (delta || []).indexOf(v.get('_id')) !== -1;
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
          const createVal = value.update(refId.getPathArr()[1], list => list.push(delta))
          this.setState({value: createVal})
          // $FlowFixMe
        } else if (refId.getPathArr()[0] === 'relation'){
          console.log(refId, type, delta)
          this.setState({value: value.push(delta)});
        } else {
          console.log(refId, type)
          const createVal = value.push({})
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
        let newValue = value.set(firstIndex, value.get(secondIndex));
        newValue = newValue.set(secondIndex, value.get(firstIndex));
        this.setState({value: newValue});
      }

      return Promise.resolve();
    }

    render() {
      const {value} = this.state;

      return (
        <ConfigOrComposedComponent
          {...this.props}
          onChange={this.onChange}
          value={value}
          />
      );
    }
  }

  return ExamplePrimitiveValueWrapper;
};