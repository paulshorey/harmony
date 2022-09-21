import { css } from '@emotion/react';
import Box from '@ps/ui/src/components/common/atoms/Box';
import Button from '@ps/ui/src/components/common/atoms/Button';
import Flex from '@ps/ui/src/components/common/atoms/Flex';
import Loading from '@ps/ui/src/components/common/atoms/Loading';
import MenuDivider from '@ps/ui/src/components/common/molecules/MenuDivider';
import React, { useState } from 'react';

import Modal from '../../../ui/atoms/Modal';
import { useGetCategories } from '../../hooks';
import AddCategory from '../AddCategory';
import EditCategory from '../EditCategory';

const ListOfCategories = () => {
  const { data, loading } = useGetCategories();
  const [editId, set_editId] = useState(0);
  const [addNew, set_addNew] = useState(false);
  // const theme = useTheme();
  if (loading) {
    return <Loading />;
  }
  if (!data) {
    return <p>No data</p>;
  }
  return (
    <>
      <Box>
        <div>
          <Button
            label="Add new category"
            onClick={() => {
              set_addNew(true);
            }}
          />
        </div>
        <p>&nbsp;</p>
        <MenuDivider />

        <Modal
          isOpen={!!addNew}
          onClose={() => {
            set_addNew(false);
          }}
          variant="noX"
        >
          <AddCategory
            onSave={() => {
              set_addNew(false);
            }}
          />
        </Modal>
        <Modal
          isOpen={!!editId}
          onClose={() => {
            set_editId(0);
          }}
          variant="noX"
        >
          <EditCategory
            editId={editId}
            onSave={() => {
              set_editId(0);
            }}
          />
        </Modal>
        {data.map((item) => (
          <Flex key={item.id} mb="30px" mt="15px">
            <div>
              <b>{item.name}</b>{' '}
              <sup>
                ({item.type?.name} {item.type?.id})
              </sup>
            </div>
            <div
              onClick={() => {
                set_editId(item.id);
              }}
              role="button"
              tabIndex={0}
            >
              <img
                alt="background"
                css={css`
                  border: solid 1px #efefef;
                `}
                height="90"
                src={item.background}
              />
            </div>
            <div>
              <Button
                label="Edit"
                onClick={() => {
                  set_editId(item.id);
                }}
              />
            </div>
          </Flex>
        ))}
      </Box>
    </>
  );
};

// ListOfCategories.layout = withLayout(ProfileLayout, {
//   breadcrumbs: breadcrumbs.profile.photo,d
// });

export default ListOfCategories;
