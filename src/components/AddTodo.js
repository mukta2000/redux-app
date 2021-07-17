import React, { Component } from "react";
import {View,StyleSheet,TextInput} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actionCreater';

const mapDispatchToProps = (dispatch)=>({
    addTodo:(text)=>{
       dispatch(addTodo(text))
     }
  })
  
class AddTodo extends Component {

    state = {
        text: ''
    }

    addTodo = (text) => {
        
        if(text!==""){
        
        this.props.addTodo(text)
        this.setState({ text: '' })
    }
}

    render() {
        return (
         <View style={{backgroundColor:"#fde8cd"}}>
         {/* Input Area */}
          <View style={{flexDirection:"row",paddingBottom:10}}>
            <TextInput placeholder="Add New Items" style={styles.Input}  
                 onChangeText={(text) => this.setState({ text })}
                 value={this.state.text}/>
            <MaterialIcons name="add-circle" size={30} color="#546e7a" style={{paddingTop:15}}  
                  onPress={() => this.addTodo(this.state.text)}/> 
           </View>
           {/* HR */}
           <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginLeft:"5%",marginRight:"5%"}}></View>
          </View>
        );
    }
}
export default connect(null,mapDispatchToProps)(AddTodo);

const styles = StyleSheet.create({
    Input:{
        marginTop:10,
        paddingLeft:"10%",
        width:"90%",
        fontSize:15
       }
});
