export interface Location {
  latitude: number;
  longitude: number;
}

export interface Region {
  name: string;
}

export interface Subregion {
  name: string;
  region: Region;
}

export interface OfficialLanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface OtherAcronym {
  name: string;
}

export interface OtherName {
  name: string;
}

export interface RegionalBloc {
  name: string;
  acronym: string;
  otherAcronyms: OtherAcronym[];
  otherNames: OtherName[];
}

export interface Flag {
  emoji: string;
  emojiUnicode: string;
  svgFile: string;
}

export interface TopLevelDomain {
  name: string;
}

export interface CallingCode {
  name: string;
}

export interface AlternativeSpelling {
  name: string;
}

export interface Country {
  name: string;
  nativeName: string;
  alpha2Code: string;
  alpha3Code: string;
  area: number;
  population: number;
  populationDensity: number;
  capital: string;
  demonym: string;
  gini: number;
  location: Location;
  numericCode: string;
  subregion: Subregion;
  officialLanguages: OfficialLanguage[];
  currencies: Currency[];
  regionalBlocs: RegionalBloc[];
  flag: Flag;
  topLevelDomains: TopLevelDomain[];
  callingCodes: CallingCode[];
  alternativeSpellings: AlternativeSpelling[];
}
