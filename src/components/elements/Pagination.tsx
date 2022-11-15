import React, { useCallback, useMemo } from 'react';
import styles from './style/Pagination.module.css';

interface Props {
  onPrevPage: () => void;
  onNextPage: () => void;
  onSelectPage: (page: number) => void;
  currentPage: number;
  pageCount: number;
  displayCount?: number;
}

export function Pagination({
  onPrevPage,
  onNextPage,
  onSelectPage,
  currentPage,
  pageCount,
  displayCount = 5,
}: Props) {
  const pagesEitherSide = Math.floor(displayCount / 2);

  // If there's not enough pages before the current page, then start from 1
  let start =
    currentPage - pagesEitherSide < 1 ? 1 : currentPage - pagesEitherSide;

  // If there's not enough pages after the current page, then start from max - displayCount
  start =
    currentPage + pagesEitherSide > pageCount
      ? pageCount - displayCount + 1
      : start;

  const pages = Array(displayCount)
    .fill(0)
    .map((_, i) => i + start);

  const handleSelectPage = useCallback(
    (ev: React.MouseEvent<HTMLButtonElement>) => {
      const pageNumber = Number(ev.currentTarget.dataset.pagenumber);

      if (isNaN(pageNumber)) {
        console.error('Bad page number', pageNumber);
        return;
      }

      onSelectPage(pageNumber);
    },
    [onSelectPage]
  );

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => onSelectPage(1)}>
        {'<<'}
      </button>
      <button
        className={styles.button}
        disabled={currentPage <= 1}
        onClick={onPrevPage}
      >
        {'<'}
      </button>
      {start > 1 && '...'}
      {pages.map((a) => (
        <button
          className={styles.button}
          onClick={handleSelectPage}
          data-pagenumber={a}
          key={`page_${a}`}
        >
          {a}
        </button>
      ))}
      {pages[pages.length - 1] < pageCount && '...'}
      <button
        className={styles.button}
        disabled={pageCount <= currentPage}
        onClick={onNextPage}
      >
        {'>'}
      </button>
      <button className={styles.button} onClick={() => onSelectPage(pageCount)}>
        {'>>'}
      </button>
    </div>
  );
}
