import { BaseResource, NamedAPIResource } from '../Utilities';

/**
 * Contest types are categories judges used to weigh a Pokémon's condition in
 * Pokémon contests. Check out {@link http://bulbapedia.bulbagarden.net/wiki/Contest_condition Bulbapedia}
 * for greater detail.
 */
export interface ContestType extends BaseResource {
  /**
   * The berry flavor that correlates with this contest type.
   */
  berry_flavor: NamedAPIResource;
  /**
   * The name of this contest type listed in different languages.
   */
  names: ContestName[];
}

/**
 * Described in https://pokeapi.co/docs/v2#contestname
 */
export interface ContestName {
  /**
   * The name for this contest.
   */
  name: string;
  /**
   * The color associated with this contest's name.
   */
  color: string;
  /**
   * The language that this name is in.
   */
  language: NamedAPIResource;
}
