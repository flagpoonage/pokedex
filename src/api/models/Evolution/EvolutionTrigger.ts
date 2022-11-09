import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * Evolution triggers are the events and conditions that cause a Pokémon to evolve.
 * Check out {@link http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution Bulbapedia}
 * for greater detail.
 */
export interface EvolutionTrigger extends BaseResource, ResourceWithNames {
  /**
   * A list of pokemon species that result from this evolution trigger.
   */
  pokemon_species: NamedAPIResource[];
}
