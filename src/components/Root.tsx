import { usePokemonListing } from '@pkdx-api/hooks';
import React, { useCallback, useMemo, useState } from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';
import { PokemonView } from './dev/Pokemon';

export function Root() {
  const [pageSize, setPageSize] = useState(20);

  const { data, page, pageCount, nextPage, prevPage, goToPage } =
    usePokemonListing(pageSize);

  const pages = useMemo(
    () =>
      Array(pageCount)
        .fill(0)
        .map((_, i) => i + 1),
    [pageCount]
  );

  const onSelectPage = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const pageNumber = Number(e.currentTarget.dataset.pagenumber);

      if (isNaN(pageNumber)) {
        console.error('Bad page number', pageNumber);
        return;
      }

      goToPage(pageNumber);
    },
    [goToPage]
  );

  return (
    <div className="flex x">
      <div>
        <div>
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
        {data.map((a) => (
          <div key={`pokemon_${a.id}`}>
            <img
              width="50"
              height="50"
              alt="?"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${a.id}.png`}
            />
            <span>{`ID: ${a.id}`}</span>
            <span>{`Name: ${a.name}`}</span>
            <Link to={`/pokemon/${a.name}`}>Load</Link>
          </div>
        ))}
        {pageCount && (
          <div>
            <button disabled={page <= 1} onClick={prevPage}>
              Previous
            </button>
            {pages.map((a) => (
              <button
                onClick={onSelectPage}
                data-pagenumber={a}
                key={`page_${a}`}
              >
                {a}
              </button>
            ))}
            <button disabled={pageCount <= page} onClick={nextPage}>
              Next
            </button>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
}
