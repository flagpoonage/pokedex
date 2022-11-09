import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

/**
 * Flavors determine whether a Pokémon will benefit or suffer from eating a berry
 * based on their nature. Check out {@link http://bulbapedia.bulbagarden.net/wiki/Flavor Bulbapedia}
 * for greater detail.
 */
export interface BerryFlavor extends BaseResource, ResourceWithNames {
  /**
   * A list of the berries with this flavor.
   */
  berries: FlavorBerryMap[];
  /**
   * The contest type that correlates with this berry flavor.
   */
  contest_type: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#flavorberrymap
 */
export interface FlavorBerryMap {
  /**
   * How powerful the referenced flavor is for this berry.
   */
  potency: number;
  /**
   * The berry with the referenced flavor.
   */
  berry: NamedAPIResource;
}
