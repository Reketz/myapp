import { useReducer, useState } from 'react';

function reducer(state, action) {
  if (action.type === 'add') {
    return [...state, action.value];
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, ["teste"]);
  const [value, setValue] = useState('');

  return (
    <div>
      <input type="text" name="text" value={value} 
        onChange={
          (evt) => {
            setValue(evt.target.value)
          }
          } />
      <button onClick={() => {
        dispatch({ type: 'add', value })
      }}>
        Add
      </button>
      {state.map(item => <li>{item}</li>)}
    </div>
  );
}
