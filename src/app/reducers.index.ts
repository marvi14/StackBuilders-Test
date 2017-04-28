import { combineReducers, ActionReducer } from '@ngrx/store';
import { Observable } from "rxjs";
import { compose } from "@ngrx/core";
import * as fromPosts from './modules/main/reducers/posts';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
	posts: fromPosts.State;
}


/**
 * Because meta reducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
	posts: fromPosts.reducer
};

//Using combineReducers to create the Meta Reducer and export it from the module. The exported Meta Reducer will be used as an argument in provideStore() in the application's root module.
const combinedReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
	return combinedReducer(state, action);
}

export function getPostsFromState(state$: Observable<State>) {
	return state$.select(state => state.posts);
}

// export function getCurrencies(state$: Observable<State>) {
// 	return state$.select(state => state.currencies);
// }

// export function getLoggedUser(state$: Observable<State>) {
// 	return state$.select(state => state.loggedUser);
// }

// Function composition is one of the building blocks of functional programming. It executes a set of functions, putting the returned value of the first function as the argument for the second function. 
// In math, composition of two functions f(x) and g(x) would result in f(g(x)).
// export const getEntities = compose(fromOperations.getEntities, getOperations);
// export const getCurrencyEntities = compose(fromCurrencies.getCurrenciesEntities, getCurrencies);
// export const getSelectedCurrency = compose(fromCurrencies.getSelectedCurrency, getCurrencies);
// export const getCurrencyRates = compose(fromCurrencies.getRates, getCurrencies);
export const getPosts = compose(fromPosts.getPosts, getPostsFromState);