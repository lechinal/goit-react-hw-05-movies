import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'Services/Api';
import styles from './Cast.module.css';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <div className={styles.castDiv}>
      <ul className={styles.actorsList}>
        {cast.map(actor => (
          <li key={actor.id} className={styles.actorsListElement}>
            <img
              key={actor.id}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : `http://www.suryalaya.org/images/no_image.jpg`
              }
              alt={actor.profile_path}
              loading="lazy"
              width={120}
              height={180}
            />

            <p className={styles.actorsName}>{actor.name}</p>
            <p
              className={styles.actorsCharacter}
            >{`Character: ${actor.character}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
