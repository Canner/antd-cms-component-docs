// @flow

import { withDocs } from 'storybook-readme';
import styled from 'styled-components';

export default withDocs({
  PreviewComponent: styled.div`
    text-align: left;
    padding: 25px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  `
});