import React, { Component } from 'react';
import { WebView } from 'react-native-webview'

class WebViewHome extends Component {
  webview = null;

  render() {
    const myRule = 'document.getElementsByClassName("main-footer")[0].style.display="none";document.getElementsByClassName("header")[0].style.display="none";';
    return (
      
      <WebView
        startInLoadingState={true}
        javaScriptEnabled
        injectedJavaScript={'function injectRules() {' + myRule + '};injectRules();'}
        ref={ref => (this.webview = ref)}
        source={{ uri: 'https://www.justoapp.com/login' }}
        onNavigationStateChange={this.handleWebViewNavigationStateChange}
      />

    );
  }

  handleWebViewNavigationStateChange = newNavState => {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }
    const { url } = newNavState;
    if (!url) return;

    // handle certain doctypes
    if (url.includes('.pdf')) {
      this.webview.stopLoading();
      // open a modal with the PDF viewer
    }

    // one way to handle a successful form submit is via query strings
    if (url.includes('?message=success')) {
      this.webview.stopLoading();
      // maybe close this view?
    }

    // one way to handle errors is via query string
    if (url.includes('?errors=true')) {
      this.webview.stopLoading();
    }

    // redirect somewhere else
    if (url.includes('google.com')) {
      const newURL = 'https://justoapp.com';
      const redirectTo = 'window.location = "' + newURL + '"';
      this.webview.injectJavaScript(redirectTo);
    }
  };
}

export default WebViewHome;