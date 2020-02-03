import React,{Component} from "react";
import {StyleSheet, Text,View,Modal,TouchableHighlight} from "react-native";
import SimpleModal from "./SimpleModal";
export default class MyModal extends Component {
    constructor(props){
        super(props);
        this.state={
            isVisibleModal:false,
        }
    }

    changeModalVisibility=(bool)=>{
        this.setState({isVisibleModal:bool});
    
    }

    render(){
        return(
            <View>
                <TouchableHighlight onPress={()=>this.changeModalVisibility(true)}>
                    <Text>Open Modal</Text>
                </TouchableHighlight>
                <Modal visible={this.state.isVisibleModal} onRequestClose={()=>this.changeModalVisibility(false)}>
                    <SimpleModal changeModalVisibility={this.changeModalVisibility}/>
                </Modal>
            </View>
        )
    }
}