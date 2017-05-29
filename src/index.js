/**
 * Created by ndyumin on 29.05.2017.
 */

import Symbol from 'es6-symbol';

const type = Symbol('command');

export const commandMiddleware = store => next => action =>
    action.type  === type
        ? action.executor(store.getState(), ...action.args)
        : next(action);

export const commandCreator = executor => (...args) => ({
    type,
    args,
    executor
});
