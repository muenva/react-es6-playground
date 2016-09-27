> React ES6 Playground

## Prerequisites
- [ Git ](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git#Installing-on-Windows)
- [ Node.js ](https://nodejs.org/en/)
- Your favourite IDE (or [Atom](https://atom.io/))

## Setup
In command prompt

0. Go the folder you like to have the project installed

1. `git clone https://github.com/muenva/react-es6-playground.git`

2. `npm install`

3. `npm start`

```import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducer'

const loggerMiddleware = createLogger()

export default function configureStore (preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}```

