import * as React from 'react';
import { addons, types } from '@storybook/addons';
import {
  IconButton,
  TooltipLinkList,
  WithTooltip,
} from '@storybook/components';
import detect_default_color_scheme from '@ps/fn/browser/device/detect_default_color_scheme';

const COLOR_SCHEMES = [
  { id: 'dark', title: 'Dark' },
  { id: 'light', title: 'Light' },
];

const DarkModeAddon = ({ api }) => {
  const channel = addons.getChannel();
  const [colorsKey, setColorScheme] = React.useState('dark');

  React.useEffect(() => {
    setColorScheme(detect_default_color_scheme());
  }, []);

  React.useEffect(() => {
    const notifyColorScheme = () => {
      channel.emit('color-scheme-selected', colorsKey);
    };

    channel.on('story-mounted', notifyColorScheme);
    channel.emit('color-scheme-selected', colorsKey);

    return () => {
      channel.off('story-mounted', notifyColorScheme);
    };
  }, [channel, colorsKey, api]);

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      closeOnClick
      tooltip={({ onHide }) => (
        <TooltipLinkList
          links={COLOR_SCHEMES.map(({ id, title, tooltipLabel }) => ({
            id,
            title: tooltipLabel ?? title,
            onClick: () => {
              setColorScheme(id);
              onHide();
            },
          }))}
        />
      )}
    >
      <IconButton title="Change color scheme">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginLeft: 8 }}>
            Color scheme:{' '}
            {COLOR_SCHEMES.find(({ id }) => id === colorsKey).title}
          </span>
        </div>
      </IconButton>
    </WithTooltip>
  );
};

addons.register('dark-mode', (api) => {
  addons.add('dark-mode/panel', {
    type: types.TOOL,
    title: 'Dark mode',
    render: () => <DarkModeAddon api={api} />,
  });
});
