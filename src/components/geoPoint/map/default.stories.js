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
  key: "ChIJQap0KLe2woAR46AJ2Vczr1I",
  placeId: "ChIJQap0KLe2woAR46AJ2Vczr1I",
  address: "Lakers Team Shop, North Douglas Street",
  lat: 33.9259554,
  lng: -118.38406509999999
})

const MapWrapper = ExamplePrimitiveValueWrapper(initalData)(IntlComponent(Map))

storiesOf('GeoPoint', module)
  .add('Map', customPreview(README, () => (
    <MapWrapper
      refId={new RefId("Map")}
      />
  )));
