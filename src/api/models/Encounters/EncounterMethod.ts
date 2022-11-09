import { BaseResource, ResourceWithNames } from '../Utilities';

/**
 * Methods by which the player might can encounter Pokémon in the wild, e.g.,
 * walking in tall grass. Check out {@link http://bulbapedia.bulbagarden.net/wiki/Wild_Pok%C3%A9mon Bulbapedia}
 * for greater detail.
 */
export interface EncounterMethod extends BaseResource, ResourceWithNames {
  /**
   * A good value for sorting.
   */
  order: number;
}
