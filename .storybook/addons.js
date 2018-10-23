import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import 'storybook-readme/register';
import '@storybook/addon-options/register';
import React from 'react';
import addons from '@storybook/addons';
import Panel from '@storybook/addon-knobs/dist/components/Panel';

addons.register('storybooks/storybook-addon-knobs', api => {
  const channel = addons.getChannel();

  addons.addPanel('storybooks/storybook-addon-knobs', {
    title: 'ui Params',
    render: () => <Panel channel={channel} api={api} key="knobs-panel" />,
  });
});