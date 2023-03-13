import React, { Component } from 'react';
// import할 파일들

class Toc extends Component {
  render(){
    console.log('Toc render');

    let lists = [];
    const contentArr = this.props.data;

    contentArr.forEach(element => {
      lists.push(
      <li key={element.id}>
        <a 
        href={'/content/'+element.id}
        onClick={function(e){
          e.preventDefault();
          this.props.onChangePage(element.id);
        }.bind(this)}
        >{element.title}</a></li>);
      // 반복문으로 자식 태그를 생성 할 때는 key값을 주어야 함
    });

    return (
      <ul>
        {lists}
      </ul>
    );
  }
}

export default Toc;
