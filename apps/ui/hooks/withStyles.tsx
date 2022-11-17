import React, { forwardRef } from 'react';
import { useTheme, ClassNames } from '@emotion/react';
import colorscheme_dataset from '@ps/ui/helpers/colorscheme_dataset';
import { styleProps } from '@ps/ui/types/styles';
import style_string_from_props from '@ps/ui/helpers/style_string_from_props';
import style_string_from_variants from '@ps/ui/helpers/style_string_from_variants';

export default (Component: any, componentName: string, variants: any) =>
  forwardRef(({ ...props }: styleProps, ref: any) => {
    props.theme = useTheme();
    const inlineStyles = style_string_from_props({
      props,
    });
    const variantStyles = style_string_from_variants({
      props,
      variants,
    });
    const colorScheme = colorscheme_dataset(props);
    // cleanup after styles have been generated and applied
    delete props.theme;
    return (
      <ClassNames>
        {({ css, cx }) => (
          <Component
            {...props}
            {...colorScheme}
            ref={ref}
            className={cx(
              css(`&.${componentName} {
  ${variantStyles};
}
`), // first - less specific
              props.componentName || '', // custom className label passed to component instance from app
              componentName || '', // default className label from component constructor (in this library)
              props.className, // custom classNames passed to the component
              css(`&.${componentName} {
  ${inlineStyles};
}
`) // last - more specific
            )}
          />
        )}
      </ClassNames>
    );
  });
