import React, { Component } from 'react';
import { Card, CardSection, Button, EntryText } from './reusable';

class LoginForm extends Component {
  state = { email: '', password: '' };

  onButtonPress()
  {
    const { email, password }=this.state;
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
            <Button>
                LOGIN
            </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
