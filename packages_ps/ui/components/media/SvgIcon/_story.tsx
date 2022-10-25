import useShowStorybookCode from '../../../hooks/useShowStorybookCode';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import SvgIcon from '.';

export default function (props: any) {
  useShowStorybookCode();
  return (
    <CanvasContainer data-color="light" ss="width:120px;">
      <SvgIcon {...props} />
    </CanvasContainer>
  );
}

export const code = `
  <SvgIcon svg="sparkle1" data-color="purple" />
`;
