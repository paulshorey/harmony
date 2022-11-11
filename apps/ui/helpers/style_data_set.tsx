import { styleProps } from '@ps/ui/types/styles';

/*
 * The name of the component. Unique per component. When looking in the browser Dev Tools, know which div was generated by which component.
 */
type ComponentName = styleProps['componentName'];
type Props = styleProps;
type Output = {
  'className'?: string;
  'componentName'?: string;
  'data-bgcolor'?: string;
  'data-bggradient'?: string;
  'data-textcolor'?: string;
  'data-textgradient'?: string;
  'data-colorscheme'?: string;
};

/**
 * Modify data- attributes so CSS can "Cascade" (add light/dark colors based on parents and grandparents)
 */
export default (componentName: ComponentName, props: Props): Output => {
  const {
    componentName: componentNameProp,
    bgcolor,
    bggradient,
    textcolor,
    textgradient,
  } = props;
  const dataProps = {} as Output;
  /*
   * Add className specificity
   */
  if (!dataProps.componentName) {
    dataProps.componentName = componentName;
  }
  dataProps.className =
    (props.className || '') + ' ' + (componentNameProp || componentName);
  /*
   * Color Scheme
   */
  if (bgcolor || bggradient) {
    dataProps['data-bgcolor'] = bgcolor || bggradient;
    if (bggradient) {
      dataProps['data-bggradient'] = bggradient;
    }
  }
  if (textcolor || textgradient) {
    dataProps['data-textcolor'] = textcolor || textgradient;
    if (textgradient) {
      dataProps['data-textgradient'] = textgradient;
    }
  }
  if (dataProps['data-textcolor'] === 'light') {
    dataProps['data-colorscheme'] = 'dark';
  } else if (dataProps['data-textcolor'] === 'dark') {
    dataProps['data-colorscheme'] = 'light';
  } else if (dataProps['data-bgcolor'] === 'light') {
    dataProps['data-colorscheme'] = 'light';
  } else if (dataProps['data-bgcolor'] === 'dark') {
    dataProps['data-colorscheme'] = 'dark';
  } else if (dataProps['data-bggradient'] === 'light') {
    dataProps['data-colorscheme'] = 'light';
  } else if (dataProps['data-bggradient'] === 'dark') {
    dataProps['data-colorscheme'] = 'dark';
  }
  /*
   * Component name to recognize DOM HTML in browser Dev Tools
   */
  // dataProps['data-component'] = componentNameProp || componentName;
  /*
   * Clean up no longer needed props
   */
  // delete props.componentName;
  // delete props.textcolor;
  // delete props.textgradient;
  // delete props.bgcolor;
  // delete props.bggradient;

  return dataProps;
};

// /*
//  * Optional - (NOT USED CURRENTLY) Imported CSS Modules file. From `index.module.css` in the same folder as your  component. CSS Modules act like classic CSS Stylesheets. They allow the scoped style to reference parent/grandparent DOM elements. See if your current component is rendered inside a "light" or "dark", "purple" or "orange" section. JS can't see that.
//  */
// cssModule?: Record<string, string>;

// /*
//  * Add CSS Modules
//  * Too complicated - can't edit props
//  */
// // if (cssModule) {
// //   if (!props.className) {
// //     props.className = '';
// //   }
// //   if (cssModule.default) {
// //     props.className += ' ' + cssModule.default;
// //   }
// //   if (variant && cssModule[variant]) {
// //     props.className += ' ' + cssModule[variant];
// //   }
// // }