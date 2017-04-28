import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { CrawlerService } from "../services/crawler";
import * as postsActions from "../actions/posts";
import { Post } from '../models/post.model';

@Injectable()
export class PostsEffects {
	constructor(private _actions: Actions, private _crawlerService: CrawlerService) { }

	//The effects for different states are singletons that 'intercept' dispatched actions that are being sent to the reducer.

	@Effect() loadPosts = this._actions.ofType(postsActions.ActionTypes.LOAD_POSTS).switchMap(() => this._crawlerService.loadPosts()
		.map((posts) => new postsActions.LoadPostsCompleteAction(posts))
		.catch(() => Observable.of(new postsActions.LoadPostsCompleteAction(new Array<Post>())))
	);

}