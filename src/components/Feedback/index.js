/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
/* eslint-disable arrow-body-style */
// Write your React code here.
// eslint-disable-next-line no-unused-vars
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isselected: false}

  ClickEmoji = () => {
    this.setState({
      isselected: true,
    })
    console.log('clicked')
  }

  FeedbackPage = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-box">
        <h1>How Satisfied are you with our Customer Support Performance ?</h1>
        <ul className="emoji-box">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                className="button"
                type="button"
                onClick={this.ClickEmoji}
              >
                <img className="emoji" src={emoji.imageUrl} alt={emoji.name} />
                <h1>{emoji.name}</h1>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  ThankyouPage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div>
        <img src={loveEmojiUrl} className="heart" alt="love emoji" />
        <h1 className="thankyou-text">Thank You !</h1>
        <p>
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isselected} = this.state
    return (
      <div className="bg-container">
        <div className="inner-box">
          {isselected ? this.ThankyouPage() : this.FeedbackPage()}
        </div>
      </div>
    )
  }
}
export default Feedback
