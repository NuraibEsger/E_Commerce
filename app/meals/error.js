'use client';

export default function Error({ error }) {
  return (
    <main children="error">
      <h1>An error occured!</h1>
      <p>Failed to fetch meal data. Please try again later.</p>
    </main>
  );
}
