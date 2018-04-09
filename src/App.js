import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Card, Spinner } from './component/reusable';
import LoginForm from './component/LoginForm';

class App extends Component {

  state = { login: null };

  // LIFECYCLE METHOD MOBILE TEORY
  componentWillMount() {
    console.log('Firebase inicializado');
    firebase.initializeApp({
    apiKey: 'AIzaSyCgfctxsDS-p0J8BgGCLZuj5qWSrvS1ZNI',
    authDomain: 'authreact-2c67c.firebaseapp.com',
    databaseURL: 'https://authreact-2c67c.firebaseio.com',
    projectId: 'authreact-2c67c',
    storageBucket: 'authreact-2c67c.appspot.com',
    messagingSenderId: '394936485864'
  });

    // RETURN USER OBJECT?
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ login: true });
        } else {
          this.setState({ login: false });
        }
    });
  }

  //CONDITIONAL RENDERING
  renderContent() {
    switch (this.state.login) {
      case true:
          return (<Card>
            <CardSection>
              <Button onTouch={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>);
      case false:
          return <LoginForm />;
      default:
          return (<Card>
            <CardSection>
              <Spinner size="large" />
            </CardSection>
          </Card>);
    }
  }


  render() {
    return (
      <View>
       <Header HeaderText='Authentication' />
       {this.renderContent()}
      </View>
    );
  }

}

export default App;
