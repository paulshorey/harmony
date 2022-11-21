import React, { memo, useState } from 'react';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import { PlusOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import Select, {
  withSelect,
  Props as SelectProps,
  Option,
} from '@ps/ui/components/Select';
import styles from './styles';
import Button from '@ps/ui/components/Button';
import InputGroup from '@ps/ui/components/InputGroup';

export type Props = {
  /**
   * Input element placeholder - when typing a new value.
   */
  addPlaceholder?: string;
  /**
   * When user adds new value, this function is called.
   */
  onAdd?: (value: string) => void;
  /**
   * Required. Instead of options (which contain value/label pairs), this componet takes a simple array of strings. The value and label are the same. Numbers may also be supported in the near future.
   */
  values: string[];
  /**
   * If provided, this function will be called when user clicks on the option "X" button to delete one of the options.
   */
  onValuesRemove?: (value: string) => void;
  /**
   * NOT SUPPORTED YET. Will be added soon.
   *
   * Validate the new "add value" input field. By default, it is required to be non-empty. But you can add your own validation Regular Expression, to check for a minimum length, or a specific pattern like starting with "https?://" or email address or anything.
   *
   * Pass validation object, or a string that refers to the key of a built-in validation function. For example, "email" will refer to `theme.validations.email` the value of which will be `{ regExp: RegExp; errorMessage: string; }`. TODO: manage predefined regexps in the site theme, then convert this type to a "keyof" enum.
   */
  validations?: Array<
    | {
        regExp: RegExp;
        errorMessage: string;
      }
    | string /* keyof predefined regexps in theme */
  >;
} & Omit<SelectProps, 'options'>;

/**
 * Select component (includes multi-select and type tags functionality). Plus input to add a custom value. Powered by Ant Design component.
 */
export const Component = (props: Props) => {
  const { values, addPlaceholder, onAdd, onValuesRemove, ...rest } = props;
  const [items, set_items] = useState(values);
  const [addNewValue, set_addNewValue] = useState('');

  if (rest.showSearch) {
    if (!rest.optionFilterProp) {
      rest.optionFilterProp = 'children';
    }
    if (!rest.filterOption) {
      rest.filterOption = (input, option) =>
        (option?.label + '').toLowerCase().includes(input.toLowerCase());
    }
  }
  const handleValuesRemove = (value) => {
    if (onValuesRemove) {
      onValuesRemove(value);
    }
  };

  const handleAddChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event.target.value', event.target.value);
    set_addNewValue(event.target.value);
  };

  const handleAddSubmit = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!addNewValue) {
      return;
    }
    set_items([...items, addNewValue]);
    set_addNewValue('');
    if (onAdd) {
      onAdd(addNewValue);
    }
  };

  // const Select = withSelect(rest);

  return (
    <Select
      {...rest}
      ss={styles.wrapper}
      dropdownRender={(menu) => (
        <>
          {menu}
          <InputGroup
            style={{
              paddingLeft: '1px',
              paddingTop: '4px',
            }}
          >
            <Input
              placeholder={addPlaceholder || 'Add new item...'}
              value={addNewValue}
              onChange={handleAddChange}
              onPressEnter={handleAddSubmit}
            />
            <Button
              variant="outlined"
              icon={<PlusOutlined />}
              onClick={handleAddSubmit}
            />
          </InputGroup>
        </>
      )}
    >
      {items.map((value) => (
        <Option key={value} value={value} label={value} ss={styles.option}>
          {value}{' '}
          <Button
            size={props.size}
            variant="outline"
            ss={styles.optionRemove}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleValuesRemove(value);
            }}
          >
            X
          </Button>
        </Option>
      ))}
    </Select>
  );
};

/*
 * (1) default export is normal component ready to use (2) withSelect is HOC used to predefine common props
 */
const Styled: React.FC<Props> = Component;

export default memo(Styled);

// export const withSelectAdd = (props: Props) =>
//   memo(withCombinedProps(Styled, props));
