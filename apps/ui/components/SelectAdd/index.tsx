import React, { memo, useState } from 'react';
import withCombinedProps from '@ps/ui/hooks/withCombinedProps';
import { PlusOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import SelectAnt, { Props as SelectAntProps } from '@ps/ui/components/Select';

export type Props = {
  /**
   * Input element placeholder - when typing a new value.
   */
  addPlaceholder?: string;
  /**
   * Required. Instead of options (which contain value/label pairs), this componet takes a simple array of strings. The value and label are the same. Numbers may also be supported in the near future.
   */
  values: string[];
} & Omit<SelectAntProps, 'options'>;

/**
 * Select component (includes multi-select and type tags functionality). Plus input to add a custom value. Powered by Ant Design component.
 */
export const Component = (props: Props) => {
  const { values, addPlaceholder, ...rest } = props;
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
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    set_addNewValue(event.target.value);
  };

  const addItem = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!addNewValue) {
      return;
    }
    set_items([...items, addNewValue]);
    set_addNewValue('');
  };

  return (
    <SelectAnt
      dropdownRender={(menu) => (
        <>
          {menu}
          <span
            style={{ display: 'flex', paddingLeft: '1px', paddingTop: '4px' }}
          >
            <Input
              placeholder={addPlaceholder || 'Add new item...'}
              value={addNewValue}
              onChange={onNameChange}
              onPressEnter={addItem}
            />
            <Button type="text" icon={<PlusOutlined />} onClick={addItem} />
          </span>
        </>
      )}
      options={items.map((item) => ({ label: item, value: item }))}
      {...rest}
    />
  );
};

/*
 * (1) default export is normal component ready to use (2) withSelect is HOC used to predefine common props
 */
const Styled: React.FC<Props> = Component;

export default memo(Styled);

export const withSelectAdd = (props: Props) =>
  memo(withCombinedProps(Styled, props));
