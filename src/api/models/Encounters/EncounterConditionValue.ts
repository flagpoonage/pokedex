import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * Encounter condition values are the various states that an encounter
 * condition can have, i.e., time of day can be either day or night.
 */
export interface EncounterConditionValue
  extends BaseResource,
    ResourceWithNames {
  /**
   * The condition this encounter condition value pertains to.
   */
  condition: NamedAPIResource;
}
