import useShowStorybookCode from '../../../hooks/useShowStorybookCode';
import CanvasContainer from '@ps/ui/.storybook/components/CanvasContainer';
import Svg from '.';

export default function (props: any) {
  useShowStorybookCode();
  return (
    <CanvasContainer bgcolor="light">
      <Svg {...props} ss="width:120px;" />
    </CanvasContainer>
  );
}

export const code = `
  <Svg svg="sparkle1" textcolor="purple" />
`;
