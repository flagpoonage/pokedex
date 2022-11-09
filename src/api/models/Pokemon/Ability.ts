import {
  BaseResource,
  Effect,
  Name,
  NamedAPIResource,
  ResourceWithNames,
  VerboseEffect,
} from '../Utilities';

/**
 * Abilities provide passive effects for Pokémon in battle or in the overworld.
 * Pokémon have multiple possible abilities but can have only one ability at a
 * time. Check out {@link http://bulbapedia.bulbagarden.net/wiki/Ability Bulbapedia}
 * for greater detail.
 */
export interface Ability extends BaseResource, ResourceWithNames {
  /**
   * Whether or not this ability originated in the main series of the video games.
   */
  is_main_series: boolean;
  /**
   * The generation this ability originated in.
   */
  generation: NamedAPIResource;
  /**
   * The effect of this ability listed in different languages.
   */
  effect_entries: VerboseEffect[];
  /**
   * The list of previous effects this ability has had across version groups.
   */
  effect_changes: AbilityEffectChange[];
  /**
   * The flavor text of this ability listed in different languages.
   */
  flavor_text_entries: AbilityFlavorText[];
  /**
   * A list of Pokémon that could potentially have this ability.
   */
  pokemon: AbilityPokemon[];
}

/**
 * Described in https://pokeapi.co/docs/v2#abilityeffectchange
 */
export interface AbilityEffectChange {
  /**
   * The previous effect of this ability listed in different languages.
   */
  effect_entries: Effect[];
  /**
   * The version group in which the previous effect of this ability originated.
   */
  version_group: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#abilityflavortext
 */
export interface AbilityFlavorText {
  /**
   * The localized name for an API resource in a specific language.
   */
  flavor_text: string;
  /**
   * The language this text resource is in.
   */
  language: NamedAPIResource;
  /**
   * The version group that uses this flavor text.
   */
  version_group: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#abilitypokemon
 */
export interface AbilityPokemon {
  /**
   * Whether or not this a hidden ability for the referenced Pokémon.
   */
  is_hidden: boolean;
  /**
   * Pokémon have 3 ability 'slots' which hold references to possible abilities
   * they could have. This is the slot of this ability for the referenced pokemon.
   */
  slot: number;
  /**
   * The Pokémon this ability could belong to.
   */
  pokemon: NamedAPIResource;
}
