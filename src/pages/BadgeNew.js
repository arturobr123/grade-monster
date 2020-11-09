import React from 'react';

import './styles/BadgeNew.css';
import './styles/CardNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
//import api from '../api';
//import { db } from '../firebaseDB';
import { handleChangeImage, handleChange, submitImage } from '../actions/BadgeActions';
import SelectCompany from '../components/SelectCompany';

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    companyGrade: '',
    form: {
      cardName: '',
      type: '',
      avatarURL: '',
    },
    cardToGrade: [],
  };

  constructor(props) {
    super(props);

    this.submitImage = submitImage.bind(this);
    this.handleChangeImage = handleChangeImage.bind(this);
    this.handleChange = handleChange.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      this.setState({ cardToGrade: [this.state.form, ...this.state.cardToGrade] });

      //const imageUrl = await this.submitImage();
      //this.setState({ form: { ...this.state.form, avatarURL: imageUrl } });
      //db.push(this.state.form);
      //this.props.history.push('/badges');

      this.setState({ loading: false });

    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  render() {
    const { loading, form, error, cardToGrade, companyGrade } = this.state;
    if (loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className='BadgeNew__hero' />
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 col-sm-12 CardForm'>
              <h3>Which Company to Grade</h3>
              <SelectCompany
                onChange={this.handleChange}
                companyGrade={companyGrade}
                error={error}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-8 col-sm-12 CardForm'>
              <h3>Add Your Card</h3>
              <BadgeForm
                onChange={this.handleChange}
                onChangeImage={this.handleChangeImage}
                onSubmit={this.handleSubmit}
                formValues={form}
                error={error}
              />
            </div>
            <div className='col-md-4 col-sm-12'>
              {cardToGrade.map((card) => {
                return (
                  <Badge
                    firstName={card.cardName}
                    type={card.type}
                    avatarURL='https://www.gravatar.com/avatar/21594ed15d68ace396564e84?d=identicon'
                  />
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
