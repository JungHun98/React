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

## props vs state
- props: read-only, component안에서 전달된 props는 변경 불가, 상위 컴포넌트에서 이벤트로 변경
- state: `setState`로만 값을 변경
- 공통점: `render`함수의 호출을 유발함, UI를 변경할 수 있다.

# class vs function style coding
- 클래스는 React의 많은 기능을 사용가능, class를 알아야 함
- 함수방식은 state, file cycle API(CRUD)를 다룰 수 없었음
  - hook이라는 최신 기능이 추가되면서 클래스 방식과 대등한 기능을 사용할 수 있게됨
  - 그러면서 함수의 간편함을 유지함
- 컴포넌트를 표현할 때 클래스와 함수 중 선택할 수 있게 돼 확장성이 넓어짐

## life cycle
- class
  - componentWillMount -> render -> componentDidMount (초기)
  - souldComponentUpdate: render 함수를 호출할지의 여부
  - componentWillUpdate -> render -> componentDidUpdate (업데이트)
  - 적당한 타이밍에 우리가 원하는 코드를 실행 할 수 있었다.
- function
  - 이전에는 class처럼 life cycle을 다룰 API가 없었다
  - `useEffect`
```js
function App(){
  let [funcShow, setFuncShow] = userState(true);
  let [classShow, setClassShow] = userState(true);

  return (
    <div className="App">
      <input type="button" value="remove func" onClick={function(){
        setFuncShow(false);
      }}></input>
      <input type="button" value="remove comp" onClick={function(){
        setClassShow(false);
      }}></input>

      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  )
}



// 함수는 자기 자신이 클래스의 렌더함수와 같이 동작한다.
function FuncComp(props){
  // 함수에서도 props는 매개변수로 사용가능, state는?
  // 함수는 props를 화면에 보여 줄때만 사용했었다. 다양한 기능은 class로 사용했었음

  // Hook !!! 내장 Hook과 사용자 정의 Hook이 있다. 내장 Hook의 이름은 'use'로 시작함
  let numberState = useState(/*state의 초기값*/props.initNumber);
  let number = numberState[0]; // state value
  let setNumber = numberState[1];// setState()

  // let [number, setNumber] = useState(/*state의 초기값*/props.initNumber);

  // numberState에는 두 개의 값을 갖는 배열이 저장된다 [state의 초기값, function] 초기값을 전달하지 않으면 [0] == undifined
  // 배열의 두 번째 값은 state의 상태를 변경하는 함수를 저장한다.

  // state를 만들 때 마다 useState를 사용해야 한다.

  // Life cycle API

  // side effect, 여러개 설치 가능
  useEffect(function() { 
  // class의 componentDid함수의 기능과 같음
  // 웹 페이지가 render될 때 마다 실행된다. (초기에 실행 & render 될 때 마다 실행)
  // 함수의 렌더와 동떨어진 것을 다룬다.
    
    return function(){
    // clean up, 컴포넌트 함수가 다시 호출 될 때 먼저 수행 될 작업
    }
  } ,[number]);

  // skipping Effects useEffect가 다시 호출됐을 때 두 번째 인자로 넘겨진 요소들의 값이 바뀌지 않았다면 useEffect의 콜백 함수가 실행되지 않음!
  // 두 번째 인자에 빈 배열을 전달한다면 초기 한 번만 호출됨, 컴포넌트가 소멸될 때 clean up 함수를 실행한다.
  return (
    <div>
      <p>
        Number : {props.initNumber}

        <input type="button" value="random" onClick={
          function(){
            setNumber(Math.random());
            // 이러면 numberState[0]의 값이 전달한 인자로 변경됨!
            // 함수 다시 호출!
          }
        }></input>
      </p>
    </div>
  )
}

class ClassComp extends React.Component{

  state = {
    number: this.props.initNumber
  }
  
  // class의 life cycle API
  componentWillMount(){
    // 컴포넌트의 render 호출 전에 이루어져야 할 동작 override
  }
  componentDidMount(){
    // 컴포넌트의 render 호출 후에 이루어져야 할 동작 override
  }
  souldComponentUpdate(nextProps, nextState) {
    // 컴포넌트의 render 함수 호출 여부
  }

  componentWillUpdate(prevProps, prevState) {
    // state update 이전에 호출될 함수
  }

  componentDidUpdate(prevProps, prevState) {
    // state update 이후에 호출될 함수
  }

  componentWillUnmount(){
    // 컴포넌트가 소멸 될 때 호출
  }

  // state가 변경될 때 마다 호출!
  render(){
    return (
      <div>
        <p>
          Number : {this.props.initNumber}
          State: {this.state.number}
        </p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({
              number: Math.random()
            })
          }.bind(this)
        }></input>
      </div>
    )
  }
}
```

