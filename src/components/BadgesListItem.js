import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="CharacterCard" style={{ backgroundImage: `url(${this.props.badge.avatarURL})` }}>
        <div className="CharacterCard__name-container text-truncate">
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />
          {this.props.badge.jobTitle}
          <br />
          <p className="italic">
            {this.props.badge.type}
          </p>
        </div>
      </div>
    );
  }
}

export default BadgesListItem;
