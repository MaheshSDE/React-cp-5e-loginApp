// Write your code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {isLogin: true}

  onClicking = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    const textContent = isLogin ? 'Please Login' : 'Welcome User'
    const textLogin = isLogin ? 'Login' : 'Logout'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">{textContent}</h1>
          <button className="button" type="button" onClick={this.onClicking}>
            {textLogin}
          </button>
        </div>
      </div>
    )
  }
}
export default Home
