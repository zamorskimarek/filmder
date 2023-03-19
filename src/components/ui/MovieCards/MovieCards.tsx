import React, {useEffect, useRef, useState, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TinderCard from 'react-tinder-card';

import {Movie} from '../../../../types/movies';
import {fetchMoviesRequest} from '../../../redux/actions';
import {Button} from '../Button';
import {CircularProgress} from '@mui/material';

import './MovieCards.css';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const MovieCards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchMoviesRequest());
    }, 1000);
  }, [dispatch]);

  const movies = useSelector((state: any) => state.moviesState.movies);
  const loading = useSelector((state: any) => state.moviesState.loading);
  const [currentIndex, setCurrentIndex] = useState(movies.length - 1);
  const [currentId, setCurrentId] = useState('');
  const [leftCards, setLeftCards] = useState<number[]>([]);


  useEffect(() => {
    setCurrentIndex(movies.length - 1);
  }, [movies]);

  const currentIndexRef = useRef(currentIndex);
  const childRefs = useMemo<React.RefObject<any>[]>(
    () =>
      Array(movies.length)
        .fill(0)
        .map(() => React.createRef()),
    [movies.length],
  );

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };
  const canSwipe = currentIndex >= 0;
  const swiped = (direction: string, id: string, index: number) => {
    updateCurrentIndex(index - 1);
    if (direction !== 'down' && id === currentId) {
      const mock = new MockAdapter(axios);
      mock
        .onPut(`http://api.movis.com/recommendations/${id}/reject`)
        .reply(200);
      axios
        .put(`http://api.movis.com/recommendations/${id}/reject`)
        .then(res =>
          console.log(
            `movie with id ${currentId} rejected, status: ${res.status}`,
          ),
        )
        .catch(err => console.log(err));
    }
  };
  const swipe = async (dir: string) => {
    if (canSwipe && currentIndex < movies.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  useEffect(() => {
    if (currentIndex >= 0 && !loading) {
      setCurrentId(movies[currentIndex].id);
    }
  }, [currentIndex, movies, loading]);

  const handleAccept = (id: string) => {
    swipe('down');
    const mock = new MockAdapter(axios);
    mock.onPut(`http://api.movis.com/recommendations/${id}/accept`).reply(200);
    axios
      .put(`http://api.movis.com/recommendations/${id}/accept`)
      .then(res => console.log(`movie with id ${currentId} accepted`))
      .catch(err => console.log(err));
  };
  const outOfFrame = (idx: number) => {
    setLeftCards(leftCards => [...leftCards, idx]);
  };
  return (
    <section className="cardSection">
      {loading ? (
        <div
          className="cardContainer"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CircularProgress />
        </div>
      ) : (
        <>
          {!canSwipe ? (
            <div
              className="cardContainer"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <p>no more movies</p>
            </div>
          ) : (
            <>
              <div className="cardContainer">
              {movies.map((movie: Movie, index: number) => {
                  if (leftCards.includes(index)) {
                    return null;
                  }
                  return (
                    <TinderCard
                      ref={childRefs[index]}
                      className="swipe"
                      key={movie.title}
                      onSwipe={dir => swiped(dir, movie.id, index)}
                      onCardLeftScreen={() => outOfFrame(index)}
                      // preventSwipe={['down']}
                    >
                      <div
                        style={{backgroundImage: `url(${movie.imageURL})`}}
                        className="card">
                        <div className="card__textContainer">
                          <p className="card__title">{movie.title}</p>
                          <p className="card__title">
                            IMDB Rating: {movie.rating}
                          </p>
                          <p className="card__summary">{movie.summary}</p>
                        </div>
                      </div>
                    </TinderCard>
                  );
                })}
              </div>
              <div className="buttonsContainer">
                <div onClick={() => handleAccept(currentId)}>
                  <Button variant="accept" />
                </div>
                <div onClick={() => swipe('right')}>
                  <Button variant="reject" />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};