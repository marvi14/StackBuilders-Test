import { Pipe, PipeTransform } from '@angular/core';
import * as fromRoot from '../../../reducers.index';
import { State, Store } from "@ngrx/store";
import { Post } from '../models/post.model';
import * as _ from 'underscore';

@Pipe({
	name: 'query',
})
export class QueryPipe implements PipeTransform {

	/*The currency parameter obtains its value from the selectedCurrency property. 
	An alternative implementation would be to call getSelectedCurrency within the pipe and get the selectedCurrency within the pipe.*/

	transform(posts: Post[], filterOption: number): Post[] {
		switch (filterOption) {
			case 1:
				return _.sortBy(posts.filter(post => post.title.split(' ').length > 5), 'commentsAmount');
			case 2:
				return _.sortBy(posts.filter(post => post.title.split(' ').length <= 5), 'points');
			default:
				// code...
				return posts;
		}
	}
}