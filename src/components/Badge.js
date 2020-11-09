import React from 'react';

import './styles/Badge.css';
import geekLogo from '../images/geek_icon.png';
import Gravatar from './Gravatar';

class Badge extends React.Component {
  render() {
    return (
      <div className='Badge'>
        <div className='Badge__section-name'>
          <Gravatar className='Badge__avatar' avatarURL={this.props.avatarURL} />
          <h3>
            {this.props.firstName}
            <br />
          </h3>
        </div>

        <div className='Badge__section-info'>
          <div>
            From:
            {' '}
            {this.props.type}
          </div>
        </div>
      </div>
    );
  }
}

export default Badge;
