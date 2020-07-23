import React, { ReactElement, useState } from "react";
import { useQuery, gql } from "@apollo/client";

import { FlagCard } from "../../components/FlagCard";
import { Loader } from "../../components/Loader";

import "./home.scss";

export interface Country {
  name: string;
  capital: string;
}

export interface Flag {
  emoji: string;
  svgFile: string;
  emojiUnicode: string;
  country: Country;
}

interface FlagData {
  Flag: Flag[];
}

export const FLAGS = gql`
  query {
    Flag {
      emoji
      svgFile
      emojiUnicode
      country {
        name
        capital
      }
    }
  }
`;

function Home(): ReactElement {
  const [search, setSearch] = useState("");
  const { loading, data } = useQuery<FlagData>(FLAGS);
  const flags = data ? data.Flag : [];

  function applySearch() {
    const regexSearch = new RegExp(search, "gi");
    return flags.filter((flag) => regexSearch.test(flag.country.name));
  }
  return (
    <div data-testid="home" className="home">
      {loading ? (
        <Loader className="home__loader" />
      ) : (
        <>
          <input
            placeholder="Search countries"
            className="home__search"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
          <section
            data-testid="flags_container"
            className="home__flagsContainer"
          >
            {applySearch().map((flag) => (
              <FlagCard key={flag.country.name} flag={flag} />
            ))}
          </section>
        </>
      )}
    </div>
  );
}

export { Home };
