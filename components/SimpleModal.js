import React,{Component} from "react";
import {StyleSheet,Text,View,TouchableHighlight,TouchableOpacity, Dimensions} from "react-native";

export default class SimpleModal extends Component{
    constructor(props){
        super(props);
        
        this.state={
            width:Dimensions.get('window').width,
        };
        Dimensions.addEventListener('change',(e)=>{
            this.setState(e.window)
        })
    }
    closeModal=()=>{
        this.props.changeModalVisibility(false);
    }
    
    render(){
        return(
            <TouchableOpacity activeOpacity={1} disabled={true} style={styles.contentContainer}>
                <View style={[styles.modal, {width: this.state.width-80}]}>
                    <Text>Modal Header</Text>
                    <Text>Modal Text</Text>
                </View>
                <View>
                    <TouchableHighlight onPress={()=>this.closeModal()}> 
                        <Text>Cancel</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.closeModal()}> 
                        <Text>Ok</Text>
                    </TouchableHighlight>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles= StyleSheet.create({
    contentContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    modal:{
        height:150,
        paddingTop:10,
        alignSelf:"center",
        alignItems:"center",
        textAlign:"center",
        backgroundColor:"white",
        borderRadius:10,
    }
})