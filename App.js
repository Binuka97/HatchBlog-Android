/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { PostDetailedView } from "./PostDetailedView";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const screens = {
  postDetails: {
    screen: PostDetailedView
  }
}

const Stack = createStackNavigator();

export class App extends React.Component {
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
  renderItem = ({item}) => {
    function HomeScreen({ navigation }) {
    return (
      <View>
        <TouchableOpacity style={styles.MainContainer}
       onPress={() => navigation.navigate('Details')}>
            <View style={styles.txtColumn}>
              <Text
                style={{
                  paddingBottom: '4%',
                  fontSize: 21,
                  fontWeight: 'bold',
                }}>
                {item.title}
              </Text>
              <Text style={{fontSize: 15}}>{item.body} </Text>
            </View>
        </TouchableOpacity>
      </View>
    );

  //   const stack = createStackNavigator({
  //     Home:{
  //         screen: HomeScreen
  //     },
  //     PostDetailedView:{
  //         screen: detailedView
  //     }
  // });

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="detailedView" component={detailedScreen} />
//     </Stack.Navigator>
//   );
// }
              }
              return (
                <NavigationContainer>
                  <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Details" component={DetailsScreen} />
                  </Stack.Navigator>
                </NavigationContainer>
              );

              function DetailsScreen() {
                return (
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Details Screen</Text>
                  </View>
                );
              }
  };

  
  

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
export default App;
