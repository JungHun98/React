# React
- React는 페이스북에서 만든 Javascript UI 라이브러리
- 정보가 많은 웹 페이지라면 HTML 코드가 정보량에 따라 기하급수적으로 늘어난다.
- 복잡한 HTML코드를 따로 빼낼 수 있다면 어떨까? `Component`
  - 가독성을 획기적으로 증가시킬 수 있다.
  - 재사용이 용이해짐 - 같은 코드를 여러번 사용 할 필요가 없다.
  - 독립되어 있기 때문에 유지보수가 쉬워짐
- 공부전략: 코딩 -> 실행 -> 배포

## npm
- Node.js에서 만들어진 프로그램을 명령어로 쉽게 다운 받을 수 있도록 도와주는 일종의 앱스토어

- create-react-app은 개발자가 만든 컴포넌트를 id가 root인 태그에 들어가도록 설정되어있다.
```js
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Game />); // root에 <Game> 컴포넌트를 렌더링한다.
```
- 컴포넌트들은 `/src/...`에서 만들 수 있다.
- `index.js` - 진입파일
```
npm run build
```
- 명령어를 입력하면 `build`파일이 생성되는데, 실제로 서비스 할 때 `build`파일에 있는 파일들을 사용해야함
```
npm install -g serve
serve -s build
```
- build 파일을 root 디렉토리로 serve라는 서버를 생성

- React가 없다면???
   - HTML 문서가 어마어마하게 긴 상황인데 React가 없다면???

## :star: 컴포넌트 만들기
```js
class Subject extends Component {
  render() {
    return (
      <header>
          코드 ...
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        Hello world!!!
      </div>
    );
  }
}

export default App;

```
- Component는 `render` 함수를 반드시 포함해야함
- Component를 만들 때는 반드시 **하나**의 최상위 태그만 사용해야한다.
- 웹 브라우저가 React 파일들을 보여주는 게 아니라 React가 웹 브라우저에게 HTML 파일을 알려줌
- React 컴포넌트는 자바스크립트가 아님, 유사 자바스크립트(jsx)
- create-react-app이 jsx를 js로 변환해줌
- 자바스크립트는 HTML 태그를 반환할 수 있는 기능이없다. 문장열로 반환해야 함

## :star: props
- 언제나 같은 내용을 보여주는 태그는 재사용성이 떨어진다.
- 컴포넌트에 함수처럼 인자를 전달해 매개변수로 사용 할 수 있다면 얼마나 좋을까?...
  - 가능 !!
```js
class Subject extends Component {
  render() {
    return (
      <header>
          <h1>{this.props.title}</h1>
          {this.props.sub}
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Toc></Toc>
        <Content></Content>
      </div>
    );
  }
}
// 위 쪽 코드와 같은 결과!
```
- `title`, `sub` : props
- `{this.props.name}` - name props의 값을 나타내는 jsx문법

## :star: state
- props - 사용자가 컴포넌트를 사용하는 입장에서 중요함 
- state - 구현자의 입장에서 props에 따라 내부에서 구현이 달라짐 
- props와 state는 철저하게 분리되어야 한다.

## :star: event
- props, state의 값이 변경하면 그 state를 가지고 있는 component의 render함수가 다시 호출이된다.
  - 해당 컴포넌트의 자식 컴포넌트들의 render도 다시 호출됨
  - 웹 페이지가 다시 그려진다!
- 컴포넌트는 자바스크립트와 이벤트 등록이 다른 방식임, 컴포넌트가 처음 렌더링 될 때 이벤트 리스너를 제공한다.
## bind 함수
- render 함수 내부에서 this는 컴포넌트를 가리킴
- 이벤트 함수에서의 this는 undefine 
- `function.bind(Obj)` : 함수 내부에서 this에 Obj를 부여하는 함수를 새롭게 만들어진다.

## setState
- 왜 컴포넌트 생성한 뒤 동적으로 State에 직접 접근하여 수정하면 안될까?
  - 리액트가 값이 바뀌었는 지 모른다.
  - 값이 바뀌었는 지 모르기 때문에 `render`함수가 호출되지 않는다. == 웹 페이지가 수정되지 않는다.
