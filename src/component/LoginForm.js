import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, CardSection, Button, EntryText } from './reusable';


class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onTouchButton() {
    const { email, password } = this.state;
    try {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
             console.log(email + password);
             this.setState({ error: 'Authentication failed' });
          });
      });
    } catch (e) {
      console.log(e.toString());
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
           <EntryText
             placeholder='user@gmail.com'
             label='EMAIL'
             value={this.state.email}
             onChangeText={email => this.setState({ email })}
           />
        </CardSection>
        <CardSection>
           <EntryText
             secureTextEntry
             placeholder='password'
             label='PASSWORD'
             value={this.state.password}
             onChangeText={password => this.setState({ password })}
           />
        </CardSection>
        <CardSection>
           <Text style={styles.containerStyle}>{this.state.error}</Text>
        </CardSection>
        <CardSection>
            <Button onTouch={this.onTouchButton.bind(this)}>
                LOGIN
            </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
    containerStyle: {
      height: 40,
      width: null,
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      color: '#551a8b'
    }
};

export default LoginForm;
