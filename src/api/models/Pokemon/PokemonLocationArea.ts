import { NamedAPIResource, VersionEncounterDetail } from '../Utilities';

/**
 * Pokémon Location Areas are ares where Pokémon can be found.
 */
export interface LocationAreaEncounter {
  /**
   * The location area the referenced Pokémon can be encountered in.
   */
  location_area: NamedAPIResource;
  /**
   * A list of versions and encounters with the referenced Pokémon that might happen.
   */
  version_details: VersionEncounterDetail;
}
