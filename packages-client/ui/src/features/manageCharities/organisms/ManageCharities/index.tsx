import { css } from '@emotion/react';
import Box from '@spiral/ui/src/features/common/atoms/Box';
import Button from '@spiral/ui/src/features/common/atoms/Button';
import Flex from '@spiral/ui/src/features/common/atoms/Flex';
import Loading from '@spiral/ui/src/features/common/atoms/Loading';
import MenuDivider from '@spiral/ui/src/features/common/molecules/MenuDivider';
import React, { useEffect, useState } from 'react';

import Modal from '../../../ui/atoms/Modal';
import { useGetCharities } from '../../hooks';
import SearchControls from '../../molecules/SearchControls';
import { GETCharityType } from '../../types';
import AddCharityAsPartner from '../AddCharityAsPartner';
import EditCharity from '../EditPartner';

const ListOfCharities = () => {
  // const { data, loading } = useGetCharities();
  const { getCharities, loading_getCharities } = useGetCharities();
  const [data, set_data] = useState([]);
  const [editId, set_editId] = useState(0);
  const [addEIN, set_addEIN] = useState('');
  const [query, set_query] = useState('');
  const [categoryId, set_categoryId] = useState(0);
  const [partnered, set_partnered] = useState(false);

  useEffect(() => {
    getCharities({ data: {}, qs: { page: 1, size: 20 } }).then((data: any) => {
      set_data(data);
    });
  }, []);

  if (loading_getCharities) {
    return <Loading />;
  }
  if (!data) {
    return <p>No data</p>;
  }

  return (
    <>
      <Box>
        <SearchControls
          categoryId={categoryId}
          categoryIdChange={(categoryId) => {
            getCharities({
              data: {
                categoryId: categoryId || '',
                partnered: false,
                query: '',
              },
              qs: { page: 1, size: 20 },
            }).then((data: any) => {
              set_data(data);
            });
            set_categoryId(categoryId);
          }}
          partnered={partnered}
          partneredChange={(partnered) => {
            getCharities({
              data: { categoryId: '', partnered, query: '' },
              qs: { page: 1, size: 20 },
            }).then((data: any) => {
              set_data(data);
            });
            set_partnered(partnered);
          }}
          query={query}
          queryChange={(query) => {
            getCharities({
              data: { categoryId: '', partnered: false, query },
              qs: { page: 1, size: 20 },
            }).then((data: any) => {
              set_data(data);
            });
            set_query(query);
          }}
        />

        <p>&nbsp;</p>
        <MenuDivider />

        {/*
         * ADD CHARITY AS PARTNER
         */}
        <Modal
          isOpen={!!addEIN}
          onClose={() => {
            set_addEIN('');
          }}
          variant="noX"
        >
          <AddCharityAsPartner
            addEIN={addEIN}
            onCancel={() => {
              set_addEIN('');
            }}
            onSave={() => {
              set_addEIN('');
            }}
          />
        </Modal>

        {/*
         * EDIT PARTNER
         */}
        <Modal
          isOpen={!!editId}
          onClose={() => {
            set_editId(0);
          }}
          variant="noX"
        >
          <EditCharity
            editId={editId}
            onCancel={() => {
              set_editId(0);
            }}
            onSave={() => {
              set_editId(0);
              // refetch query manually because it's actually a mutation
              // it works, but loses the user's scrolled down place on page
              getCharities({
                data: {},
                qs: { page: 1, size: 20 },
              }).then((data: any) => {
                set_data(data);
              });
            }}
          />
        </Modal>

        {/*
         * LIST OF CHARITIES/PARTNERS
         */}
        {(data as GETCharityType[]).map((item) => (
          <Flex key={item.id} mb="30px" mt="15px">
            <div>
              <b>{item.name}</b>{' '}
              <sup>
                ({item.ein} / {item.category.id})
              </sup>
            </div>
            <div
              onClick={() => {
                if (item.partnered) {
                  set_editId(item.id);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <img
                alt="icon"
                css={css`
                  border: solid 1px #efefef;
                `}
                height="90"
                src={item.icon}
              />
            </div>
            {/* {item.partnered ? (
              <div>
                <Button
                  label="Edit"
                  onClick={() => {
                    set_editId(item.id);
                  }}
                />
              </div>
            ) : (
              <div>
                <Button
                  label="Add as partner"
                  onClick={() => {
                    set_addEIN(item.ein);
                  }}
                />
              </div>
            )} */}
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

// ListOfCharities.layout = withLayout(ProfileLayout, {
//   breadcrumbs: breadcrumbs.profile.photo,d
// });

export default ListOfCharities;
