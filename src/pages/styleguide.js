import React from 'react';

class StyleGuide extends React.Component {
  render() {
    return (

      <div style={{
        textAlign: 'center', backgroundColor: '#2C2F33', width: '100vw', height: '100vh', margin: '0', padding: '0',
      }}
      >
        <h1 style={{ color: '#fff' }}> Colors </h1>
        <hr />
        <h2 style={{ color: '#fff' }}> Website Colors </h2>
        <hr />
        <h3 style={{ color: '#ea4141' }}> Pastel Red: #ea4141, rbg(234, 65, 65)</h3>
        <h3 style={{ color: '#e36464' }}> Highlighted Red: #e36464, rbg(227, 100, 100) </h3>
        <h3> Black: #000, rgb(0, 0, 0) </h3>
        <h3 style={{ color: '#fff' }}> White: #fff, rgb(255, 255, 255) </h3>
        <h1 style={{ color: '#fff' }}> Colors </h1>
        <hr />
        <h2 style={{ color: '#fff' }}> Resume Colors </h2>
        <hr />
        <h3 style={{ color: '#b40c0c' }}> Accent Red: #b40c0c, rbg(180, 12, 12)</h3>
        <h3 style={{ color: '#6e0808' }}> Dark Red: #6e0808, rbg(110, 8, 8) </h3>
        <h3> Title Black: #000, rgb(0, 0, 0) </h3>
        <h3 style={{ color: '#101010' }}> Description Black: #101010, rgb(16, 16, 16) </h3>
        <h3 style={{ color: '#fff' }}> White: #fff, rgb(255, 255, 255) </h3>
        <hr />
        <h2 style={{ color: '#fff' }}> Font </h2>
        <h3 style={{ color: '#fff' }}>Pangram Regular</h3>
        <hr />
      </div>


    );
  }
}
export default StyleGuide;
