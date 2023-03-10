import React, { Component } from 'react';
import './App.css'; //App 컴포넌트의 디자인
import Toc from './components/Toc';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <Toc></Toc>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;