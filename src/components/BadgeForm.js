import React from 'react';

class BadgeForm extends React.Component {

  render() {
    const card_types = [
      { id: 1, name: 'Pokemon' },
      { id: 2, name: 'Sports' },
      { id: 3, name: 'Digimon' },
    ];

    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className='form-group'>
            <label>Card Type</label>

            <select
              name='type'
              onChange={this.props.onChange}
              value={this.props.formValues.type}
              className='form-control'
            >
              {card_types.map((option) => {
                return (
                  <option key={option.id}>{option.name}</option>
                );
              })}
            </select>
          </div>

          <div className='row'>
            <div className='form-group col-12'>
              <label>Card Name</label>
              <input
                required
                onChange={this.props.onChange}
                className='form-control'
                type='text'
                name='cardName'
                value={this.props.formValues.firstName}
              />
            </div>
          </div>

          <input
            type='file'
            name='avatarURL'
            accept='image/*'
            onChange={this.props.onChangeImage}
          />

          <button className='btn btn-primary'>
            Save
          </button>

          {this.props.error && (
            <p className='text-danger'>{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
