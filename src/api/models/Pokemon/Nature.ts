import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * Natures influence how a Pokémon's stats grow.
 * See {@link http://bulbapedia.bulbagarden.net/wiki/Nature Bulbapedia} for greater detail.
 */
export interface Nature extends BaseResource, ResourceWithNames {
  /**
   * The stat decreased by 10% in Pokémon with this nature.
   */
  decreased_stat: NamedAPIResource;
  /**
   * The stat increased by 10% in Pokémon with this nature.
   */
  increased_stat: NamedAPIResource;
  /**
   * The flavor hated by Pokémon with this nature.
   */
  hates_flavor: NamedAPIResource;
  /**
   * The flavor liked by Pokémon with this nature.
   */
  liked_flavor: NamedAPIResource;
  /**
   * A list of Pokéathlon stats this nature effects and how much it effects them.
   */
  pokeathlon_stat_changes: NatureStatChange[];
  /**
   * A list of battle styles and how likely a Pokémon with this nature is to use them in
   * the Battle Palace or Battle Tent.
   */
  move_battle_style_preferences: MoveBattleStylePreference[];
}

/**
 * Described in https://pokeapi.co/docs/v2#naturestatchange
 */
export interface NatureStatChange {
  /**
   * The amount of change.
   */
  max_change: number;
  /**
   * The stat being affected.
   */
  pokeathlon_stat: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#movebattlestylepreference
 */
export interface MoveBattleStylePreference {
  /**
   * Chance of using the move, in percent, if HP is under one half.
   */
  low_hp_preference: number;
  /**
   * Chance of using the move, in percent, if HP is over one half.
   */
  high_hp_preference: number;
  /**
   * The move battle style.
   */
  move_battle_style: NamedAPIResource;
}
