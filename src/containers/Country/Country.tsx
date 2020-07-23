import React, { ReactElement, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

import { FormUpdateCountry } from "./FormUpdateCountry";
import defautImage from "../../assets/default-image.png";
import mapPin from "../../assets/icons/map-pin.svg";
import edit from "../../assets/icons/edit.svg";

import { Country as ICountry, TopLevelDomain } from "./types";

import "./country.scss";

interface CountryData {
  Country: ICountry[];
}

const QUERY_COUNTRY = gql`
  query($name: String!) {
    Country(name: $name) {
      name
      nativeName
      alpha2Code
      alpha3Code
      area
      population
      populationDensity
      capital
      demonym
      gini
      location {
        latitude
        longitude
      }
      numericCode
      subregion {
        name
        region {
          name
        }
      }
      officialLanguages {
        iso639_1
        iso639_2
        name
        nativeName
      }
      currencies {
        name
        symbol
      }
      regionalBlocs {
        name
        acronym
        otherAcronyms {
          name
        }
        otherNames {
          name
        }
      }
      flag {
        emoji
        emojiUnicode
        svgFile
      }
      topLevelDomains {
        name
      }
      callingCodes {
        name
      }
      alternativeSpellings {
        name
      }
    }
  }
`;

const formatTopLevelDomains = (topLevelDomains: TopLevelDomain[]) =>
  topLevelDomains.map((domain) => domain.name).join(", ");

function Country(): ReactElement {
  const { country: countryName } = useParams();
  const [editing, setEditing] = useState(false);
  const [modifiedValues, setModifiedValues] = useState({});

  const { data } = useQuery<CountryData, { name: string }>(QUERY_COUNTRY, {
    variables: { name: countryName },
  });
  const country = data ? { ...data.Country[0], ...modifiedValues } : undefined;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEditing(false);
  }

  return (
    <div className="country">
      {country && (
        <div>
          <div className="country__imageContainer">
            <img
              className="country__image"
              src={country.flag.svgFile || defautImage}
              alt={country.name}
            />
          </div>
          <div className="country__description">
            {!editing && (
              <button
                className="country__edit"
                onClick={() => setEditing(true)}
              >
                <img src={edit} alt="Edit icon" />
                Editar
              </button>
            )}

            <span className="country__name">{country.name}</span>
            {editing ? (
              <FormUpdateCountry
                updateModifiedValues={setModifiedValues}
                country={country}
                onSubmit={handleSubmit}
              />
            ) : (
              <>
                <div>
                  <img src={mapPin} alt="Map pin icon" />{" "}
                  {country.capital || "-"}
                </div>
                <div>
                  <span>Area: {country.area} km²</span>
                </div>
                <div>
                  Top-level domains:{" "}
                  <span>{formatTopLevelDomains(country.topLevelDomains)}</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export { Country };
