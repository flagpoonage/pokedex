import { BaseResource, NamedAPIResource, VersionGameIndex } from './Utilities';

/**
 * Pokémon are the creatures that inhabit the world of the Pokémon games. They can
 * be caught using Pokéballs and trained by battling with other Pokémon. Each
 * Pokémon belongs to a specific species but may take on a variant which makes it
 * differ from other Pokémon of the same species, such as base stats, available
 * abilities and typings. See {@link http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species) Bulbapedia}
 * for greater detail.
 */
export interface Pokemon extends BaseResource {
  /**
   * The base experience gained for defeating this Pokémon.
   */
  base_experience: number;
  /**
   * The height of this Pokémon in decimetres.
   */
  height: number;
  /**
   * Set for exactly one Pokémon used as the default for each species.
   */
  is_default: boolean;
  /**
   * Order for sorting. Almost national order, except families are grouped together.
   */
  order: number;
  /**
   * The weight of this Pokémon in hectograms.
   */
  weight: number;

  abilities: PokemonAbility[];

  forms: NamedAPIResource[];

  game_indices: VersionGameIndex[];

  held_items: PokemonHeldItem[];
}

export interface PokemonAbility {
  /**
   * Whether or not this is a hidden ability.
   */
  is_hidden: boolean;
  /**
   * The slot this ability occupies in this Pokémon species.
   */
  slot: number;
  /**
   * The ability the Pokémon may have.
   */
  ability: NamedAPIResource;
}

export interface PokemonType {
  /**
   * Whether or not this is a hidden ability.
   */
  is_hidden: boolean;
  /**
   * The slot this ability occupies in this Pokémon species.
   */
  slot: number;
  /**
   * The type the referenced Pokémon has.
   */
  type: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#pokemonhelditem
 */
export interface PokemonHeldItem {
  /**
   * The item the referenced Pokémon holds.
   */
  item: NamedAPIResource;
  /**
   * The details of the different versions in which the item is held.
   */
  version_details: PokemonHeldItemVersion;
}

/**
 * Described in https://pokeapi.co/docs/v2#pokemonhelditemversion
 */
export interface PokemonHeldItemVersion {
  /**
   * The version in which the item is held.
   */
  version: NamedAPIResource;
  /**
   * How often the item is held.
   */
  rarity: number;
}
