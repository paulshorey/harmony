import { css } from '@emotion/react';
import React, { useState } from 'react';
import withCSS from 'src/helpers/withCSS';
import { fieldPropsType } from 'src/types';

import Modal from '../../../ui/atoms/Modal';
import Input from '../Input';
import styles from './styles';

export type Props = fieldPropsType & {
  options?: Record<string, any> | Record<string, never> | undefined;
  value?: string;
};

const CloudinaryImage: React.FC<Props> = ({
  onChange = () => {},
  name,
  options,
  value,
  ...props
}) => {
  const placeholder = 'Copy/paste URL here, or click below...';
  const [isMediaLibraryOpen, set_isMediaLibraryOpen] = useState(false);
  return (
    <div css={withCSS({ label: 'CloudinaryImage', styles })}>
      <Input
        {...props}
        name={name}
        onChange={(e) => {
          onChange({ target: { name, value: e.target.value } });
        }}
        placeholder={placeholder}
        type={'text'}
        value={value}
      />
      <div
        onClick={() => {
          set_isMediaLibraryOpen(true);
          setTimeout(() => {
            // @ts-ignore
            const ml = window.cloudinary.createMediaLibrary(
              {
                api_key: '217518935941831',
                cloud_name: 'spiral',
                inline_container: `#MediaLibraryContainer_${name}`,
              },
              {
                // @ts-ignore // See https://cloudinary.com/documentation/media_library_widget
                insertHandler(data) {
                  (data.assets as Record<string, string>[]).forEach(
                    (asset, i) => {
                      // temporarily, limit to one image per field
                      if (i > 0) {
                        return;
                      }
                      // modify the field value
                      onChange &&
                        onChange({
                          target: {
                            name,
                            value: asset.url,
                          },
                        });
                    }
                  );
                  set_isMediaLibraryOpen(false);
                },
              }
            );
            ml.show({
              folder: { path: options?.CloudinaryImageFolder || '' },
            });
          }, 1000);
        }}
        role="button"
        tabIndex={0}
      >
        <img
          alt="click to choose"
          css={css`
            height: 120px;
            width: auto;
            border: solid 1px #efefef;
          `}
          src={value}
        />
      </div>
      <Modal
        isOpen={isMediaLibraryOpen}
        label="FormFieldCloudinaryModal"
        onClose={() => {
          set_isMediaLibraryOpen(false);
        }}
        variant="cloudinary"
      >
        <div id={`MediaLibraryContainer_${name}`} />
      </Modal>
    </div>
  );
};

export default CloudinaryImage;
