// jotto app testing

/* input.js */

import React , { Component } from 'react'
import { connect } from 'react-redux';

class Input extends Component {
    render () {
        const contents = this.props.success ? null : (<form>
            <input></input>
            <button></button>
        </form>);
        return <div data-test="component-input">{contents}</div>
    }
}

const mapStateToProps = ({ success }) => ({
    success
})
/* actions/index.js */
export const actionTtypes = {
    CORRECT_GUESS = 'CORRECT_GUESS',
    GUESS_WORD:'GUESS_WORD'
}

/* secretWord.reducer */
import {actionTypes} from '../actions';
export default (state=[],action) => {
    switch(action.type){
        case actionTypes.Guess_word:
            return [...state,action.payload]
        default:
            return state;
    }
}
 
/* reducers/guessedWord.reducer.js */

export const guessWord = guessedWord => (dispatchEvent,getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord,secretWord);

    dispatch({
        type:actionTypes.GUESS_WORD,
        payload: {guessedWord,letterMatchCount}
    })

    if(guessWord === secretWord){
        dispatch({type:actionTypes.CORRECT_GUESS})
    }
}

/* secretWord.reducer.js */

export default (state=null,action) => {
    return state;
}

/* inegration.test.js */

import {storeFactory } from '..test/testUtil';
import {guessWord } from './actions';

describe('guessword action dispatcher',() => {
    const secretWord = "party";
    const unsuccessfulGuess = "train"

    describe('no guessed words',() => {
        let store;
        let initialState = {secretWord}
        beforeEach(() => {
            store = storeFactory(initialState)
        });
        it('update state correctly for unsuccessful guess',() => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const expectedState = {
                ...initialState,success:false,
                guessedWords:[{
                    guessedWord:unsuccessfulGuess,
                    letterMatchCount:3
                }]
            };
            const newState = store.getState();
            expect(newState).toEqual(expectedState);
        })
        it('should update state correctly for successful guess',() => {
            
        })
    })
    describe('some guessed words',()=>{
        const giessedWords = [{ guessWord : 'agile',letterMatchCount:1}]
        const initialState = {guessedWords , secretWord }
        it('update state correctly for unsuccessful guess',() => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success : false,
                guessedWord : [...guessedWords , { guessedWord : unsuccessfulGuess , letterMatchCount : 1}]

            }
        expect(newState).toEqual(exptectedState);
        })
        it('should update state correctly for successful guess',() => {

        })
    })
});

/* testUtils.js */

import {createStore ,applyMiddleware} from 'redux';

import rootReducer from '../src/reducres';
import { middlewares } from '../src/congifgureStore'; 

export const storeFactory = initialState => {
    return createStore(rootReducer,initialState)
}

/* helpers/index.js */

export const getLetterMatchCount = (guessedWord,secretWord) => {
    const secretLetterSet = new Set(sectertWord.split(''));
    const guessedLetterSEt = new Set(guessedWord.split(''));
    return [...secretLetterSet].filter(letter => guessedLetterSEt.has(letter)).length
}

/* helpers/index.test.js */

import { getLetterMatchCount } from './';

describe('getLetterMatchCount',() => {
    const secretWord = "party";
    it('should return correct count when there are no matching letters',() => {
        const letterMatchCount = getLettersMatchCount('bones',secretWord);
        expect(letterMatchCount).toBe(0);
    });

    it('should return correct count where there are 3 matching letters',() => {
        const letterMatchCount = getLetterMatchCount('train',secretWord);
        expect(letterMatchCount).toBe(3);
    });

    it('should return correct count when there are duplicate ltters in the guessed word',() => {
        const letterMatchCount = getLetterMatchCount('parka',secretWord);
        expect(letterMatchCount).toBe(3);
    });

});

/* input.test.js */

import React from 'react';
import { shallow } from 'enzyme';

import  { findByTestAttr , storeFactory } from '../test/testUtils';
import Input from './input';

const setup = (initialState={}) => {
    const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);
    const store = createStoreWithMiddleware(initialState);  
    const wrapper = shallow(<Input store={store} />).dive();
    // console.log(wrapper.debug());
    return wrapper;
}

//setup();

describe('render',() => {
    describe('word has not been guessed',() => {
        let wrapper;

        beforeEach(() => {
            const initialState = {success : false};
            wrapper = setup(initialState);
        })
        it('renders component without error',() => {
            const  component = findByTestAttr(wrapper,'component-input');
            expect(component.length).toBe(1);
        })
        it('renders input box',() => {
            const  inputBox = findByTestAttr(wrapper,'input-box');
            expect(inputBox.length).toBe(1);
        })
        it('renders submit button',() => {
            const  submitButton = findByTestAttr(wrapper,'input-box');
            expect(submitButton.length).toBe(1);
        })
    })
    describe('word has been guessed',() => {
        let wrapper;
        beforeEach(() => {
            const initialState = {success : true};
            wrapper = setup(initialState);
        })
        it('should render component without errors',()=>{
            const component = findByTestAttr(wrapper,'component-input');
            expect(component.length).toBe(1);
        })
        it('should not render input box',()=>{
            const inputBox = findByTestAttr(wrapper,'input-box')
            expect(inputBox.length).toBe(0)
        })
        it('should not render submit button',()=>{
            const submitButton = findByTestAttr(wrapper,'submit-button');
            expect(submitButton.length).toBe(0);
        })
    })
});

describe('update state', () => {

});

it('',() => {

})


/* configureStore.js */

import { createStore , applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export const middleWares = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);
export default createStoreWithMiddleware(rootReducer)