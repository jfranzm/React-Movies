import { Component } from 'react';

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
        alert(JSON.stringify(this.state))
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