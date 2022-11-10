import { usePokemonListing } from '@pkdx-api/hooks';
import { Link, useParams, useNavigate } from 'react-router-dom';
import React, { useCallback, useMemo, useState } from 'react';

export function PokemonListPage() {
  const [pageSize, setPageSize] = useState(20);
  const { page_number } = useParams();
  const navigate = useNavigate();

  const pageNumber = isNaN(Number(page_number)) ? 1 : Number(page_number);

  const { data, page, pageCount } = usePokemonListing(pageNumber, pageSize);

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

      navigate(`/pokemon-list/${pageNumber}`);
      // goToPage(pageNumber);
    },
    [navigate]
  );

  const onNextPage = () => navigate(`/pokemon-list/${page + 1}`);
  const onPrevPage = () => navigate(`/pokemon-list/${page + 1}`);

  return (
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
          <button disabled={page <= 1} onClick={onPrevPage}>
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
          <button disabled={pageCount <= page} onClick={onNextPage}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}
