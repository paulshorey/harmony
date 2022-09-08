import React from 'react';
import withCSS from 'src/helpers/withCSS';

import Checkbox from '../../../manage/atoms/Checkbox';
import Input from '../../../manage/atoms/Input';
import styles from './styles';

export type Props = {
  categoryId?: number;
  categoryIdChange: (categoryId: number) => void;
  partnered?: boolean;
  partneredChange: (partnered: boolean) => void;
  query?: string;
  queryChange: (query: string) => void;
};

const SearchControls: React.FC<Props> = ({
  categoryId = 0,
  categoryIdChange,
  partnered = false,
  partneredChange,
  query = '',
  queryChange,
}) => {
  return (
    <div css={withCSS({ label: 'SearchControls', styles })}>
      <Input
        name="query"
        onChange={(e) => {
          queryChange && queryChange(e.target.value);
        }}
        placeholder="Search by name or EIN"
        type={'text'}
        value={query}
      />
      <Input
        name="categoryId"
        onChange={(e) => {
          categoryIdChange &&
            categoryIdChange(e.target.value ? Number(e.target.value) : 0);
        }}
        placeholder="Search by name or EIN"
        type={'number'}
        value={categoryId}
      />
      <div>
        Partners only:
        <Checkbox
          name="partnered"
          onChange={(e) => {
            partneredChange && partneredChange(e.target.value);
          }}
          value={partnered}
        />
      </div>
    </div>
  );
};

export default SearchControls;
