import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import * as posts from '../actions/posts';
import { Post } from '../models/post.model';



export interface State {
	posts: Array<Post>
};

const initialState: State = {
	posts: new Array<Post>()
};


export function reducer(state = initialState, action: posts.Actions): State {
	switch (action.type) {

		case posts.ActionTypes.LOAD_POSTS: {
			return {
				posts: state.posts
			};
		}
		case posts.ActionTypes.LOAD_POSTS_COMPLETE: {
			return {
				posts: action.payload as Array<Post>
			};
		}
		default:
			return state;
	}

}


export function getPosts(state$: Observable<State>) {
	return state$.select(s => s.posts);
}
