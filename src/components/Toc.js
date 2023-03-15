import React, { Component } from 'react';
// import할 파일들

class Toc extends Component {
  /** 
   * 해당 컴포넌트가 렌더 될지 말지를 결정함
   * @param {Object} newProps 변경된 컴포넌트의 props
   * @param {Object} newState 변경된 컴포넌트의 state
   * @returns {boolean} render 호출 여부
  */
  shouldComponentUpdate(newProps, newState){
    // 해당 컴포넌트가 렌더 될지 말지를 결정함
    // this의 props, state와 비교하자, this는 이전의 값에 접근
    console.log(newProps, newState);
    if(this.props.data === newProps.data){
      // 이런 식으로 비교하려면 비교대상이 객체일 때
      // props와 state를 수정될 때 마다 새로운 객체를 만들어야 할 것
      // 배열 -> Array.from, 객체 -> Object.assign으로 깊은 복사(정적 메서드)
      return false;
    }
    return true;
  }

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
