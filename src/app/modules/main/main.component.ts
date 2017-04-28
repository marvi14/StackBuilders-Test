import { Component, ViewEncapsulation } from '@angular/core';
import { State, Store } from "@ngrx/store";
import { Observable } from "rxjs";
/* In order to access the application state, reference the reducers folder again, accessing all the exported members from it though index.ts */
import * as fromRoot from '../../reducers.index';
import * as postsActions from './actions/posts';
import { Post } from './models/post.model';

@Component({
	selector: 'marvi-main-component',
	templateUrl: './main.template.html'
})

export class MainComponent {

	public posts: Observable<Post[]>;
	public filterOption: number = 0;
	public filters: any[];
	public automaticUpdates: boolean = false;

	private automaticUpdatesInterval: any;

	constructor(private _store: Store<fromRoot.State>) {
		//_store.let executes getEntities and returns its value.
		this.posts = _store.let(fromRoot.getPosts);
		_store.dispatch(new postsActions.LoadPostsAction(null));

		this.filters = [{
			id: 0,
			description: 'Show all posts'
		}, {
			id: 1,
			description: 'More than five words in the title ordered by amount of comments first'
		}, {
			id: 2,
			description: 'Less than or equal to five words in the title ordered by points'
		}];
	}

	toggleAutomaticUpdates() {
		this.automaticUpdates = !this.automaticUpdates;
		if (this.automaticUpdates) {
			this.automaticUpdatesInterval = setInterval(() => this._store.dispatch(new postsActions.LoadPostsAction(null)), 10000);
		} else {
			clearInterval(this.automaticUpdatesInterval);
		}
	}
}
