import React, { Component } from 'react';
import { WebView } from 'react-native-webview'

class WebViewSeeMore extends Component {
  render() {
    return (
      <WebView
        startInLoadingState={true}
        source={{uri: 'https://www.justoapp.com/search'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default WebViewSeeMore;