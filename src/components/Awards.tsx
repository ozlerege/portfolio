import React from 'react';

const Awards: React.FC = () => {
  const awards = [
    { title: 'Best Portfolio Award', year: 2023 },
    { title: 'Innovation Prize', year: 2022 },
  ];

  return (
    <section id="awards" className="awards-section">
      <h2>Awards</h2>
      <ul>
        {awards.map((award, index) => (
          <li key={index}>
            <strong>{award.title}</strong> - {award.year}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Awards;