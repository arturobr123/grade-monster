import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';
import {db} from '../firebase';
import firebase from "firebase";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      type:'',
      avatarURL:''
    },
    photo:'',
    toUploadPhoto: ''
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });

    console.log(this.state);
  };

  handleChangeImage = e => {
    this.setState({photo: URL.createObjectURL(e.target.files[0]) });
    this.setState({toUploadPhoto: e.target.files[0]});
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      //first upload image
      const storageRef = firebase.storage().ref(`images/${this.state.toUploadPhoto.name}`)
      const task = storageRef.put(this.state.toUploadPhoto);

      task.on('state_changed', (snapshot) => {
        // Se lanza durante el progreso de subida
      }, (error) => {
        // Si ha ocurrido un error aquí lo tratamos
      }, () => {
        task.snapshot.ref.getDownloadURL().then((url) => {
          this.setState({form: { ...this.state.form, avatarURL: url}});

          db.push(this.state.form);

          this.setState({ loading: false });
          this.props.history.push('/badges');
        })
      })

    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                type={this.state.form.type || 'TYPE'}
                avatarURL={this.state.photo || "https://www.gravatar.com/avatar/21594ed15d68ace396564e84?d=identicon"}
              />
            </div>

            <div className="col-6">
              <h1>New Character</h1>
              <BadgeForm
                onChange={this.handleChange}
                onChangeImage={this.handleChangeImage}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
