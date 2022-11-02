import Select, { Option } from '.';
import React from 'react';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import type { SelectProps } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const tags: SelectProps['options'] = [];
for (let i = 10; i < 36; i++) {
  tags.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const DemoTags = (props) => (
  <Select
    {...props}
    mode="tags"
    style={{ width: '100%' }}
    tokenSeparators={[',']}
    options={tags}
    placeholder="Comma separated tags"
  />
);
const DemoOne = (props) => (
  <Select
    {...props}
    style={{ margin: '0 0.875rem 0.875rem 0', width: '10rem' }}
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    filterOption={(input, option) =>
      (option?.label + '').toLowerCase().includes(input.toLowerCase())
    }
    suffixIcon={<FontAwesomeIcon icon={faUser} />}
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />
);
const DemoMultiple = (props) => (
  <Select
    {...props}
    style={{ margin: '0 0.875rem 0.875rem 0', width: '100%' }}
    mode="multiple"
    placeholder="select countries"
    defaultValue={['usa', 'china']}
    optionLabelProp="label"
  >
    <Option value="usa" label="USA">
      <div className="demo-option-label-item">
        <span role="img" aria-label="USA">
          🇺🇸
        </span>
        USA (美国)
      </div>
    </Option>
    <Option value="china" label="China">
      <div className="demo-option-label-item">
        <span role="img" aria-label="China">
          🇨🇳
        </span>
        China (中国)
      </div>
    </Option>
    <Option value="japan" label="Japan">
      <div className="demo-option-label-item">
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan (日本)
      </div>
    </Option>
    <Option value="korea" label="Korea">
      <div className="demo-option-label-item">
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea (韩国)
      </div>
    </Option>
  </Select>
);

export default (props) => (
  <CanvasContainer bgcolor="light" textcolor="dark">
    <CanvasStoryPadding>
      <DemoOne {...props} />
      <DemoMultiple {...props} />
      <DemoTags {...props} />
    </CanvasStoryPadding>
  </CanvasContainer>
);

export const code = ``;
