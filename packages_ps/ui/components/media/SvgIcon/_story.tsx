import useShowStorybookCode from '../../../hooks/useShowStorybookCode';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import SvgIcon from '.';

export default function (props: any) {
  useShowStorybookCode();
  return (
    <CanvasContainer bgColor="light">
      <SvgIcon {...props} ss="width:120px;" />
    </CanvasContainer>
  );
}

export const code = `
  <SvgIcon svg="sparkle1" textColor="purple" />
`;
