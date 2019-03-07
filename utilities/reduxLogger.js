
const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
};

import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux'


export default applyMiddleware(
    thunk,
    logger,


)