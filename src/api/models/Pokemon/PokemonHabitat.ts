import {
  BaseResource,
  NamedAPIResource,
  ResourceWithNames,
} from '../Utilities';

export interface PokemonHabitat extends BaseResource, ResourceWithNames {
  pokemon_species: NamedAPIResource;
}
