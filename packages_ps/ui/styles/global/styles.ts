const styles = (theme: theme) => ` 

.textColor {
  color: var(--color-text);
}

.textNotice {
  color: var(--color-notice);
}

.bgSolid {
  background: var(--color-bg);
}

.bgGradient {
  background: var(--color-bg);
  background-image: linear-gradient(
    333deg,
    var(--color-bg-lighter) 0%,
    var(--color-bg-darker) 75%
  );
}

.bgGradientSubtle {
  background: var(--color-bg);
  background-image: linear-gradient(
    333deg,
    var(--color-bg-lighter) -25%,
    var(--color-bg) 100%
  );
}

.bgGradientIntense {
  background: var(--color-bg);
  background-image: linear-gradient(
    333deg,
    var(--color-bg-lighter) 0%,
    var(--color-bg-darker) 75%
  );
}

.hoverTilt {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0 50px rgb(17 17 17 / 20%);
    transform: rotate(-1deg) translateY(-2px) scale(1.015);
    // ${theme.mq.sm} {
    //   transform: rotate(-1.5deg) translateY(-2px) scale(1.025);
    // }
  }
}

.borderBottom {
  text-decoration: none;
  padding: 0;
  display: inline-block;
  color: var(--color-cta-darker);
  border-bottom: solid 2px var(--color-cta-darker);
  margin: 0 2px 4px;
  &:hover {
    border-color: transparent;
  }
}

.centerChildren {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    display: inline-block;
  }
}

.textColor {
  color: var(--color-text);
}

.textNotice {
  color: var(--color-notice);
}

.textGradient {
  box-decoration-break: clone;
  color: var(--color-cta-text);
  @supports (--css: variables) {
    background-image: linear-gradient(
      -333deg,
      var(--color-cta-lighter),
      var(--color-cta-darker)
    );
    color: transparent;
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }
}

.textGradientReversed {
  box-decoration-break: clone;
  color: var(--color-cta-text);
  @supports (--css: variables) {
    background-image: linear-gradient(
      333deg,
      var(--color-cta-lighter),
      var(--color-cta-darker)
    );
    color: transparent;
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }
}

.textGradientSubtle {
  box-decoration-break: clone;
  color: var(--color-cta-text);
  @supports (--css: variables) {
    background-image: linear-gradient(
      333deg,
      var(--color-cta-lighter) -50%,
      var(--color-cta-darker) 150%
    );
    color: transparent;
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }
}

.inlineCode {
  padding: 0.25rem;
  white-space: pre;
  font-family: var(--font-family-code);
  font-size: 0.9rem;
  font-style: normal;
  text-decoration: none;
  background: var(--color-bg-lighter);
  border: solid 1px var(--color-bg-darker);
  color: var(--color-bg-text);
  border-radius: 4px;
}

`;

export default styles;
