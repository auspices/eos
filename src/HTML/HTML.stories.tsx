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
          <blockquote>Here is a time-table of my daily acts. I rise at 7.18; am inspired from 10.23 to 11.47. I lunch at 12.11 and leave the table at 12.14. A healthy ride on horse-back round my domain follows from 1.19 pm to 2.53 pm. Another bout of inspiration from 3.12 to 4.7 pm. From 5 to 6.47 pm various occupations (fencing, reflection, immobility, visits, contemplation, dexterity, natation, etc.)</blockquote>
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
