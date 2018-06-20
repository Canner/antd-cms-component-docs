// @flow
import { addDecorator, configure } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import {setOptions} from '@storybook/addon-options';

setConsoleOptions({
  panelExclude: [/[HMR]/, /Warning/],
  log: 'onChange log'
});

setOptions({
  name: 'Canner',
  url: '/'
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
