import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ id, title, releaseDate, posterUrl }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);

  return (
    <div className="movieCard">
      <Link to={`/movie/${id}`}>
        <img src={posterUrl} width={230} alt={title} className="movieImage" />
      </Link>
      <h3>{title}</h3>
      <p>{releaseDate}</p>
      <button onClick={handleLike}>❤️ Like</button>
      <p>Likes: {likes}</p>
    </div>
  );
}

export default MovieCard;
