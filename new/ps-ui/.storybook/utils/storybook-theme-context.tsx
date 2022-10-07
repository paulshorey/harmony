import * as React from 'react';

import type Theme from '../storybook-theme';

const ThemeContext = React.createContext<typeof Theme | null>(null);

export default ThemeContext;
