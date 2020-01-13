import React, {Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import geekLogo from '../images/geek_icon.png';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
import api from '../api';
import {fetchCharacters} from '../actions';

import {db} from '../firebase';

const Badges = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState([])

  const fetchData = async () => {
    setLoading(true)
    setError(null)

    db.on('value', snapshot => {
      const values = snapshot.val();

      const charactersList = Object.keys(values).map(key => ({
          ...values[key],
          id: key,
        }));

      setLoading(false)
      setData(charactersList)

    }, (error) => {
      setLoading(false)
      setError(null)
    })
  };

  useEffect(() => {
    fetchData();
  }, [])

  if (loading === true && !data) {
    return <PageLoading />;
  }

  if (error) {
    return <PageError error={error} />;
  }

  return (
    <React.Fragment>
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container inline">
            <img className="Badges_conf-logo inline" src={geekLogo} height="80px" alt="Conf Logo" />
            <h3 className="inline text-light">{"Geek API"}</h3>
          </div>
        </div>
      </div>

      <div className="Badges__container">
        <div className="Badges__buttons">
          <Link to="/badges/new" className="btn btn-primary">
            New Character
          </Link>
        </div>

        <BadgesList badges={data} />

        {loading && <MiniLoader />}
      </div>
    </React.Fragment>
  );

}

export default Badges;
