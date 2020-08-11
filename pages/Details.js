import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

export class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          posts: [],
        };
      }

      componentDidMount(){
        this.fetchData();
      }
    
      fetchData = async ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              posts: responseJson,
            });
          });
    }
  render() {
    let {posts} = this.state;
    return (
      <ScrollView>
        <View>
          <Text style={styles.name}>Hatch Blog</Text>
          <FlatList
            data={posts}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
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