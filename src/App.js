import React, { Component } from 'react';
import './App.css'; //App 컴포넌트의 디자인
import Toc from './components/Toc';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';

class App extends Component {
  constructor(props) {
    // Component 생성자, state 초기화
    super(props);
    this.state = {
      mode: 'welcome', // 페이지 모드
      selected_content_id: 2,
      subject: { title: 'WEB', sub: 'World wide web!!' },

      welcome: { title: 'welcom', desc: 'Hello, React!!!' },

      // database
      contents: [
        { id: 0, title: 'HTML', desc: 'HTML is HyperText ...' },
        { id: 1, title: 'CSS', desc: 'CSS is for design ...' },
        { id: 2, title: 'Javascript', desc: 'Javascript is for interactive ...' }
      ]
    } // 
  }
  getReadContent() {
    // debugger;
    // for (let index = 0; index < this.state.contents.length; index++) {
    //   if (this.state.selected_content_id === index) {
    //     return this.state.contents[index];
    //   }
    // }
    let result = null;
    this.state.contents.forEach((elem) => {
      if (this.state.selected_content_id === elem.id) {
        result = elem;
      }
    });

    return result;
  }

  getContent() {
    let _title, _desc, _article, _content = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if (this.state.mode === 'read') {
      _content = this.getReadContent();
      _title = _content.title;
      _desc = _content.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        // setState로 배열에 추가

        this.setState({
          contents: this.state.contents.concat({
            id: this.state.contents.length,
            title: _title,
            desc: _desc
          }),
          mode: 'read',
          selected_content_id: this.state.contents.length
        });

      }.bind(this)}></CreateContent>
    }
    else if (this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function (_id, _title, _desc) {
        // setState로 배열에 추가
        let updateContents = Array.from(this.state.contents);
        updateContents[_id].title = _title;
        updateContents[_id].desc = _desc;

        this.setState({
          contents: updateContents,
          mode: 'read'
        });

      }.bind(this)}></UpdateContent>
    }

    return _article;
  }
  render() {
    console.log('App render');

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
        <Control onChangeMode={function (mode) {
          if (mode === 'delete') {
            if (window.confirm('삭제하시겠습니까?')) {
              let deleteContents = Array.from(this.state.contents);
              deleteContents.splice(this.state.selected_content_id, 1);

              deleteContents.forEach((elem, idx) => {
                elem.id = idx;
              })

              this.setState({
                mode: 'welcome',
                contents: deleteContents
              });
            }
          }
          else {
            this.setState({
              mode: mode
            });
          }
        }.bind(this)}></Control>
        {/* <Content title={_title} desc={_desc}></Content> */}
        {this.getContent()}
      </div>
    );
  }
}

export default App;