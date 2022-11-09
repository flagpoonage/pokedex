import React from 'react';
import { useCachedType } from '@pkdx-api/caches/PokemonCache';
import { NamedAPIResource } from '@pkdx-api/models/Utilities';

interface Props {
  types: NamedAPIResource[];
}

export function PokemonTypesView({ types }: Props) {
  return (
    <div>
      {types.map((typeresource) => (
        <PokemonTypeView key={typeresource.name} name={typeresource.name} />
      ))}
    </div>
  );
}

export function PokemonTypeView({ name }: { name: string }) {
  const type_data = useCachedType(name);

  if (type_data.state === 'loading') {
    return <div>Loading type</div>;
  }

  if (type_data.state === 'error') {
    return <div>{`type load error: ${name}`}</div>;
  }

  return <div>{type_data.data.name}</div>;
}
