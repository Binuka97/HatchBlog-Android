// import React from 'react';
// import { PostDetailedView } from './PostDetailedView';
import 'react-native-gesture-handler';
import {Router} from './routes'
export default Router;

// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';


// export class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: [],
//     };
//   }

//   componentDidMount(){
//     this.fetchData();
//   }

//   fetchData = async ()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         this.setState({
//           posts: responseJson,
//         });
//       });
// }
//   renderItem = ({item}) => {
//    // function HomeScreen({ navigation }) {
//     return (
//       <View>
//         <TouchableOpacity style={styles.MainContainer}
//        onPress={() => this.props.navigation.navigate('Details')}>
//             <View style={styles.txtColumn}>
//               <Text
//                 style={{
//                   paddingBottom: '4%',
//                   fontSize: 21,
//                   fontWeight: 'bold',
//                 }}>
//                 {item.title}
//               </Text>
//               <Text style={{fontSize: 15}}>{item.body} </Text>
//               <Text />
//             </View>
//             <View
//               style={{
//               borderBottomColor: 'black',
//               borderBottomWidth: 2,
//               }}/>
//         </TouchableOpacity>
//       </View>
//     );
//            //  }

//                 return (
//                 <NavigationContainer>
//                   <Stack.Navigator initialRouteName="">
//                     <Stack.Screen name="Home" component={HomeScreen} />
//                     <Stack.Screen name="Details" component={DetailsScreen} />

//                   </Stack.Navigator>
//                 </NavigationContainer>
//               );


//     function DetailsScreen() {
//       return (
//         <View style={styles.txtColumn}>
//           <Text
//             style={{
//               paddingBottom: '4%',
//               fontSize: 21,
//               fontWeight: 'bold',
//             }}>
//             {item.title}
//           </Text>
//           <Text style={{ fontSize: 15 }}>{item.body} </Text>
//         </View>

//       );
//     }
//   };

//   render() {
//     let {posts} = this.state;
//     return (
//       <ScrollView>
//         <View>
//         <Text style={styles.name}>Hatch Blog</Text>
//           <FlatList
//             data={posts}
//             renderItem={this.renderItem}
//             keyExtractor={(item, index) => index.toString()}
//           />
//         </View>
//       </ScrollView>

//     );
//   }
// }
// export default App;
