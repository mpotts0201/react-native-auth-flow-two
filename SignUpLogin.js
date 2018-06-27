import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native'


class SignUpLogin extends Component {
    render() {
        return (
            <View>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')} >
                    <Text>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Register')}>
                    <Text>Register</Text>
                </TouchableHighlight>

            </View>

        );
    }
}

export default SignUpLogin;