import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsComp from './Components/NewsComp';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <NewsComp pageSize={11} />
      </>
    )
  }
}
