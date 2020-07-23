import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";

import { createBrowserHistory } from "history";
import { Home, FLAGS } from "./";

const flags = [
  {
    emoji: "🇦🇫",
    svgFile: "https://restcountries.eu/data/afg.svg",
    emojiUnicode: "U+1F1E6 U+1F1EB",
    country: {
      name: "Afghanistan",
    },
  },
  {
    emoji: "🇦🇽",
    svgFile: "https://restcountries.eu/data/ala.svg",
    emojiUnicode: "U+1F1E6 U+1F1FD",
    country: {
      name: "Åland Islands",
    },
  },
  {
    emoji: "🇦🇱",
    svgFile: "https://restcountries.eu/data/alb.svg",
    emojiUnicode: "U+1F1E6 U+1F1F1",
    country: {
      name: "Albania",
    },
  },
];

const mocks = [
  {
    request: {
      query: FLAGS,
      variables: {},
    },
    result: {
      data: {
        Flag: flags,
      },
    },
  },
];

test("Verifica o comportamento do Home", async () => {
  const history = createBrowserHistory();
  const { getByTestId } = render(
    <MockedProvider mocks={mocks}>
      <Router history={history}>
        <Home />
      </Router>
    </MockedProvider>
  );

  getByTestId("home");
});
