import { PokemonSpecies } from '@pkdx-api/models/Pokemon/PokemonSpecies';
import { getEnglishName } from '@pkdx-api/models/Utilities';
import { CacheViewReceiveProps } from '@pkdx-components/CacheViews';
import { useTitle } from '@pkdx-utils/useTitle';

export function PokemonTitle({
  value: pokemon,
}: CacheViewReceiveProps<PokemonSpecies>) {
  useTitle(getEnglishName(pokemon));
  return null;
}
