import React, { Component } from 'react'
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordconfirmation: '',
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value})
    }

    handleEmailChange = (e) => {
      this.setState({ email: e.target.value})
    }

    handlePasswordChange = (e) => {
      this.setState({ password: e.target.value})
    }

    handlePasswordConfirmChange = (e) => {
      this.setState({ passwordconfirmation: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()    
        let regex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.username === '') {
            alert('Name is required')
        } else if (this.state.email === '') {
            alert('Email is required')
        } else if (regex.test(this.state.email) === false) {
            alert('Email format is incorrect')
        } else if (this.state.password === '') {
            alert('Password is required')
        } else  if (
            this.state.username !== "" &&
            this.state.email !== "" &&
            this.state.password !== ""
        ){
          swal({
              title: "Registrasi",
              text: "Registrasi Success !!",
              icon: "success",
              button: "oke"
          });
        }
            
        let data = {
          username : this.state.username,
          email : this.state.email,
          password : this.state.password,
          passwordConfirm : this.state.passwordconfirmation
        }
        let headers = {'authorization':'khusni', 'Content-Type': 'application/json'} 
  
        axios.post('http://localhost:3030/users/register', data, {headers})
        .then(res => {
          console.log(res);
          this.props.history.push('/login')
        })
        .catch(err => console.log(err));
    }
    
    render() {
        const { username, email, password, passwordconfirmation } = this.state
        return (
            <Grid textAlign='center' verticalAlign='middle' className='app'>
                <Grid.Column style={{ maxWidth: 450, paddingTop: 100}}>
                    <Header as='h1' icon color='teal' textAlign='center'>
                        <Icon name='user secret' color='teal'/>
                        Register
                    </Header>
                    <Form onSubmit={this.handleSubmit} size='large'>
                        <Segment stacked>
                            <Form.Input fluid name='username' icon='user' iconPosition='left' placeholder='username' onChange={this.handleUsernameChange} value={username} type='text'/>
                            <Form.Input fluid name='email' icon='mail' iconPosition='left' placeholder='Email Address' onChange={this.handleEmailChange} value={email} type='email'/>
                            <Form.Input fluid name='password' icon='lock' iconPosition='left' placeholder='Password' onChange={this.handlePasswordChange} value={password} type='password'/>
                            <Form.Input fluid name='passwordconfirmation' icon='repeat' iconPosition='left' placeholder='Password Confirmation' onChange={this.handlePasswordConfirmChange} value={passwordconfirmation} type='password'/>
                            <Button  color='teal' fluid size='large'>Submit</Button>
                        </Segment>
                    </Form>
                    <Message>Already a user? <Link to='/login'>Login</Link></Message>
                </Grid.Column>
            </Grid>
        )
    }
}
