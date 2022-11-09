import {
  BaseResource,
  NamedAPIResource,
  ResourceWithDescriptions,
  ResourceWithNames,
} from '../Utilities';

/**
 * Methods by which Pokémon can learn moves.
 */
export interface MoveLearnMethod
  extends BaseResource,
    ResourceWithNames,
    ResourceWithDescriptions {
  /**
   * A list of version groups where moves can be learned through this method.
   */
  version_groups: NamedAPIResource[];
}
