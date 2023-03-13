import React, { Component } from 'react';

class Subject extends Component {
  render() {
    console.log('Subject render');

    return (
      // <header>
      //     <h1><a href='/'>{this.props.title}</a></h1>
      //     {this.props.sub}
      // </header>
      <header>
          <h1><a href='/' onClick={function(event){
            console.log(event);
            event.preventDefault(); // event의 Tag 기본 동작을 막는다.
            // this.state.mode = 'welcome';
            // 안바뀜
            this.props.onChangePage();
            // this.setState({
            //   mode: 'welcome'
            // })
            // 이벤트 함수는 this의 값은 undifined임
            // bind(this) 함수를 이용해 컴포넌트로 세팅
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
    );
  }
}

export default Subject;