import React from 'react';

import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from 'react-native';


export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    // gotoDetails = () => {
    //     alert('wow')
    //     this.props.navigation.navigate('Details', {
    //         itemId: 86,
    //         otherParam: 'anything you want here',
    //     })
    // }


    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    posts: responseJson,
                });
            });
    }


    renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity style={styles.MainContainer}
                    onPress={() => this.props.navigation.navigate('Details', {
                        blog: item
                    })}>
                    <View style={styles.txtColumn}>
                        <Text
                            style={{
                                paddingBottom: '4%',
                                fontSize: 21,
                                fontWeight: 'bold',
                            }}>
                            {item.title}
                        </Text>
                        <Text style={{ fontSize: 15 }}>{item.body} </Text>
                        <Text />
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 2,
                        }} />
                </TouchableOpacity>
            </View>
        );
    }


    render() {
        let { posts } = this.state;
        return (
            // <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text style={styles.name}>Hatch Blog</Text>
                <FlatList
                    data={posts}
                    renderItem={this.renderItem}
                // keyExtractor={(item, index) => index.toString()}
                />
            </View>
            // </ScrollView>

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
