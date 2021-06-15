import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, decremented } from './features/counter/counter-slice'
import { reset as counterReset } from './features/counter/counter-slice'
import { amountAdded } from './features/counter/counter-slice'
import { createApi } from '@reduxjs/toolkit/query/react'
import logo from './logo.svg'
import './App.css'


function App() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => dispatch(incremented())}>
            count is: {count}
          </button>
          <button type="button" onClick={() => dispatch(decremented())}>
            -
          </button>
          <button type="button" onClick={() => dispatch(counterReset())}>
            reset
          </button>
          <button type="button" onClick={() => dispatch(amountAdded(3))}>
            add 3
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
