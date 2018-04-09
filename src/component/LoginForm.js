import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, CardSection, Button, EntryText, Spinner } from './reusable';


class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onTouchButton() {
    // VARIABLES
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    try {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoggingSuccess.bind(this))
      .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoggingSuccess.bind(this))
          .catch(this.onLoggingFail.bind(this));
      });
    } catch (e) {
      console.log(e.toString());
    }
  }

  onLoggingFail() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: 'Auth Fail'
    });
  }


  onLoggingSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onTouch={this.onTouchButton.bind(this)}>
          LOGIN
      </Button>
    );
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
           {this.renderButton()}
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
