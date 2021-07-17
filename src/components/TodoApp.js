import React, { Component } from "react";
import { connect } from 'react-redux'
import { Entypo } from '@expo/vector-icons'
import { View,Text,StyleSheet,ScrollView } from "react-native";
import AddTodo from './AddTodo'
import RenderTodo from './RenderTodo'

const mapStateToProps = state => ({
     
    todos: state.todos
})

class TodoApp extends Component {
    render() {
        return (
            <View style={styles.container}>
             {/* HEADER */}
              <View style={{backgroundColor:"#ff7a00",width:"100%",height:60,flexDirection:"row"}}>
              
              <View style={{borderBottomWidth:0.8,height:40,width:"33%",borderTopWidth:0.8,padding:0,marginTop:12,marginLeft:"16%",borderColor:"white"}}>
              <Text style={{fontSize:22,color:"white",textAlign:"center",fontWeight:"bold"}}>Keeper App</Text>
              </View>
              
              </View>

{/* Add todo area */}
            <AddTodo />

{/* here all todos will come through mapping */}
                <ScrollView style={{backgroundColor:"#fde8cd"}}>
                {this.props.todos.map(todo =>
                 <RenderTodo key={todo.id} text={todo.text} id={todo.id} />
                 )}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24
    }
});

export default connect(mapStateToProps)(TodoApp)
