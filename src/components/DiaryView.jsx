import { useState, useEffect } from 'react';
import './DiaryView.css';

function DiaryView({ entries, onClose }) {
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    setPageIndex(0);
  }, [entries]);

  const nextPage = () => {
    setPageIndex((prev) => (prev + 1) % entries.length);
  };

  const prevPage = () => {
    setPageIndex((prev) => (prev - 1 + entries.length) % entries.length);
  };

  const entry = entries[pageIndex];
  const hasMultiple = entries.length > 1;

  return (
    <div className="diary-book">
      <button className="diary-close" onClick={onClose}>✕</button>

      <div className="diary-page">
        <div className="diary-page-left">
          <div className="diary-image-wrap">
            <img src={entry.image} alt={entry.title} className="diary-image" />
          </div>
        </div>

        <div className="diary-spine"></div>

        <div className="diary-page-right">
          <span className="diary-date">{entry.date}</span>
          <h2>{entry.title}</h2>
          <p>{entry.text}</p>
        </div>
      </div>

      <div className="diary-nav">
        <button className="diary-nav-btn" onClick={prevPage} disabled={!hasMultiple}>❮ prev</button>
        <span className="diary-page-count">{pageIndex + 1} / {entries.length}</span>
        <button className="diary-nav-btn" onClick={nextPage} disabled={!hasMultiple}>next ❯</button>
      </div>
    </div>
  );
}

export default DiaryView;