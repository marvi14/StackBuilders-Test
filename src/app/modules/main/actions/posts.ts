import { Action } from '@ngrx/store';
import { Post } from '../models/post.model';

export const ActionTypes = {
	LOAD_POSTS: 'Load posts from url',
	LOAD_POSTS_COMPLETE: 'Set posts to store'
};

export class LoadPostsAction implements Action {
	type = ActionTypes.LOAD_POSTS;

	constructor(public payload: string) { }
}

export class LoadPostsCompleteAction implements Action {
	type = ActionTypes.LOAD_POSTS_COMPLETE;

	constructor(public payload: Array<Post>) { }
}

export type Actions = LoadPostsAction | LoadPostsCompleteAction