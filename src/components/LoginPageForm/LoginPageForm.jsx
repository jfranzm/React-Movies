import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class LoginPageForm extends Component {
    state = {
        username: '',
        password: ''
    };
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            error: ''
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const {username, password} = this.state;
          const formData = {username, password};
          const user = await signUp(formData);
          this.props.setUser(user)

        } catch {
          this.setState({ error: 'Sign Up Failed - Try Again'});
        }
    }
    render() {
        const disable = this.state.password === '';
        return (
          <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <button type="submit" disabled={disable}>Log In</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
      }
      
}