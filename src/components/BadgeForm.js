import React from 'react';

class BadgeForm extends React.Component {

  render() {
    const options = [
      {id: 1, name: "All"},
      {id: 2, name: "Game of Thrones"},
      {id: 3, name: "Marvel"},
      {id: 4, name: "Super Smash Bros"}
     ];

    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input required
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>{"Where is this Character from ?"}</label>

            <select name="type"
              onChange={this.props.onChange}
              value={this.props.formValues.type}
              className="form-control">
              {options.map(option => {
                return (
                  <option key={option.id}>{option.name}</option>
                );
              })}
            </select>
          </div>

          <input required
            type="file"
            name="avatarURL"
            onChange={this.props.onChangeImage}
          />

          <button className="btn btn-primary">
            Save
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
