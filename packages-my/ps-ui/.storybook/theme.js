import themeStorybookDashboard from './theme-storybook-dashboard';
// import { create } from '@storybook/theming';
// export default create({ theme properties });
const colors = {
  primary: '#019DF4',
  textPrimary: '#313235',
  textPrimaryInverse: '#FFFFFF',
  textSecondary: '#86888C',
};

export default {
  ...themeStorybookDashboard,

  key: 'default',
  title: 'Default',

  colorScheme: 'dark',
  i18n: { locale: 'en-US' },

  colors,
  colorSecondary: colors.primary,

  // Typography
  fontBase: "-apple-system, 'Roboto', 'Helvetica', 'Arial', sans-serif",
  fontCode: 'monospace',

  // Text colors
  textColor: colors.primary,
  textInverseColor: colors.primary,

  // Toolbar default and active colors
  barTextColor: colors.primary,
  barSelectedColor: colors.primary,

  base: 'dark',
  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://place-hold.it/350x150',
  brandTarget: '_self',
};
