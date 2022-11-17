import Select, { Option, OptionProps } from '.';
import React from 'react';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import useShowStorybookCode from '@ps/ui/hooks/useShowStorybookCode';

const style = {
  margin: '0 0.875rem 0.875rem 0',
  minWidth: '10rem',
  width: '45%',
};

const DemoNav = (props) => (
  <Select
    {...props}
    style={style}
    placeholder="select countries"
    optionLabelProp="label"
  >
    <Option value="usa" label="USA">
      <h3>🇺🇸 USA (美国)</h3>
    </Option>
    <Option value="china" label="China">
      <h3> 🇨🇳 China (中国)</h3>
    </Option>
    <Option value="japan" label="Japan">
      <h3>🇯🇵 Japan (日本)</h3>
    </Option>
    <Option value="korea" label="Korea">
      <h3>🇰🇷 Korea (韩国)</h3>
    </Option>
  </Select>
);

const DemoOne = (props) => (
  <Select
    {...props}
    style={style}
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

const tags: OptionProps[] = [];
for (let i = 10; i < 36; i++) {
  tags.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
    children: i.toString(36) + i,
  });
}
const DemoTags = (props) => (
  <Select
    {...props}
    mode="tags"
    style={{ ...style, width: '100%' }}
    tokenSeparators={[',']}
    options={tags}
    placeholder="Comma separated tags"
  />
);
const DemoMultiple = (props) => (
  <Select
    {...props}
    style={{ ...style, width: '100%' }}
    mode="multiple"
    placeholder="select countries"
    defaultValue={['usa', 'china']}
    optionLabelProp="label"
  >
    <Option value="usa" label="USA">
      <div>
        <span role="img" aria-label="USA">
          🇺🇸
        </span>
        USA (美国)
      </div>
    </Option>
    <Option value="china" label="China">
      <div>
        <span role="img" aria-label="China">
          🇨🇳
        </span>
        China (中国)
      </div>
    </Option>
    <Option value="japan" label="Japan">
      <div>
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan (日本)
      </div>
    </Option>
    <Option value="korea" label="Korea">
      <div>
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea (韩国)
      </div>
    </Option>
  </Select>
);

export default (props) => {
  useShowStorybookCode();
  return (
    <CanvasContainer>
      <CanvasStoryPadding>
        <DemoNav {...props} />
        <DemoOne {...props} />
        <DemoMultiple {...props} />
        <DemoTags {...props} />
      </CanvasStoryPadding>
      <CanvasStoryPadding bgcolor="light" textcolor="dark">
        <DemoNav {...props} />
        <DemoOne {...props} />
        <DemoMultiple {...props} />
        <DemoTags {...props} />
      </CanvasStoryPadding>
    </CanvasContainer>
  );
};

export const code = ``;
