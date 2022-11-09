import { BaseResource, NamedAPIResource } from '../Utilities';

/**
 * Machines are the representation of items that teach moves to Pokémon. They vary from
 * version to version, so it is not certain that one specific TM or HM corresponds to a
 * single Machine.
 */
export interface Machine extends Pick<BaseResource, 'id'> {
  /**
   * The TM or HM item that corresponds to this machine.
   */
  item: NamedAPIResource;
  /**
   * The move that is taught by this machine.
   */
  move: NamedAPIResource;
  /**
   * The version group that this machine applies to.
   */
  version_group: NamedAPIResource;
}
