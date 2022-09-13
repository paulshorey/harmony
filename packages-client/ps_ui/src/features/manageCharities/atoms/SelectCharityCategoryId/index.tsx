import React from 'react';
import withCSS from 'src/helpers/withCSS';
import { fieldPropsType } from 'src/types';
import { Merge } from 'src/types/helpers';

import styles from './styles';

export type Props = Merge<
  fieldPropsType,
  { value: { id: number; name: string } }
>;

const SelectCharityCategoryId: React.FC<Props> = ({
  onChange = () => {},
  value,
  ...props
}) => {
  return (
    <div>
      <input
        {...props}
        css={withCSS({ label: 'SelectCharityCategoryId', styles })}
        onChange={(e) => {
          onChange({
            target: {
              name: e.target.name,
              value: { ...value, id: e.target.value },
            },
          });
        }}
        type={'number'}
        value={value?.id}
      />
      {value?.name}
    </div>
  );
};

export default SelectCharityCategoryId;
