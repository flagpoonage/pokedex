import { BaseResource, NamedAPIResource, VersionGameIndex } from '../Utilities';

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
  /**
   * A list of abilities this Pokémon could potentially have.
   */
  abilities: PokemonAbility[];
  /**
   * A list of forms this Pokémon can take on.
   */
  forms: NamedAPIResource[];
  /**
   * A list of game indices relevent to Pokémon item by generation.
   */
  game_indices: VersionGameIndex[];
  /**
   * A list of items this Pokémon may be holding when encountered.
   */
  held_items: PokemonHeldItem[];
  /**
   * A link to a list of location areas, as well as encounter details pertaining to
   * specific versions.
   */
  location_area_encounters: string;
  /**
   * A list of moves along with learn methods and level details pertaining to specific
   * version groups.
   */
  moves: PokemonMove[];
  /**
   * A list of details showing types this pokémon had in previous generations
   */
  past_types: PokemonTypePast[];
  /**
   * A set of sprites used to depict this Pokémon in the game. A visual representation of
   * the various sprites can be found at
   * {@link https://github.com/PokeAPI/sprites#sprites PokeAPI/sprites}
   */
  sprites: PokemonSprites;
  /**
   * The species this Pokémon belongs to.
   */
  species: NamedAPIResource;
  /**
   * A list of base stat values for this Pokémon.
   */
  stats: PokemonStat[];
  /**
   * A list of details showing types this Pokémon has.
   */
  types: PokemonType[];
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

/**
 * Described in https://pokeapi.co/docs/v2#pokemontype
 */
export interface PokemonType {
  /**
   * The order the Pokémon's types are listed in.
   */
  slot: number;
  /**
   * The type the referenced Pokémon has.
   */
  type: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#pokemonformtype
 */
export interface PokemonFormType {
  /**
   * The order the Pokémon's types are listed in.
   */
  slot: number;
  /**
   * The type the referenced Form has.
   */
  type: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#pokemontypepast
 */
export interface PokemonTypePast {
  /**
   * The last generation in which the referenced pokémon had the listed types.
   */
  generation: NamedAPIResource;
  /**
   * The types the referenced pokémon had up to and including the listed generation.
   */
  types: PokemonType[];
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

/**
 * Described in https://pokeapi.co/docs/v2#pokemonmove
 */
export interface PokemonMove {
  /**
   * The move the Pokémon can learn.
   */
  move: NamedAPIResource;
  /**
   * The details of the version in which the Pokémon can learn the move.
   */
  version_group_details: PokemonMoveVersion[];
}

/**
 * Described in https://pokeapi.co/docs/v2#pokemonmoveversion
 */
export interface PokemonMoveVersion {
  /**
   * The method by which the move is learned.
   */
  move_learn_method: NamedAPIResource;
  /**
   * The version group in which the move is learned.
   */
  version_group: NamedAPIResource;
  /**
   * The minimum level to learn the move.
   */
  level_learned_at: number;
}

/**
 * Described in https://pokeapi.co/docs/v2#pokemonstat
 */
export interface PokemonStat {
  /**
   * The stat the Pokémon has.
   */
  stat: NamedAPIResource;
  /**
   * The effort points (EV) the Pokémon has in the stat.
   */
  effort: number;
  /**
   * The base value of the stat.
   */
  base_stat: number;
}

/**
 * Described in https://pokeapi.co/docs/v2#pokemonsprites
 */
export interface PokemonSprites {
  /**
   * The default depiction of this Pokémon from the front in battle.
   */
  front_default: string;
  /**
   * The shiny depiction of this Pokémon from the front in battle.
   */
  front_shiny: string;
  /**
   * The female depiction of this Pokémon from the front in battle.
   */
  front_female: string;
  /**
   * The shiny female depiction of this Pokémon from the front in battle.
   */
  front_shiny_female: string;
  /**
   * The default depiction of this Pokémon from the back in battle.
   */
  back_default: string;
  /**
   * The shiny depiction of this Pokémon from the back in battle.
   */
  back_shiny: string;
  /**
   * The female depiction of this Pokémon from the back in battle.
   */
  back_female: string;
  /**
   * The shiny female depiction of this Pokémon from the back in battle.
   */
  back_shiny_female: string;
}
