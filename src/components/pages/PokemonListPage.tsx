import { usePokemonListing } from '@pkdx-api/hooks';
import { Link, useParams, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import styles from './style/PokemonListPage.module.css';
import { useTitle } from '@pkdx-utils/useTitle';
import { Pagination } from '@pkdx-components/elements/Pagination';
import { NamedAPIResourceWithID } from '@pkdx-api/models/Utilities';
import { Sprite } from '@pkdx-components/elements/Sprite';
import {
  CachedPokemonView,
  CacheViewReceiveProps,
} from '@pkdx-components/CacheViews';
import { Pokemon } from '@pkdx-api/models/Pokemon/Pokemon';

export function PokemonListPage() {
  useTitle();

  const [pageSize, setPageSize] = useState(30);
  const { page_number: page_number_param } = useParams();
  const navigate = useNavigate();

  const pageNumberParam = isNaN(Number(page_number_param))
    ? 1
    : Number(page_number_param);

  const { data, page, pageCount } = usePokemonListing(
    pageNumberParam,
    pageSize
  );

  const onSelectPage = (pageNumber: number) =>
    navigate(`/pokemon-list/${pageNumber}`);
  const onNextPage = () => navigate(`/pokemon-list/${page + 1}`);
  const onPrevPage = () => navigate(`/pokemon-list/${page - 1}`);

  return (
    <div>
      {data.map((pokemon) => (
        <PokemonListing key={`pokemon_${pokemon.name}`} pokemon={pokemon} />
      ))}
      <div className={styles.perPageContainer}>
        Results per page
        <select
          onChange={(v) => setPageSize(Number(v.currentTarget.value))}
          value={pageSize}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
        </select>
      </div>
      {pageCount && (
        <Pagination
          currentPage={page}
          pageCount={pageCount}
          onNextPage={onNextPage}
          onPrevPage={onPrevPage}
          onSelectPage={onSelectPage}
        />
      )}
    </div>
  );
}

export function PokemonListing({
  pokemon,
}: {
  pokemon: NamedAPIResourceWithID;
}) {
  return (
    <Link className={styles.listing} to={`/pokemon/${pokemon.name}`}>
      <div className={styles.containerSprite}>
        <Sprite className={styles.sprite} pokemonId={pokemon.id} />
      </div>
      <div className={styles.containerId}>
        <span>{`#${pokemon.id}`}</span>
      </div>
      <div className={styles.containerName}>
        <span className={styles.name}>{`${pokemon.name}`}</span>
      </div>
      <CachedPokemonView
        name={pokemon.name}
        component={PokemonListingTypeSwatches}
        errorComponent={MissingPokemonSwatchError}
      >
        <span>Loading</span>
      </CachedPokemonView>
    </Link>
  );
}
export function MissingPokemonSwatchError() {
  return <div className={styles.loadError}>Missing!</div>;
}

export function PokemonListingTypeSwatches({
  value: pokemon,
}: CacheViewReceiveProps<Pokemon>) {
  return (
    <div className={styles.swatches}>
      {pokemon.types.map((a) => (
        <i
          title={`Type: ${a.type.name}`}
          key={`swatch_${a.type.name}`}
          className={`${styles.typeSwatch} pokemon-type`}
          data-type={a.type.name}
        />
      ))}
    </div>
  );
}
