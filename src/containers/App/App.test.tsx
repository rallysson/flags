import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";
import { FLAGS } from "../Home";

import { createBrowserHistory } from "history";
import { App } from "./App";

const mocks = [
  {
    request: {
      query: FLAGS,
    },
    result: {
      data: {
        Flag: [
          {
            emoji: "🇦🇫",
            svgFile: "https://restcountries.eu/data/afg.svg",
            emojiUnicode: "U+1F1E6 U+1F1EB",
            country: {
              name: "Afghanistan",
            },
          },
        ],
      },
    },
  },
];

test("Verifica se o header e o app são renderizados", () => {
  const history = createBrowserHistory();
  const { getByTestId, findByTestId } = render(
    <MockedProvider mocks={mocks}>
      <Router history={history}>
        <App />
      </Router>
    </MockedProvider>
  );

  getByTestId("app");
  getByTestId("header");
  findByTestId("flags_container");
});
