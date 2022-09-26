import * as React from 'react';
import { addons, types } from '@storybook/addons';
import {
  IconButton,
  TooltipLinkList,
  WithTooltip,
} from '@storybook/components';

const THEMES_AVAILABLE = [
  { id: 'default', title: 'Default' },
  { id: 'alternative', title: 'Alternative' },
];

const ThemeSelectorAddon = ({ api }) => {
  const channel = addons.getChannel();
  const [currentTheme, setCurrentTheme] = React.useState(
    () => api.getQueryParam('theme') || 'default'
  );

  React.useEffect(() => {
    const notifyTheme = () => {
      channel.emit('theme-selected', currentTheme);
    };

    channel.on('story-mounted', notifyTheme);
    channel.emit('theme-selected', currentTheme);

    return () => {
      channel.off('story-mounted', notifyTheme);
    };
  }, [channel, currentTheme, api]);

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      closeOnClick
      tooltip={({ onHide }) => (
        <TooltipLinkList
          links={THEMES_AVAILABLE.map(({ id, title }) => ({
            id,
            title,
            onClick: () => {
              setCurrentTheme(id);
              onHide();
            },
          }))}
        />
      )}
    >
      <IconButton title="Change theme">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginLeft: 8 }}>
            Theme:{' '}
            {THEMES_AVAILABLE.find(({ id }) => id === currentTheme).title}
          </span>
        </div>
      </IconButton>
    </WithTooltip>
  );
};

addons.register('theme-selector', (api) => {
  addons.add('theme-selector/panel', {
    type: types.TOOL,
    title: 'Theme',
    render: () => <ThemeSelectorAddon api={api} />,
  });
});
