import React from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, decremented } from './features/counter/counter-slice'
import { reset, added } from './features/counter/counter-slice'

function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.counter.value);

  return (
    <div>
      <button type="button" onClick={() => dispatch(incremented())}>
        count is: {count}
      </button>
      <button type="button" onClick={() => dispatch(decremented())}>
        -
      </button>
      <button type="button" onClick={() => dispatch(reset())}>
        reset
      </button>
      <button type="button" onClick={() => dispatch(added(3))}>
        add 3
      </button>
    </div>
  )
}

export default Counter;