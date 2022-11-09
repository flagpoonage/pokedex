import { BaseResource, ResourceWithNames } from './Utilities';

/**
 * Languages for translations of API resource information.
 */
export interface Language extends BaseResource, ResourceWithNames {
  /**
   * Whether or not the games are published in this language.
   */
  official: boolean;
  /**
   * The two-letter code of the country where this language is spoken. Note that it
   * is not unique.
   */
  iso639: string;
  /**
   * The two-letter code of the language. Note that it is not unique.
   */
  iso3166: string;
}
