const theme = {
  colors: {
    link: 'blue',
  },
  fonts: {
    helvetica: 'Roboto,Helvetica,sans-serif'
  },
  breakpoints: {
    /*
     * Filled below...
     *
     * Usage (window less than 710px wide):
     *
     wrapper: theme => css`
       ${theme.breakpoints.xsmall.max} {
         display:block;
         width: ${theme.breakpoints.xsmall.num/2}px;
       }
     `,
     *
     * Or (window greater than or equal to 710px wide):
     *
     wrapper: theme => css`
       ${theme.breakpoints.xsmall.min} {
         font-size: 30px;
       }
     `,
     *
    */
  }
};

const width = {
  xxsmall: { num: 520 },
  xsmall: { num: 710 },
  small: { num: 924 },
  medium: { num: 1080 },
  large: { num: 1130 },
  xlarge: { num: 1440 },
  xxlarge: { num: 1920 }
};
for (let size in width) {
  let obj = {};
  obj.num = width[size].num;
  obj.str = obj.num + 'px';
  obj.max = `@media(max-width: ${obj.num}px)`;
  obj.min = `@media(min-width: ${obj.num + 1}px)`;
  theme.breakpoints[size] = obj;
}

export default theme;
