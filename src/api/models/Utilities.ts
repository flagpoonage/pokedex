import { VersionGroup } from './VersionGroup';

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
