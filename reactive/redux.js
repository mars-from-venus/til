// ##리덕스란?
//     효율적으로 상태관리를 해줄 수 있는 라이브러리

// ##리덕스 개념
// 1)액션(action): 상태의 변화가 필요할 때 발생하는 것을 액션(action)이라고 한다.
//                액션에는 type 속성을 필수로 가지고 있어야 한다. 이 외의 속성은 자유롭게 추가할 수 있다.
//                다음은 todo라는 객체에 id와 text를 추가해준것.
//                {
//                 type: "ADD_TODO",
//                 todo:{
//                     id: 0,
//                     text: "리덕스 공부 시작!"
//                 }
//                }
// 2)액션 생성 함수(Action Creator): 액션 생성 함수는 액션(Action)을 생성해주는 함수로, 파라미터를 받아 액션 객체 형태로 만들어준다.
//                               AddTodo 함수는 todo라는 인자를 받아 액션을 생성해준다. 액션 생성 함수를 사용하지 않고도 액션을
//                               발생시킬 때마다 액션 객체를 직접 작성하여 사용할 수 있다.
//                               export const AddTodo = (todo) => {
//                                   return{
//                                       type:'ADD_TODO',
//                                       todo  
//                                   };
//                               };
// 3)리듀서(Reducer): 변화를 일으키는 함수로, state와 action 두 개의 인자를 받아온다. 이렇게 리듀서(Reducer)는 전달받은 인자를 상태와
//                  액션을 참고해 새로운 상태를 반환해준다.
//                  function TodoReducer(state,action){
//                      switch(action.type){
//                          case 'ADD_TODO':
//                              return{
//                                  ...state,
//                                  todos:state.todos.concat({id:id++,text:payload.text})
//                              };
//                              default:
//                                  return state;
//                      }
//                  }
// 4)스토어(Store): 리덕스에서는 애플리케이션 하나당 하나의 스토어를 만들 수 있다.
//                이 스토어는 현재 애플리케이션의 상태와 리듀서(Reducer) 스토어의 내장 함수를 포함한다.
// 5)디스패치(Dispatch): 스토어(Store)의 내장 함수 중 하나로, 액션을 발생시키는 역할을 한다. 디스패치에는 액션(Action)을 파라미터로 전달한다.
// 6)구독(Subscribe): 구독 또한 스토어(Store)의 내장 함수로 함수 형태의 값을 함수의 인자로 받는다. Subscribe에 특정 함수를 전달해주면,
//                   액션이 디스패치될 때마다 전달해준 함수를 호출한다.

// ##리덕스 규칙
// 1)애플리케이션 하나당 스토어는 하나 : 여러개의 스토어 만들어 사용할 수 있지만 권장되지 않는다.
// 2)상태는 읽기 전용: 기존의 상태는 유지하고 새로운 상태를 업데이트해주는 방식을 사용함으로써 개발자 도구를 통해 Undo/Redo가 가능하다.
//                 절대로 직접 수정하면 안된다.
// 3)리듀서는 순수함수: 순수 함수의 반환 값은 전달받은 파라미터에만 의존해야 하며, 같은 파라미터의 결과값은 항상 동일해야 한다.
//                 리듀서 또한 똑같은 파라미터를 전달받아 호출된다면 결과값으로 같은 값을 반환해야 한다.

// ##덕스 패턴(Duck's Pattern)
// 액션(Action Type), 액션 생성 함수, 리듀서(Reducer)를 하나의 파일안에 작성하는 것을 의미