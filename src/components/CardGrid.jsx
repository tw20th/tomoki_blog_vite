import React from 'react';

const CardGrid = () => {
  const dummyData = [
    { id: 1, title: 'Article 1', summary: 'This is the first article.', date: '2024-11-01' },
    { id: 2, title: 'Article 2', summary: 'This is the second article.', date: '2024-11-02' },
    { id: 3, title: 'Article 3', summary: 'This is the third article.', date: '2024-11-03' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', padding: '1rem' }}>
      {dummyData.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', textAlign: 'center', background: '#fff' }}>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <small>{item.date}</small>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
