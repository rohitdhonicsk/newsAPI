import React, { Component } from 'react';
import Navbar from './navbar'
import Footer from './footer'
import Hero from './hero'
import Info from './info'
class Dummy extends Component {
  render() {
    return (
      <div>
        <div><Navbar /></div>
        <div><Hero /></div>
        <div><Info /></div>
        <div><Footer /></div>
      </div>

    )
  }
}
export default Dummy;