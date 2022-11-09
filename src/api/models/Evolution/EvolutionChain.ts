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

/**
 * Described in https://pokeapi.co/docs/v2#chainlink
 */
export interface ChainLink {
  /**
   * Whether or not this link is for a baby Pokémon. This would only ever be
   * true on the base link.
   */
  is_baby: boolean;
  /**
   * The Pokémon species at this point in the evolution chain.
   */
  species: PokemonSpecies;
  /**
   * All details regarding the specific details of the referenced Pokémon
   * species evolution.
   */
  evolution_details: EvolutionDetail;
  /**
   * A List of chain objects.
   */
  evolves_to: ChainLink;
}

/**
 * Described in https://pokeapi.co/docs/v2#evolutiondetail
 */
export interface EvolutionDetail {
  /**
   * The item required to cause evolution this into Pokémon species.
   */
  item: NamedAPIResource;
  /**
   * The type of event that triggers evolution into this Pokémon species.
   */
  trigger: EvolutionTrigger;
  /**
   * The id of the gender of the evolving Pokémon species must be in order to
   * evolve into this Pokémon species.
   */
  gender: number;
  /**
   * The item the evolving Pokémon species must be holding during the evolution
   * trigger event to evolve into this Pokémon species.
   */
  held_item: NamedAPIResource;
  /**
   * The move that must be known by the evolving Pokémon species during the
   * evolution trigger event in order to evolve into this Pokémon species.
   */
  known_move: NamedAPIResource;
  /**
   * The evolving Pokémon species must know a move with this type during the
   * evolution trigger event in order to evolve into this Pokémon species.
   */
  known_move_type: NamedAPIResource;
  /**
   * The location the evolution must be triggered at.
   */
  location: NamedAPIResource;
  /**
   * The minimum required level of the evolving Pokémon species to evolve into
   * this Pokémon species.
   */
  min_level: number;
  /**
   * The minimum required level of happiness the evolving Pokémon species to
   * evolve into this Pokémon species.
   */
  min_hapiness: number;
  /**
   * The minimum required level of beauty the evolving Pokémon species to evolve
   * into this Pokémon species.
   */
  min_beauty: number;
  /**
   * The minimum required level of affection the evolving Pokémon species to
   * evolve into this Pokémon species.
   */
  min_affection: number;
  /**
   * Whether or not it must be raining in the overworld to cause evolution this
   * Pokémon species.
   */
  needs_overworld_rain: boolean;
  /**
   * The Pokémon species that must be in the players party in order for the
   * evolving Pokémon species to evolve into this Pokémon species.
   */
  party_species: NamedAPIResource;
  /**
   * The player must have a Pokémon of this type in their party during the
   * evolution trigger event in order for the evolving Pokémon species to evolve
   * into this Pokémon species.
   */
  party_type: NamedAPIResource;
  /**
   * The required relation between the Pokémon's Attack and Defense stats.
   * - 1 means Attack > Defense.
   * - 0 means Attack = Defense.
   * - -1 means Attack < Defense.
   */
  relative_physical_stats: number;
  /**
   * The required time of day. Day or night.
   */
  time_of_day: string;
  /**
   * Pokémon species for which this one must be traded.
   */
  trade_species: NamedAPIResource;
  /**
   * Whether or not the 3DS needs to be turned upside-down as this Pokémon
   * levels up.
   */
  turn_upside_down: boolean;
}
