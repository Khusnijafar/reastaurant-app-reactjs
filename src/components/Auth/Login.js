import React, { Component } from 'react'
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import swal from 'sweetalert';
import { login } from '../redux/actions/user'
import { connect } from 'react-redux'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            loading: true
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleEmailChange = (e) => {
      this.setState({ email: e.target.value})
    }

    handlePasswordChange = (e) => {
      this.setState({ password: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        await this.props.dispatch(login({
            email: this.state.email,
            password: this.state.password
        }))
            .then((response) => {
                localStorage.setItem('token', response.action.payload.data.result.token)
                localStorage.setItem('id_user', response.action.payload.data.result.id_user)
                localStorage.setItem('username', response.action.payload.data.result.username)
                // window.location.redirect('/')
            })
            .catch((response) => {
                swal({
                    title: "Failed",
                    text: "Login Failed!",
                    icon: "warning",
                    buttons: "oke",
                })
            })
    }

    
    render() {
        const { email, password } = this.state
        // if(this.state.email = password) {
        //     return <Redirect to='/' />
        // }
        return (
            <Grid textAlign='center' verticalAlign='middle' className='app'>
                <Grid.Column style={{ maxWidth: 450, paddingTop: 150}}>
                    <Header as='h1' icon color='teal' textAlign='center'>
                        <Icon name='github alternate' color='teal'/>
                        Login
                    </Header>
                    <Form onSubmit={this.handleSubmit} size='large'>
                        <Segment stacked>
                            <Form.Input fluid name='email' icon='mail' iconPosition='left' placeholder='Email Address' onChange={this.handleEmailChange} value={email} type='email'/>
                            <Form.Input fluid name='password' icon='lock' iconPosition='left' placeholder='Password' onChange={this.handlePasswordChange} value={password} type='password'/>
                            <Button  color='teal' fluid size='large' type='submit'>Submit</Button>
                        </Segment>
                    </Form>
                    <Message>Don't have an account yet ? <Link to='/register'>Register</Link></Message>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userList: state.user.userList
    }
}

export default connect(mapStateToProps)(Login)