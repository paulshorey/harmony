import React, { forwardRef } from 'react';
import { useTheme, ClassNames } from '@emotion/react';
import colorscheme_dataset from '@ps/ui/helpers/colorscheme_dataset';
import style_string_from_props_and_variants from '@ps/ui/helpers/style_string_from_props_and_variants';
import { styleProps } from '@ps/ui/types/styles';

export default (Component: any, componentName: string, variants: any) =>
  forwardRef(({ className = '', ...props }: styleProps, ref: any) => {
    props.theme = useTheme();
    const styleString = style_string_from_props_and_variants({
      props,
      variants,
    });
    const colorScheme = colorscheme_dataset(props);
    // cleanup after styles have generated
    delete props.theme;
    return (
      <ClassNames>
        {({ css, cx }) => (
          <Component
            ref={ref}
            {...colorScheme}
            className={cx(
              props.componentName || '',
              componentName || '',
              className,
              css(styleString)
            )}
            {...props}
          />
        )}
      </ClassNames>
    );
  });
