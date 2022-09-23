import React from 'react';
import { Merge } from '@ps/ui/types/helpers';

export type tsFixMe = any;

/**
 * Sometimes we need to manage boolean values, like checkboxes and toggle switches. Sometimes, value must be null.
 * In the future, we may need to manage more complicated values, objects, passed to custom form input components,
 * like a photo carousel of multiple images, or multi-field address, or however we handle cards and related data!
 */
export type fieldChangeEventType = {
  target: { name?: string; value?: any };
};

/**
 * Used by: atoms/Input | atoms/Checkbox | custom field editors like CloudinaryImage or SelectCategoryTypeId
 * Note: atoms/Checkbox uses props.value as boolean instead of props.checked, to be consistent with other inputs.
 */
export type fieldPropsType = Merge<
  React.InputHTMLAttributes<HTMLInputElement>,
  {
    disabled?: boolean;
    isInFocus?: boolean;
    name: string;
    onChange?: (e: fieldChangeEventType) => void;
    type?: string;
    value?: any;
  }
>;

/*
 * DOM user interactions
 */
export type htmlMouseEvent = React.MouseEvent<HTMLElement>;
export type htmlTouchEvent = React.TouchEvent<HTMLElement>;
export type htmlChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type htmlFocusEvent = React.FocusEvent<HTMLElement | HTMLInputElement>;
export type htmlKeyboardEvent = React.KeyboardEvent<HTMLElement>;
export type htmlSyntheticEvent = React.SyntheticEvent<HTMLElement>;
