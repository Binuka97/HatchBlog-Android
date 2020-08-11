import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';


export default class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blog: this.props.route.params.blog
    }
  }

  // componentDidMount(){
  //   // alert(this.state.itemId)
  // }

  render() {
    return (
      <View style={styles.txtColumn}>

        <Text style={{ paddingBottom: '4%', fontSize: 23, fontWeight: 'bold', }}>
          {this.state.blog.title}</Text>

        <Text style={{ fontSize: 18 }}>{this.state.blog.body}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#fff',
    paddingBottom: '7%',
  },
  txtColumn: {
    marginLeft: '2%',
  },
  name: {
    paddingTop: '7%',
    paddingBottom: '8%',
    fontSize: 40,
    color: '#dd8757',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  oneList: {
    marginStart: 1,
    flex: 1,
    flexDirection: 'row',
    paddingLeft: '3%',
  },
});