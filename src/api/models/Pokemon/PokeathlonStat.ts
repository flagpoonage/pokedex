import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons.
 * In Pokéathlons, competitions happen on different courses; one for each of the different
 * Pokéathlon stats. See {@link http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon Bulbapedia}
 * for greater detail.
 */
export interface PokeathlonStat extends BaseResource, ResourceWithNames {
  /**
   * A detail of natures which affect this Pokéathlon stat positively or negatively.
   */
  affecting_natures: NaturePokeathlonStatAffectSets;
}

/**
 * Described in https://pokeapi.co/docs/v2#naturepokeathlonstataffectsets
 */
export interface NaturePokeathlonStatAffectSets {
  /**
   * A list of natures and how they change the referenced Pokéathlon stat.
   */
  increase: NaturePokeathlonStatAffect;
  /**
   * A list of natures and how they change the referenced Pokéathlon stat.
   */
  decrease: NaturePokeathlonStatAffect;
}

/**
 * Described in https://pokeapi.co/docs/v2#naturepokeathlonstataffect
 */
export interface NaturePokeathlonStatAffect {
  /**
   * The maximum amount of change to the referenced Pokéathlon stat.
   */
  max_change: number;
  /**
   * The nature causing the change.
   */
  nature: NamedAPIResource;
}
