// @ts-check
import * as React from 'react';
import { addons, types } from '@storybook/addons';
import {
  WithTooltip,
  IconButton,
  TooltipLinkList,
} from '@storybook/components';
import AVAILABLE_THEMES, { DEFAULT_THEME } from '../themes';
const renderPrimaryColorDot = (theme_key: string) => (
  <div
    style={{
      width: 20,
      height: 20,
      background: AVAILABLE_THEMES[theme_key].colors.primaryColor,
      borderRadius: '50%',
    }}
  />
);

const ThemeSelectorAddon = ({ api }) => {
  const channel = addons.getChannel();
  const [currentThemeKey, set_currentThemeKey] = React.useState(
    () =>
      api.getQueryParam('skin') ||
      api.getQueryParam('theme') ||
      DEFAULT_THEME.key
  );

  React.useEffect(() => {
    const notifySkin = () => {
      channel.emit('theme-selected', currentThemeKey);
    };

    channel.on('story-mounted', notifySkin);

    return () => {
      channel.off('story-mounted', notifySkin);
    };
  }, [channel, currentThemeKey]);

  React.useEffect(() => {
    channel.emit('theme-selected', currentThemeKey);

    api.setOptions({ theme: AVAILABLE_THEMES[currentThemeKey] });

    // We need this timeout because there could be some race condition between addon mount and storybook manager initialization on page load
    const tid = setTimeout(() => {
      api.setOptions({ theme: AVAILABLE_THEMES[currentThemeKey] });
    }, 100);

    return () => {
      clearTimeout(tid);
    };
  }, [api, channel, currentThemeKey]);

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      closeOnClick
      tooltip={({ onHide }) => (
        <TooltipLinkList
          links={Object.keys(AVAILABLE_THEMES).map((key) => ({
            id: key,
            title: key,
            right: renderPrimaryColorDot(key),
            onClick: () => {
              // update preview theme
              set_currentThemeKey(key);
              onHide();
            },
          }))}
        />
      )}
    >
      <IconButton title="Change theme">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {renderPrimaryColorDot(currentThemeKey)}
          <span style={{ marginLeft: 8 }}>{currentThemeKey}</span>
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
