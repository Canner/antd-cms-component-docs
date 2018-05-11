// @flow
import { addDecorator, configure } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import {setOptions} from '@storybook/addon-options';

setConsoleOptions({
  panelExclude: [/[HMR]/, /Warning/],
  log: 'onChange log'
});

setOptions({
  showDownPanel: false,
  name: 'canner-cms',
  url: 'https://github.com/Canner/react-cms-components',
  sidebarAnimations: true
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
