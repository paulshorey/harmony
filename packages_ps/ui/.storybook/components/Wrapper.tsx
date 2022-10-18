import Box from '@ps/ui/components/content/Box';

const Wrapper = ({ children, ...props }) => (
  <Box
    {...props}
    className={'bgGradient'}
    color="purple"
    ss={(theme) => `
      position:absolute;
      top:0;
      left:0;
      width:100%;
      padding: 3.5rem 5vw 100px;

      em {
        color: gold;
        font-style: inherit;
        font-weight: 700;
      }

      h3 {
        font-weight: 600;
        font-size: 1rem;
      }

      .gold {
        color: gold;
        font-weight: 600;
      }
      a, .orange {
        color: orange;
      }
      svg {
        display: inline;
        color: var(--color-cta-text);
        padding-left: 0;
        margin-left: 0;
        height: 12px;
        width: auto;
        position: relative;
        top: 2px;
      }
      h6 {
        margin-bottom: 0;
      }
      strong {
        color: white;
        white-space: nowrap;
        font-weight: 700;
      }
      b {
        color: white;
        white-space: nowrap;
        font-weight: 600;
      }
      p {
        font-size: 0.9em;
        margin: 0.25rem 0 1.25rem;
      }
      code {
        margin: 0;
        opacity: 1;
        font-size: 0.9em;
        line-height: 1.2em;
        color: gold;
        font-weight: 700;
      }
    `}
    ssIframe={`
      p span {
        display: block;
        white-space: nowrap;
      }
    `}
  >
    <Box
      ss={`
      max-width: 1000px;
      margin: 0 auto;
    `}
    >
      {children}
    </Box>
  </Box>
);

export default Wrapper;
