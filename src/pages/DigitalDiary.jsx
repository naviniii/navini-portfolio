import { useState } from 'react';
import Diary from '../components/Diary';
import DiaryView from '../components/DiaryView';
import diaryEntries from '../data/diaryEntries';
import './DigitalDiary.css';

function DigitalDiary() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="diary-hero">
        <div className = "diary-hero-content">
            <h1 className = "diary-title"> Digital Diary </h1>
        </div>
      <div className="diary-scene">
        <div className="diary-icon-wrap" onClick={() => setIsOpen(!isOpen)}>
          <Diary to="#" label="" />
        </div>
      </div>

      {isOpen && <DiaryView entries={diaryEntries} onClose={() => setIsOpen(false)} />}
    </section>
  );
}

export default DigitalDiary;