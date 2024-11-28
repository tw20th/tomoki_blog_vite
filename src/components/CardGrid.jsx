import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardGrid = ({ searchQuery }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });

    // JSONファイルからデータを取得
    const fetchArticles = async () => {
      try {
        const response = await fetch('./src/articles.json'); // JSONファイルのパス
        if (!response.ok) throw new Error('Failed to fetch articles');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  // 検索フィルタ
  const filteredArticles = articles.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="card-grid">
      {filteredArticles.map((item) => (
        <div key={item.id} className="card">
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
