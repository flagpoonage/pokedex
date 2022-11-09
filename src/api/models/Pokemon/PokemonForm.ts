import { PokemonFormType } from './Pokemon';
import { BaseResource, Name, NamedAPIResource } from '../Utilities';

/**
 * Some Pokémon may appear in one of multiple, visually different forms.
 * These differences are purely cosmetic. For variations within a Pokémon
 * species, which do differ in more than just visuals, the 'Pokémon' entity
 * is used to represent such a variety.
 */
export interface PokemonForm extends BaseResource {
  /**
   * The order in which forms should be sorted within all forms. Multiple
   * forms may have equal order, in which case they should fall back on
   * sorting by name.
   */
  order: number;
  /**
   * The order in which forms should be sorted within a species' forms.
   */
  form_order: number;
  /**
   * True for exactly one form used as the default for each Pokémon.
   */
  is_default: boolean;
  /**
   * Whether or not this form can only happen during battle.
   */
  is_battle_only: boolean;
  /**
   * Whether or not this form requires mega evolution.
   */
  is_mega: boolean;
  /**
   * The name of this form.
   */
  form_name: string;
  /**
   * The Pokémon that can take on this form.
   */
  pokemon: NamedAPIResource;
  /**
   * A list of details showing types this Pokémon form has.
   */
  types: PokemonFormType[];
  /**
   * A set of sprites used to depict this Pokémon form in the game.
   */
  sprites: PokemonFormSprites;
  /**
   * The version group this Pokémon form was introduced in.
   */
  version_group: NamedAPIResource;
  /**
   * The form specific full name of this Pokémon form, or empty if the
   * form does not have a specific name.
   */
  names: Name[];
  /**
   * The form specific form name of this Pokémon form, or empty if the
   * form does not have a specific name.
   */
  form_names: Name[];
}

/**
 * Described in https://pokeapi.co/docs/v2#pokemonformsprites
 */
export interface PokemonFormSprites {
  /**
   * The default depiction of this Pokémon form from the front in battle.
   */
  front_default: string;
  /**
   * The shiny depiction of this Pokémon form from the front in battle.
   */
  front_shiny: string;
  /**
   * The default depiction of this Pokémon form from the back in battle.
   */
  back_default: string;
  /**
   * The shiny depiction of this Pokémon form from the back in battle.
   */
  back_shiny: string;
}
