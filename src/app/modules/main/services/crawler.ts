import { HttpService } from '../../../common/HttpService';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import * as $ from 'jquery';

@Injectable()
export class CrawlerService {

	constructor(private http: HttpService) { }

	loadPosts() {
		//Inferring that the base is USD
		return this.http.get('https://news.ycombinator.com').map((response) => {
			let posts = new Array<Post>();

			let html = $('<div/>').html(response._body).contents();
			//here I get the upper part of each individual post
			let upperPostSection = html.find('.athing');
			//here I get the lower part of each individual post
			let lowerPostSection = html.find('.itemlist tr').not('.athing').not('.spacer').not('.morespace');

			//now we can iterate over both collections and start building our model
			for (var i = 0; i < upperPostSection.length; i++) {
				var orderNumber = parseInt($($(upperPostSection[i]).find('.rank')).text());
				var title = $($(upperPostSection[i]).find('.storylink')).text();
				var points = parseInt($($(lowerPostSection[i]).find('.score')).text()) || 0;
				var comments = parseInt($($(lowerPostSection[i]).find('a')[$(lowerPostSection[i]).find('a').length - 1]).text()) || 0;
				posts.push(new Post(title, orderNumber, comments, points));
			}

			return posts;
		});
	}

}