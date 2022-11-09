import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * Conditions which affect what pokemon might appear in the wild, e.g., day or night.
 */
export interface EncounterCondition extends BaseResource, ResourceWithNames {
  /**
   * A list of possible values for this encounter condition.
   */
  values: NamedAPIResource[];
}
