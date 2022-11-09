import {
  BaseResource,
  GenerationGameIndex,
  MachineVersionDetail,
  Name,
  NamedAPIResource,
  VerboseEffect,
  VersionGroupFlavorText,
} from './Utilities';

/**
 * An item is an object in the games which the player can pick up, keep in their
 * bag, and use in some manner. They have various uses, including healing,
 * powering up, helping catch Pokémon, or to access a new area.
 */
export interface Item extends BaseResource {
  cost: number;
  fling_power: number;
  fling_effect: NamedAPIResource;
  attributes: ItemAttribute[];
  category: NamedAPIResource;
  effect_entries: VerboseEffect[];
  flavor_text_entries: VersionGroupFlavorText[];
  game_indices: GenerationGameIndex[];
  names: Name[];
  sprites: ItemSprites;
  held_by_pokemon: ItemHolderPokemon[];
  machines: MachineVersionDetail[];
}

export interface ItemSprites {
  // TODO:
}

export interface ItemCategory {
  // TODO:
}

export interface ItemAttribute {
  // TODO:
}

export interface ItemFlingEffect {
  // TODO:
}

export interface ItemHolderPokemon {
  // TODO:
}
