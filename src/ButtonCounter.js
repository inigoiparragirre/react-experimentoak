import React, { Component } from 'react';
import Button from './Button';

export default class ButtonCounter extends Component {
  constructor() {
    super()
    this.state = { clicks: 0 }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ clicks: ++this.state.clicks })
  }

  render() {
    return (
      <Button
        onClick={this.handleClick}
        text={`${this.state.clicks} aldiz klikatu duzu!`}
      />
    )
  }
}