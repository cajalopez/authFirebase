import React, { Component } from 'react';
import { Card, CardSection, Button, EntryText } from './reusable';

class LoginForm extends Component {
  state = { email: '' };

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
            <Button onTouch={() => console.log('test')}>
                Login
            </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
