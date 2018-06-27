import React, { Component } from 'react';
import {
    View,
    Text,
    AsyncStorage,
    Button
} from 'react-native'

const ACCESS_TOKEN = 'access-token'

class Home extends Component {

    signOut = async() => {
        try{
            await AsyncStorage.clear()
            
            const token = await AsyncStorage.getItem(ACCESS_TOKEN)

            console.log("From AsyncStorage: " + token)

            this.props.navigation.navigate('AuthLoading')

        }catch(error){
            console.log(error)
        }
    }

    render() {
        return (
            <View>
                <Button title='Sign Out' onPress={() => this.signOut()} />

            </View>
        );
    }
}

export default Home;