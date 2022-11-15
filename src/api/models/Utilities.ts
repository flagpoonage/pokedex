import { VersionGroup } from './Games/VersionGroup';

/**
 * A base resource that all pokedex resources inherit from,
 * not part of the API docs, but inherited by most models
 */
export interface BaseResource {
  /**
   * The identifier for this resource.
   */
  id: number;
  /**
   * The name for this resource.
   */
  name: string;
}

/**
 * A type not specified in the API but inherited by many other types
 * which contain a list of their names in different languages.
 */
export interface ResourceWithNames {
  /**
   * The name of this resource listed in different languages.
   */
  names: Name[];
}

export function getEnglishName(resource: ResourceWithNames, fallback?: string) {
  return (
    resource.names.find((a) => a.language.name === 'en')?.name ?? fallback ?? ''
  );
}

/**
 * A type not specified in the API but inherited by many other types
 * which contains a list of their descriptions in different languages.
 */
export interface ResourceWithDescriptions {
  /**
   * The description of this resource listed in different languages.
   */
  descriptions: Description[];
}

/**
 * Described in https://pokeapi.co/docs/v2#apiresource
 */
export interface APIResource {
  /**
   * The URL of the referenced resource
   */
  url: string;
}

/**
 * Described in https://pokeapi.co/docs/v2#namedapiresource
 */
export interface NamedAPIResource extends APIResource {
  /**
   * The name of the referenced resource
   */
  name: string;
}

/**
 * A named resource described in https://pokeapi.co/docs/v2#namedapiresource
 * with a numeric ID extracted from the resource URL
 */
export interface NamedAPIResourceWithID extends NamedAPIResource {
  /**
   * The ID of the referenced resource extracted from the resource URL
   */
  id: number;
}

/**
 * Extracts the resource ID from the listing URL if available. When not
 * available, the ID will be returned as `0`.
 * @param listing The named resource listing
 * @returns A new copy of the listing with a numeric ID attached
 */
export function extractNamedAPIResourceWithID(
  listing: NamedAPIResource
): NamedAPIResourceWithID {
  const id = Number(listing.url.match(/^.+\/(.+)\/$/)?.[1]);

  return {
    ...listing,
    id: isNaN(id) ? 0 : id,
  };
}

/**
 * Returns a type assertion boolean for whether the provided value is
 * a type of {@link NamedAPIResource}
 * @param value Any value
 * @returns A type asserting boolean
 */
export function isNamedAPIResource(value: unknown): value is NamedAPIResource {
  if (!value || Array.isArray(value) || typeof value !== 'object') {
    return false;
  }

  const v = value as NamedAPIResource;

  return typeof v.name === 'string' && typeof v.url === 'string';
}

/**
 * Described in https://pokeapi.co/docs/v2#name
 */
export interface Name {
  /**
   * The localized name for an API resource in a specific language
   */
  name: string;
  /**
   * The language this name is in
   */
  language: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#verboseeffect
 */
export interface VerboseEffect {
  /**
   * The localized effect text for an API resource in a specific language.
   */
  effect: string;
  /**
   * The localized effect text in brief.
   */
  short_effect: string;
  /**
   * The language this effect is in.
   */
  language: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#effect
 */
export interface Effect {
  /**
   * The localized effect text for an API resource in a specific language.
   */
  effect: string;

  /**
   * The language this effect is in.
   */
  language: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#versiongameindex
 */
export interface VersionGameIndex {
  /**
   * The internal id of an API resource within game data.
   */
  game_index: number;
  /**
   * The version relevent to this game index.
   */
  version: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#versiongroupflavortext
 */
export interface VersionGroupFlavorText {
  /**
   * The localized name for an API resource in a specific language.
   */
  text: string;
  /**
   * The language this name is in.
   */
  language: NamedAPIResource;
  /**
   * The version group which uses this flavor text.
   */
  version_group: VersionGroup;
}

/**
 * Described in https://pokeapi.co/docs/v2#generationgameindex
 */
export interface GenerationGameIndex {
  /**
   * The internal id of an API resource within game data.
   */
  game_index: number;
  /**
   * The generation relevent to this game index.
   */
  generation: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#machineversiondetail
 */
export interface MachineVersionDetail {
  /**
   * The machine that teaches a move from an item.
   */
  machine: APIResource;
  /**
   * The version group of this specific machine.
   */
  version_group: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#description
 */
export interface Description {
  /**
   * The localized description for an API resource in a specific language.
   */
  description: string;
  /**
   * The language this name is in.
   */
  language: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#flavortext
 */
export interface FlavorText {
  /**
   * The localized flavor text for an API resource in a specific language.
   * Note that this text is left unprocessed as it is found in game files.
   * This means that it contains special characters that one might want to
   * replace with their visible decodable version. Please check out
   * {@link https://github.com/veekun/pokedex/issues/218#issuecomment-339841781 this}
   * issue to find out more.
   */
  flavor_text: string;
  /**
   * The language this name is in.
   */
  language: NamedAPIResource;
  /**
   * The game version this flavor text is extracted from.
   */
  version: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#encounter
 */
export interface Encounter {
  /**
   * The lowest level the Pokémon could be encountered at.
   */
  min_level: number;
  /**
   * The highest level the Pokémon could be encountered at.
   */
  max_level: number;
  /**
   * A list of condition values that must be in effect for this encounter to occur.
   */
  condition_values: NamedAPIResource[];
  /**
   * Percent chance that this encounter will occur.
   */
  chance: number;
  /**
   * The method by which this encounter happens.
   */
  method: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#versionencounterdetail
 */
export interface VersionEncounterDetail {
  /**
   * The game version this encounter happens in.
   */
  version: NamedAPIResource;
  /**
   * The total percentage of all encounter potential.
   */
  max_chance: number;
  /**
   * A list of encounters and their specifics.
   */
  encounter_details: Encounter[];
}
