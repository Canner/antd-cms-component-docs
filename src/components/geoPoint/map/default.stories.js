// @flow
import * as React from 'react';
import RefId from 'canner-ref-id';
import customPreview from 'stories/customPreview';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';
import {fromJS} from 'immutable';

import Map from '@canner/antd-object-map';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const initalData = fromJS({
  key: "Eiflj7DngaPmlrDljJfluILmlrDojorljYDmgJ3mupDot68yMzDlt7c",
  label: "台灣新北市新莊區思源路230巷",
  lat: 25.0489013,
  lng: 121.46126290000007
})

const MapWrapper = ExamplePrimitiveValueWrapper(initalData)(IntlComponent(Map))

storiesOf('GeoPoint', module)
  .add('Map', customPreview(README, () => (
    <MapWrapper
      refId={new RefId("Map")}
      />
  )));
