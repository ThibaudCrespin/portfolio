import React, { Component, Fragment } from 'react';
import './profile.css';
import Details from '../details/Details';

class Profile extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Details title='Profile'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque purus at risus hendrerit ullamcorper.
                Sed a erat id massa suscipit viverra mattis nec magna. Vivamus in est interdum, rutrum odio non, rutrum mauris. 
                Curabitur magna leo, tincidunt nec ullamcorper sed, posuere vel lectus. Quisque nec vehicula turpis. Phasellus sit amet est sem. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus ac hendrerit sapien, non dictum neque.</p>
        </Details>
      </Fragment>
    );
  }
}

export default Profile;