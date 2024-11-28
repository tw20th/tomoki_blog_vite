import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardGrid = ({ searchQuery }) => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const dummyData = [
    { id: 1, title: 'Article 1', summary: 'This is the first article.', date: '2024-11-01', tags: ['Tech'] },
    { id: 2, title: 'Article 2', summary: 'This is the second article.', date: '2024-11-02', tags: ['Life'] },
    { id: 3, title: 'Article 3', summary: 'This is the third article.', date: '2024-11-03', tags: ['Tech'] },
  ];

  const filteredData = dummyData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', padding: '1rem' }}>
      {filteredData.map((item) => (
        <div
          key={item.id}
          className="card"
          data-aos="fade-up"
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            textAlign: 'center',
            background: '#fff',
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <small>{item.date}</small>
          <div style={{ marginTop: '0.5rem' }}>
            {item.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  display: 'inline-block',
                  background: '#e0f7fa',
                  color: '#00796b',
                  padding: '0.2rem 0.5rem',
                  margin: '0 0.2rem',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
