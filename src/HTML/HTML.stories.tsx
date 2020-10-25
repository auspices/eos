import React from "react";
import { States } from "storybook-states";
import { HTML, HTMLProps } from "./HTML";

export default { title: "HTML", component: HTML };

export const Default = () => (
  <States<HTMLProps>
    states={[
      {
        html: `
          <h1>H1 Headline</h1>
          <h2>H2 Headline</h2>
          <h3>H3 Headline</h3>
          <h4>H4 Headline</h4>
          <p>I’m <em>of the opinion</em> that they use <strong>no <em>inert</em> material.</strong> All their equipment and instruments are alive, in some form or other.</p>
          <p>They don’t construct or build at all. The idea of making is foreign to them. They utilize existing forms. Even their ships—</p>
          <ol>
            <li>first</li>
            <li>second</li>
            <li>third</li>
          </ol>
          <ul>
            <li>first</li>
            <li>second</li>
            <li>third</li>
          </ul>
          <hr />
          <pre><code>this is a code block</code></pre>
          <blockquote>This is a block quote</blockquote>
        `,
      },
      {
        children: (
          <>
            <h1>H1 Headline</h1>
            <h2>H2 Headline</h2>
            <h3>H3 Headline</h3>
            <h4>H4 Headline</h4>
            <p>
              I’m <em>of the opinion</em> that they use{" "}
              <strong>
                no <em>inert</em> material.
              </strong>{" "}
              All their equipment and instruments are alive, in some form or
              other.
            </p>
            <p>
              They don’t construct or build at all. The idea of making is
              foreign to them. They utilize existing forms. Even their ships—
            </p>
            <ol>
              <li>first</li>
              <li>second</li>
              <li>third</li>
            </ol>
            <ul>
              <li>first</li>
              <li>second</li>
              <li>third</li>
            </ul>
            <hr />
            <pre>
              <code>this is a code block</code>
            </pre>
            <blockquote>This is a block quote</blockquote>
          </>
        ),
      },
    ]}
  >
    {(props) => <HTML {...props} />}
  </States>
);
