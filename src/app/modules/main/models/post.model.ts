export class Post {
	public title: string;
	public orderNumber: number;
	public commentsAmount: number;
	public points: number;

	constructor(title: string, orderNumber: number, commentsAmount: number, points: number) {
		this.title = title;
		this.orderNumber = orderNumber;
		this.commentsAmount = commentsAmount;
		this.points = points;
	}
}