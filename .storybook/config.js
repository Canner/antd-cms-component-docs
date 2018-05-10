// @flow
import { addDecorator, configure } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';

setConsoleOptions({
  panelExclude: [/[HMR]/, /Warning/],
  log: 'onChange log'
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
