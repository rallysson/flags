import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import defautImage from "../../assets/default-image.png";
import mapPin from "../../assets/icons/map-pin.svg";

import { Flag } from "../../containers/Home/Home";

import "./flagCard.scss";

interface Props {
  flag: Flag;
}

function FlagCard({ flag }: Props): ReactElement {
  return (
    <section className="card">
      <Link to={`flags/${flag.country.name}`}>
        <div className="card__imageContainer">
          <img
            className="card__image"
            src={flag.svgFile || defautImage}
            alt={flag.country.name}
          />
        </div>

        <div className="card__descriptionContainer">
          <b>{flag.country.name}</b>

          <div>
            <img src={mapPin} alt="Map pin icon" />{" "}
            {flag.country.capital || "-"}
          </div>
        </div>
      </Link>
    </section>
  );
}

export { FlagCard };
