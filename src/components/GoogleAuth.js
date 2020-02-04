import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '839321007780-rp0l06eupirsqjbecrmlcg0v0g9nd1hf.apps.googleusercontent.com',
        scope: 'email'
      })
    })
  }
  
  render() {
    return <div>google auth</div>
  }
}

export default GoogleAuth;