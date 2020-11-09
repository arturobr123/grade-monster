import React from 'react';

class SelectCompany extends React.Component {

  render() {
    const companies = [
      { id: 1, name: 'PSA' },
      { id: 2, name: 'BGS - Becket' },
      { id: 3, name: 'POS' },
    ];

    return (
      <div>
        <form>
          <div className='form-group'>
            <select
              name='company_grade'
              onChange={this.props.onChange}
              value={this.props.companyGrade}
              className='form-control'
            >
              {companies.map((option) => {
                return (
                  <option key={option.id}>{option.name}</option>
                );
              })}
            </select>
          </div>

          {this.props.error && (
            <p className='text-danger'>{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default SelectCompany;
