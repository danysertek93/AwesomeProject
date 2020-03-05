import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {View} from 'react-native';

class CategoryScreen extends Component {
  webview = null;

  render() {
    const myRule = 'document.getElementsByClassName("main-footer")[0].style.display="none";document.getElementsByClassName("header")[0].style.display="none";document.getElementById("wrapper").style.paddingTop="0px";';
    return (
      <View style={{flex:1}}>
      <WebView
        startInLoadingState={true}
        javaScriptEnabled
        injectedJavaScript={'function injectRules() {' + myRule + '};injectRules();'}
        ref={ref => (this.webview = ref)}
        source={{ uri: 'https://www.justoapp.com/sitemap' }}
        onNavigationStateChange={this.handleWebViewNavigationStateChange}
      />
      <KeyboardSpacer/>
      </View>
    );
  }
}

export default CategoryScreen;