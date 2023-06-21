// action value
const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";
const PLUS_N = "PLUS_N";
const MINUS_N = "MINUS_N";

// action creator : action value를 return하는 함수
// export 필요 없음
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload: payload,
  };
};

export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload,
  };
};

// 초기 상태값(state)
// const [counter, setCounter] = useState(0)
const initialState = {
  number: 0,
};

// 리듀서 : 'state에 변화를 일으키는' 함수
// (1) state를 action의 type에 따라 변경하는 함수

// input : state와 action
// action 객체라는 것은 action type을 payload 만큼 처리하는 것
// ex : payload가 3일  경우, plus or minus 3
const counter = (state = initialState, action) => {
  //   console.log(state);
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
    case PLUS_N:
      return {
        number: state.number + action.payload,
      };
    case MINUS_N:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default counter;

// App.ex.1-14.jsx
