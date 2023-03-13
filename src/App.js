import React, { Component } from 'react';
import './App.css'; //App 컴포넌트의 디자인
import Toc from './components/Toc';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    // Component 생성자, state 초기화
    super(props);
    this.state = {
      mode: 'read', // 페이지 모드
      selected_content_id: 2,
      subject: { title: 'WEB', sub: 'World wide web!!' },

      welcome: { title: 'welcom', desc: 'Hello, React!!!' },

      contents: [
        { id: 0, title: 'HTML', desc: 'HTML is HyperText ...' },
        { id: 1, title: 'CSS', desc: 'CSS is for design ...' },
        { id: 2, title: 'Javascript', desc: 'Javascript is for interactive ...' }
      ]
    } // 
  }
  render() {
    console.log('App render');
    let _title, _desc = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if (this.state.mode === 'read') {
      this.state.contents.forEach((elem, idx) => {
        if (this.state.selected_content_id === idx) {
          _title = elem.title;
          _desc = elem.desc;
        }
      })

    }

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            // alert('hihihi');
            this.setState({
              mode: 'welcome'
            })
          }.bind(this)}//링크를 클릭했을 때 호출 될 이벤트 함수 props
        >
        </Subject>
        <Toc
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selected_content_id: id
            })
          }.bind(this)}
        >
        </Toc>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;