import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./HistoryPage.css"

const HistoryPage = () => {
  const searchHistory = useSelector(state => state.search);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchHistory) {
      setError('Error fetching search history');
    }
  }, [searchHistory]);

  const handleHistoryClick = (word) => {
    navigate(`/word/${word}`);
  };

  return (
    <div className='HistoryPage'>
      <h1 className='heading'>Search History</h1>
      {error ? (
        <p className="err">{error}</p>
      ) : searchHistory && searchHistory.length > 0 ? (
        <div className='search-history-container'>
          {searchHistory.map((item, index) => (
               <p className='list' key={index} onClick={() => handleHistoryClick(item)}>{item}</p>
          ))}
        </div>
      ) : (
        <p className="err">No search history found</p>
      )}
    </div>
  );
};

export default HistoryPage;
