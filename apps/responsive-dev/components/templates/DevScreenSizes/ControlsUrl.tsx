import React, { memo } from 'react';
import { css } from '@emotion/react';
import SelectAdd from '@ps/ui/components/SelectAdd';
import InputGroup from '@ps/ui/components/InputGroup';
import controlsState, { controlsStateType } from 'state/controlsState';

const style = css`
  width: 100%;
  > * {
    width: 100%;
  }
`;

// eslint-disable-next-line
const DevTemplate = ({}: {}) => {
  const controls = controlsState((state) => state as controlsStateType);
  const host = controls.hosts[controls.hostIndex];

  return (
    <InputGroup ss={style}>
      <SelectAdd
        ss="min-width:12rem"
        size="xs"
        placeholder={'Select host'}
        addPlaceholder={'Test new site'}
        values={controls.hosts}
        value={host}
        onAdd={(value) => {
          controls.set_host(value);
        }}
        onChange={(value) => {
          controls.set_host(value);
        }}
        onValuesRemove={(value) => {
          controls.remove_host(value);
        }}
      />
      <SelectAdd
        ss="min-width:12rem"
        size="xs"
        placeholder={'Select path'}
        addPlaceholder={'Test new path'}
        values={controls.paths}
        value={controls.paths[controls.pathIndex]}
        onAdd={(value) => {
          controls.set_path(value);
        }}
        onChange={(value) => {
          controls.set_path(value);
        }}
        onValuesRemove={(value) => {
          controls.remove_path(value);
        }}
      />
    </InputGroup>
  );
};
export default memo(DevTemplate);
