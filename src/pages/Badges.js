import React from 'react';
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

class Badges extends React.Component {
  hola = "hola";

  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    db.on('value', snapshot => {
      const values = snapshot.val();

      const charactersList = Object.keys(values).map(key => ({
          ...values[key],
          id: key,
        }));

      this.setState({ loading: false, data: charactersList });
    }, (error) => {
        this.setState({ loading: false, error: error });
    })

  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
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

          <BadgesList badges={this.state.data} />

          {this.state.loading && <MiniLoader />}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
