import { AbilityEffectChange } from '../Pokemon/Ability';
import { Type } from '../Pokemon/Type';
import {
  APIResource,
  BaseResource,
  MachineVersionDetail,
  NamedAPIResource,
  ResourceWithNames,
  VerboseEffect,
} from '../Utilities';
import { MoveDamageClass } from './MoveDamageClass';

/**
 * Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move
 * each turn. Some moves (including those learned by Hidden Machine) can be used
 * outside of battle as well, usually for the purpose of removing obstacles or
 * exploring new areas.
 */
export interface Move extends BaseResource, ResourceWithNames {
  /**
   * The percent value of how likely this move is to be successful.
   */
  accuracy: number;
  /**
   * The percent value of how likely it is this moves effect will happen.
   */
  effect_chance: number;
  /**
   * Power points. The number of times this move can be used.
   */
  pp: number;
  /**
   * A value between -8 and 8. Sets the order in which moves are executed during
   * battle. See {@link https://bulbapedia.bulbagarden.net/wiki/Priority Bulbapedia}
   * for greater detail.
   */
  priority: number;
  /**
   * The base power of this move with a value of 0 if it does not have a base power.
   */
  power: number;
  /**
   * A detail of normal and super contest combos that require this move.
   */
  contest_combos: ContestComboSets;
  /**
   * The type of appeal this move gives a Pokémon when used in a contest.
   */
  contest_type: NamedAPIResource;
  /**
   * The effect the move has when used in a contest.
   */
  content_effect: APIResource;
  /**
   * The type of damage the move inflicts on the target, e.g. physical.
   */
  damage_class: MoveDamageClass;
  /**
   * The effect of this move listed in different languages.
   */
  effect_entries: VerboseEffect[];
  /**
   * The list of previous effects this move has had across version groups of
   * the games.
   */
  effect_changed: AbilityEffectChange[];
  /**
   * List of Pokemon that can learn the move
   */
  learned_by_pokemon: NamedAPIResource;
  /**
   * The flavor text of this move listed in different languages.
   */
  flavor_text_entries: MoveFlavorText[];
  /**
   * The generation in which this move was introduced.
   */
  generation: NamedAPIResource;
  /**
   * A list of the machines that teach this move.
   */
  machines: MachineVersionDetail[];
  /**
   * Metadata about this move
   */
  meta: MoveMetaData;
  /**
   * A list of move resource value changes across version groups of the game.
   */
  past_values: PastMoveStatValues[];
  /**
   * A list of stats this moves effects and how much it effects them.
   */
  stat_changes: MoveStatChange[];
  /**
   * The effect the move has when used in a super contest.
   */
  super_contest_effect: APIResource;
  /**
   * The type of target that will receive the effects of the attack.
   */
  target: NamedAPIResource;
  /**
   * The elemental type of this move.
   */
  type: Type;
}

/**
 * Described in https://pokeapi.co/docs/v2#contestcombosets
 */
export interface ContestComboSets {
  /**
   * A detail of moves this move can be used before or after, granting
   * additional appeal points in contests.
   */
  normal: ContestComboDetail;
  /**
   * A detail of moves this move can be used before or after, granting
   * additional appeal points in super contests.
   */
  super: ContestComboDetail;
}

/**
 * Described in https://pokeapi.co/docs/v2#contestcombodetail
 */
export interface ContestComboDetail {
  /**
   * A list of moves to use before this move.
   */
  use_before: NamedAPIResource;
  /**
   * A list of moves to use after this move.
   */
  use_after: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#moveflavortext
 */
export interface MoveFlavorText {
  /**
   * The localized flavor text for an api resource in a specific language.
   */
  flavor_text: string;
  /**
   * The language this name is in.
   */
  language: NamedAPIResource;
  /**
   * The version group that uses this flavor text.
   */
  version_group: NamedAPIResource;
}

export interface MoveMetaData {
  /**
   * The status ailment this move inflicts on its target.
   */
  ailment: NamedAPIResource;
  /**
   * The category of move this move falls under, e.g. damage or ailment.
   */
  category: NamedAPIResource;
  /**
   * The minimum number of times this move hits. Null if it always only hits once.
   */
  min_hits: number;
  /**
   * The maximum number of times this move hits. Null if it always only hits once.
   */
  max_hits: number;
  /**
   * The minimum number of turns this move continues to take effect. Null if it
   * always only lasts one turn.
   */
  min_turns: number | null;
  /**
   * The maximum number of turns this move continues to take effect. Null if it
   * always only lasts one turn.
   */
  max_turns: number | null;
  /**
   * HP drain (if positive) or Recoil damage (if negative), in percent of damage done.
   */
  drain: number;
  /**
   * The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP.
   */
  healing: number;
  /**
   * Critical hit rate bonus.
   */
  crit_rate: number;
  /**
   * The likelihood this attack will cause an ailment.
   */
  ailment_chance: number;
  /**
   * The likelihood this attack will cause the target Pokémon to flinch.
   */
  flinch_chance: number;
  /**
   * The likelihood this attack will cause a stat change in the target Pokémon.
   */
  stat_chance: number;
}

/**
 * Described in https://pokeapi.co/docs/v2#movestatchange
 */
export interface MoveStatChange {
  /**
   * The amount of change.
   */
  change: number;
  /**
   * The stat being affected.
   */
  stat: NamedAPIResource;
}

/**
 * Described in https://pokeapi.co/docs/v2#pastmovestatvalues
 */
export interface PastMoveStatValues {
  /**
   * The percent value of how likely this move is to be successful.
   */
  accuracy: number;
  /**
   * The percent value of how likely it is this moves effect will take effect.
   */
  effect_chance: number;
  /**
   * The base power of this move with a value of 0 if it does not have a
   * base power.
   */
  power: number;
  /**
   * Power points. The number of times this move can be used.
   */
  pp: number;
  /**
   * The effect of this move listed in different languages.
   */
  effect_entries: VerboseEffect[];
  /**
   * The elemental type of this move.
   */
  type: NamedAPIResource;
  /**
   * The version group in which these move stat values were in effect.
   */
  version_group: NamedAPIResource;
}
