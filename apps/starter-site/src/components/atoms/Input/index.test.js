import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from '.';
import GlobalStyles from 'styles/globalStyles';
import theme from 'styles/theme';

const handleChange = jest.fn();

describe('Input', () => {
  it('onChange is fired with the proper value when input value has changed', () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Input value="input text" onChange={handleChange} />
      </ThemeProvider>,

    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'changed text' } });
    expect(handleChange).toHaveBeenCalledWith('changed text');
  });
  it('is in focus isInFocus parameter is set to true', () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Input value="input text" onChange={handleChange} isInFocus />
      </ThemeProvider>,

    );
    expect(document.activeElement).toEqual(screen.getByRole('textbox'));
  });
});
