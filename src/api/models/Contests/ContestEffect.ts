import { BaseResource, Effect, FlavorText } from '../Utilities';

/**
 * Contest effects refer to the effects of moves when used in contests.
 */
export interface ContestEffect extends Pick<BaseResource, 'id'> {
  /**
   * The base number of hearts the user of this move gets.
   */
  appeal: number;
  /**
   * The base number of hearts the user's opponent loses.
   */
  jam: number;
  /**
   * The result of this contest effect listed in different languages.
   */
  effect_entries: Effect[];
  /**
   * The flavor text of this contest effect listed in different languages.
   */
  flavor_text_entries: FlavorText[];
}
