import React, { Component } from 'react';
import {
    View,
    Text,
    AsyncStorage,
    TextInput,
    Button
} from 'react-native'
import axios from 'axios'

const ACCESS_TOKEN = 'access-token'

class Login extends Component {

    state = {
        email: 'murphy@potts.com',
        password: 'blahblah',
    }
    

    signIn = async (email, password) => {
        const payload = {
            email,
            password
        }
        try {
            const res = await axios.post('http://localhost:3000/auth/sign_in', payload)

            await AsyncStorage.setItem(ACCESS_TOKEN, res.headers[ACCESS_TOKEN])

            const token = await AsyncStorage.getItem(ACCESS_TOKEN)

            console.log("From AsyncStorage: " + token)
 

        } catch (error) {
            console.log(error)
        }
    }


    render() {
        return (
            <View style={styles.form}>
                <View>
                    <Text>Email</Text>

                    <Text>{this.state.email}</Text>
                    <TextInput style={styles.input} onChangeText={(text) => this.setState({ email: text })} autoCapitalize='none'/>
                </View>
                <View>
                    <Text>Password</Text>

                    <Text>{this.state.password}</Text>
                    <TextInput style={styles.input} onChangeText={(text) => this.setState({ password: text })} autoCapitalize='none'/>
                </View>

                <Button title='Sign In' onPress={() => this.signIn(this.state.email, this.state.password)} />

            </View>
        );
    }
}

const styles = {
    input: {
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        width: 200,
    },
    form: {
        display: 'flex',
        alignItems: 'center',
    }
}


export default Login;