import { BaseResource, FlavorText, NamedAPIResource } from '../Utilities';

/**
 * Super contest effects refer to the effects of moves when used in super contests.
 */
export interface SuperContestEffect extends Pick<BaseResource, 'id'> {
  /**
   * The level of appeal this super contest effect has.
   */
  appeal: number;
  /**
   * The flavor text of this super contest effect listed in different languages.
   */
  flavor_text_entries: FlavorText[];
  /**
   * A list of moves that have the effect when used in super contests.
   */
  moves: NamedAPIResource[];
}
