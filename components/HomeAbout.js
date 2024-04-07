import React from 'react';

export default function HomeAbout({ about }) {
  return (
    <section className="container mt-10">
      <div className="block">
        <div className="flex justify-center">
          <h2>About</h2>
        </div>
        <div className="mt-4 flex justify-center">
          <p>{about}</p>
        </div>
      </div>
    </section>
  );
}
