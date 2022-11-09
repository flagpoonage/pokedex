import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * Berries can be soft or hard. Check out
 * {@link Bulbapedia for greater detail.
 */
export interface BerryFirmness extends BaseResource, ResourceWithNames {
  /**
   * A list of the berries with this firmness.
   */
  berries: NamedAPIResource[];
}
