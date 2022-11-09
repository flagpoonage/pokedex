import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * Versions of the games, e.g., Red, Blue or Yellow.
 */
export interface Version extends BaseResource, ResourceWithNames {
  /**
   * The version group this version belongs to.
   */
  version_group: NamedAPIResource;
}
