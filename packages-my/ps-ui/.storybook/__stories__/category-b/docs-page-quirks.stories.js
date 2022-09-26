export default {
  title: 'Docs Page',
};

export const DocsPage = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>DocsPage Test</div>
            {/* <img alt="Mistica loves react" /> */}
          </div>
          <div>
            <p>
              Browse the stories in the sidebar menu to know the different React
              components in the Mistica catalog and see usage examples for every
              component.
            </p>
            <p>
              Looking for a specific component? You can use the search bar or
              just press '/' and start typing.
            </p>
            <p>
              Mistica comes with builtin support for the different Telefonica
              brand color schemes. Use the theme selector in the toolbar above
              to switch between the supported themes (Telefónica, Movistar, O2,
              Blau and Vivo)
            </p>
            <p>
              For quick prototyping using Mistica components, use the{' '}
              <a href="/playroom">Mistica Playroom</a>. Using the Playroom you
              can simultaneously design across a variety of themes and screen
              sizes, powered by JSX and Mistica components library. It's the
              perfect tool to create quick mock-ups and interactive prototypes
              with real code. It also allows you to share your work with others
              by simply copying the URL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
