import React, { ReactElement } from "react";
import { Country } from "./types";

interface FormValues {
  capital?: string;
  area?: string;
  topLevelDomains?: string;
}

interface Props {
  country: Country;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
  updateModifiedValues(value: any): void;
}

function FormUpdateCountry({
  onSubmit,
  updateModifiedValues,
}: Props): ReactElement {
  function handleChangeDomains(e: React.ChangeEvent<HTMLInputElement>) {
    e.persist();

    updateModifiedValues((state: FormValues) => ({
      ...state,
      topLevelDomains: e.target.value
        .split(",")
        .map((el: string) => ({ name: el })),
    }));
  }

  return (
    <form className="form__edit" onSubmit={onSubmit}>
      <label htmlFor="capital">Capital:</label>
      <br />
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.persist();

          updateModifiedValues((state: FormValues) => ({
            ...state,
            capital: e.target.value,
          }));
        }}
        name="capital"
        type="text"
        id="capital"
      />
      <br />
      <label htmlFor="area">Area:</label>
      <br />
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.persist();
          updateModifiedValues((state: FormValues) => ({
            ...state,
            area: e.target.value,
          }));
        }}
        name="area"
        type="text"
        id="area"
      />
      <br />
      <label htmlFor="topLevelDomains">
        Top-level domains (separated by commas):
      </label>
      <br />
      <input
        onChange={handleChangeDomains}
        type="text"
        id="topLevelDomains"
        name="topLevelDomains"
      />
      <button type="submit">Salvar</button>
    </form>
  );
}

export { FormUpdateCountry };
