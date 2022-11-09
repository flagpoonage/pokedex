import {
  BaseResource,
  GenerationGameIndex,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * Locations that can be visited within the games. Locations make up sizable portions of
 * regions, like cities or routes.
 */
export interface Location extends BaseResource, ResourceWithNames {
  /**
   * The region this location can be found in.
   */
  region: NamedAPIResource;
  /**
   * A list of game indices relevent to this location by generation.
   */
  game_indices: GenerationGameIndex[];
  /**
   * Areas that can be found within this location.
   */
  areas: NamedAPIResource[];
}
