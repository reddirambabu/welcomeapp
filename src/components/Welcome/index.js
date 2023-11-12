import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribe: false}

  toggleButton = () => {
    this.setState(previous => ({isSubscribe: !previous.isSubscribe}))
  }

  render() {
    const {isSubscribe} = this.state
    const buttonText = isSubscribe ? 'Subscribed' : 'Subscribe'

    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.toggleButton}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
