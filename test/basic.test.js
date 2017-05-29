/**
 * Created by ndyumin on 29.05.2017.
 */

import {commandCreator, commandMiddleware} from '../src';
import {applyMiddleware, createStore} from 'redux';

const initial = 0;

const reducer = (state = initial, update) => {
    switch(update.type) {
        case 'inc':
            return state + 1;
    }
    return state;
};

describe('basic behaviour', () => {
    it('runs an executor and provides current redux state', () => {
        const store = createStore(
            reducer,
            applyMiddleware(commandMiddleware)
        );

        const command = commandCreator(state => Promise.resolve(state * 6));

        expect(store.getState()).toEqual(0);

        store.dispatch({ type: 'inc' });

        expect(store.getState()).toEqual(1);

        store.dispatch(command()).then(result => {
            expect(result).toBe(6);
        })

    });
});