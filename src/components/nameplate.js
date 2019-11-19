import React from 'react';

import nameAnim from '../images/name_anim.gif';

class NamePlate extends React.Component {
  componentDidMount() {
	  const elementLogo = document.getElementById('anim');
    elementLogo.src = `${nameAnim}?${new Date().getTime()}`;
  }

	 render() {
    return (
      <div style={{ marginBottom: '2vh', marginTop: '5%' }}>

        <div style={{ textAlign: 'center' }}>
          <img className="name" id="anim" />
          <br />
          <div className="name-desc-container">
            <p className="nameplate-role">
              <b>
                {'<'}
full stack developer
                {'/>'}
              </b>
            </p>
            <p className="nameplate-title">
              {' '}
and
              <i>graphic designer</i>
            </p>
          </div>
        </div>
      </div>
    );
	 }
}

export default NamePlate;
