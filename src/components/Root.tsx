import { usePokemonListing } from '@pkdx-api/hooks';
import React, { useCallback, useMemo } from 'react';

export function Root() {
  const { data, page, pageCount, nextPage, prevPage, goToPage } =
    usePokemonListing(20);

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
    <div>
      {data.map((a) => (
        <div key={`pokemon_${a.id}`}>
          <span>{`ID: ${a.id}`}</span>
          <span>{`Name: ${a.name}`}</span>
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
  );
}
