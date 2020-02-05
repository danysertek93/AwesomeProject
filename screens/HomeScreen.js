import React, { Component} from 'react';
import { WebView } from 'react-native-webview'
import Mymodal from './../components/MyModal'
import {StyleSheet, Text,View,Modal,TouchableHighlight,Button} from 'react-native'
import SimpleModal from "./../components/SimpleModal";
class WebViewHome extends Component {
  webview = null;
  constructor(props){
    super(props);
    this.state={
        isVisibleModal:false,
    }

}

changeModalVisibility=(bool)=>{
    this.setState({isVisibleModal:bool});

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
    const { url, canGoBack } = newNavState;
    if (url!='https://justoapp.com/'){
        if (canGoBack){

        } 
    }else{ 
    console.log(url);
  }
    

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
  

  render() {
    return (
      <View style={{flex:1}}>
      <WebView
        startInLoadingState={true}
        ref={ref => (this.webview = ref)}
        source={{ uri: 'https://justoapp.com' }}
        onNavigationStateChange={this.handleWebViewNavigationStateChange}
      />
      </View>
    );
  }
}

          

export default WebViewHome;