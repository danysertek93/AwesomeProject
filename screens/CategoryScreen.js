import React, { Component } from 'react';
import { WebView } from 'react-native-webview'

class CategoryScreen extends Component {
  render() {
    return (
      <WebView
        startInLoadingState={true}
        source={{uri: 'https://www.justoapp.com/sitemap'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default CategoryScreen;