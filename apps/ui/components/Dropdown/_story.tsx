import React from 'react';
import useShowStorybookCode from '@ps/ui/hooks/useShowStorybookCode';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import { withBlock } from '@ps/ui/components/Block';
import { withInline } from '@ps/ui/components/Inline';
import CanvasStoryPadding from '@ps/ui/.storybook/components/CanvasStoryPadding';
import Dropdown from '.';

export default function () {
  useShowStorybookCode();
  const Link = withInline({
    role: 'menuitem',
    className: 'notARealLink',
  });
  const Nav = withBlock({
    as: 'nav',
    ss: `
      display: flex;
      margin: 1rem 1rem 0.9rem 1rem;
      > * {
        display: inline-block;
        margin-right: 1rem;
        &:nth-child(3) {
          margin-right: 0;
        }
      }
    `,
  });
  const ToggleMenu = withBlock({
    componentName: 'ToggleMenu',
    textcolor: 'light',
    bggradient: 'purple',
    ss: `
      border-radius: 0.5rem;
      padding: 1rem;
      margin: 0;
      .notARealLink {
        display: block;
        padding: 0.25rem 0.5rem;
        margin: 0;
        color: inherit;
      }
    `,
  });
  return (
    <CanvasContainer bgcolor="light" textcolor="dark">
      <CanvasStoryPadding>
        <Nav>
          <Dropdown
            textcolor="cta"
            left
            menu={
              <ToggleMenu>
                <Link>align_left</Link>
                <Link>two</Link>
                <Link>three</Link>
                <Link>four</Link>
                <Link>five</Link>
              </ToggleMenu>
            }
          >
            align left
          </Dropdown>
          <Dropdown
            menu={
              <ToggleMenu>
                <div>
                  <Link>align_center</Link>
                  <Link>two</Link>
                  <Link>three</Link>
                  <Link>four</Link>
                  <Link>five</Link>
                </div>
              </ToggleMenu>
            }
          >
            align center
          </Dropdown>
          <Dropdown
            textcolor="accent"
            right
            menu={
              <ToggleMenu>
                <div>
                  <Link>align_right</Link>
                  <Link>two</Link>
                  <Link>three</Link>
                  <Link>four</Link>
                  <Link>five</Link>
                </div>
              </ToggleMenu>
            }
          >
            align right
          </Dropdown>
        </Nav>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </CanvasStoryPadding>
    </CanvasContainer>
  );
}

export const code = `import Inline from '@ps/ui/components/Inline';

Text can be used <Inline as="h2" {...props}> as h2</Inline>, or <Inline as="code" {...props}> as &lt;code&gt;</Inline>, or as any other HTML container element. By default, it's a span.
`;