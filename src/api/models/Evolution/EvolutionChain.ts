import { PokemonSpecies } from '../Pokemon/PokemonSpecies';
import { BaseResource, NamedAPIResource } from '../Utilities';
import { EvolutionTrigger } from './EvolutionTrigger';

/**
 * Evolution chains are essentially family trees. They start with the lowest
 * stage within a family and detail evolution conditions for each as well as
 * Pokémon they can evolve into up through the hierarchy.
 */
export interface EvolutionChain extends Pick<BaseResource, 'id'> {
  /**
   * The item that a Pokémon would be holding when mating that would trigger
   * the egg hatching a baby Pokémon rather than a basic Pokémon.
   */
  baby_trigger_item: NamedAPIResource;
  /**
   * The base chain link object. Each link contains evolution details for a
   * Pokémon in the chain. Each link references the next Pokémon in the natural
   * evolution order.
   */
  chain: ChainLink;
}

export interface ChainLink {
  is_baby: boolean;
  species: PokemonSpecies;
  evolution_details: EvolutionDetail;
  evolves_to: ChainLink;
}

export interface EvolutionDetail {
  item: NamedAPIResource;
  trigger: EvolutionTrigger;
  gender: number;
  held_item: NamedAPIResource;
  known_move: NamedAPIResource;
  known_move_type: NamedAPIResource;
  location: NamedAPIResource;
  min_level: number;
  min_hapiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species: NamedAPIResource;
  party_type: NamedAPIResource;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: NamedAPIResource;
  turn_upside_down: boolean;
}
