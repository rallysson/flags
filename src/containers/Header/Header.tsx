import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import "./header.scss";

function Header(): ReactElement {
  return (
    <header data-testid="header" className="header">
      <div className="header__container">
        <Link to="/">
          <h1 className="header__title">Flags</h1>
        </Link>
      </div>
    </header>
  );
}

export { Header };
