import React, { Component } from 'react'

export default class register extends Component {
  render() {
    return (
      <div>
        <div class="mb-3">
            <h1>Enter your email address to register to join the nice list!</h1>
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <div class="form-box">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                <button class="btn">Submit</button>
            </div>
        </div>
        </div>
    )
  }
}
