import { ItemAttribute } from './ItemAttribute';
import {
  BaseResource,
  GenerationGameIndex,
  MachineVersionDetail,
  Name,
  NamedAPIResource,
  VerboseEffect,
  VersionGroupFlavorText,
} from '../Utilities';

/**
 * An item is an object in the games which the player can pick up, keep in their
 * bag, and use in some manner. They have various uses, including healing,
 * powering up, helping catch Pokémon, or to access a new area.
 */
export interface Item extends BaseResource {
  /**
   * The price of this item in stores.
   */
  cost: number;
  /**
   * The power of the move Fling when used with this item.
   */
  fling_power: number;
  /**
   * The effect of the move Fling when used with this item.
   */
  fling_effect: NamedAPIResource;
  /**
   * A list of attributes this item has.
   */
  attributes: ItemAttribute[];
  /**
   * The category of items this item falls into.
   */
  category: NamedAPIResource;
  /**
   * The effect of this ability listed in different languages.
   */
  effect_entries: VerboseEffect[];
  /**
   * The flavor text of this ability listed in different languages.
   */
  flavor_text_entries: VersionGroupFlavorText[];
  /**
   * A list of game indices relevent to this item by generation.
   */
  game_indices: GenerationGameIndex[];
  /**
   * The name of this item listed in different languages.
   */
  names: Name[];
  /**
   * A set of sprites used to depict this item in the game.
   */
  sprites: ItemSprites;
  /**
   * A list of Pokémon that might be found in the wild holding this item.
   */
  held_by_pokemon: ItemHolderPokemon[];
  /**
   * An evolution chain this item requires to produce a bay during mating.
   */
  machines: MachineVersionDetail[];
}

/**
 * Described in https://pokeapi.co/docs/v2#itemsprites
 */
export interface ItemSprites {
  /**
   * The default depiction of this item.
   */
  default: string;
}

/**
 * Described in https://pokeapi.co/docs/v2#itemholderpokemon
 */
export interface ItemHolderPokemon {
  /**
   * The Pokémon that holds this item.
   */
  pokemon: NamedAPIResource;
  /**
   * The details for the version that this item is held in by the Pokémon.
   */
  version_details: ItemHolderPokemonVersionDetail[];
}

/**
 * Described in https://pokeapi.co/docs/v2#itemholderpokemonversiondetail
 */
export interface ItemHolderPokemonVersionDetail {
  /**
   * How often this Pokémon holds this item in this version.
   */
  rarity: number;
  /**
   * The version that this item is held in by the Pokémon.
   */
  version: NamedAPIResource;
}
