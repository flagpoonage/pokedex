import {
  APIResource,
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * Stats determine certain aspects of battles. Each Pokémon has a value for each stat
 * which grows as they gain levels and can be altered momentarily by effects in battles.
 */
export interface Stat extends BaseResource, ResourceWithNames {
  /**
   * ID the games use for this stat.
   */
  game_index: number;
  /**
   * Whether this stat only exists within a battle.
   */
  is_battle_only: boolean;
  /**
   * A detail of moves which affect this stat positively or negatively.
   */
  affecting_moves: MoveStatAffectSets;
  /**
   * A detail of natures which affect this stat positively or negatively.
   */
  affecting_natures: NatureStatAffectSets;
  /**
   * A list of characteristics that are set on a Pokémon when its highest base stat
   * is this stat.
   */
  characteristics: APIResource[];
  /**
   * The class of damage this stat is directly related to
   */
  move_damage_class: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#movestataffectsets
 */
export interface MoveStatAffectSets {
  /**
   * A list of moves and how they change the referenced stat.
   */
  increase: MoveStatAffect;
  /**
   * A list of moves and how they change the referenced stat.
   */
  decrease: MoveStatAffect;
}

/**
 * Described in https://pokeapi.co/docs/v2#movestataffect
 */
export interface MoveStatAffect {
  /**
   * The maximum amount of change to the referenced stat.
   */
  change: number;
  /**
   * The move causing the change.
   */
  move: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#naturestataffectsets
 */
export interface NatureStatAffectSets {
  /**
   * A list of natures and how they change the referenced stat.
   */
  increase: NamedAPIResource[];
  /**
   * A list of nature sand how they change the referenced stat.
   */
  decrease: NamedAPIResource[];
}
