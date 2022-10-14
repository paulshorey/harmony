import { component$, useClientEffect$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead, useLocation } from "@builder.io/qwik-city";
import styles from "./page3.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const loc = useLocation();

  const state = useStore({
    count: 0,
    number: 20,
  });

  useClientEffect$(({ cleanup }) => {
    // mount
    cleanup(() => {
      // unmount
    });
  });

  return (
    <>
      <div
        style={{
          "--state": `${state.count * 0.1}`,
        }}
        class={{
          host: true,
          pride: loc.query["pride"] === "true",
        }}
      >
        {Array.from({ length: state.number }, (_, i) => (
          <div
            key={i}
            class={{
              square: true,
              odd: i % 2 === 0,
            }}
            style={{ "--index": `${i + 1}` }}
          />
        )).reverse()}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Page3",
};
