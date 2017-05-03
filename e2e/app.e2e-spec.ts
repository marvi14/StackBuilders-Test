import { StackbuildersTestPage } from './app.po';
import { element, by, protractor, browser } from 'protractor';

describe('stackbuilders-test App', () => {
	let page: StackbuildersTestPage;

	beforeEach(() => {
		page = new StackbuildersTestPage();
	});

	it('Table should have 30 rows as no filter is selected', () => {
		element.all(by.css('.tbl-content tr')).count().then(function(rowCount) {
			expect(rowCount).toBe(30);
		});
	});

	it('Table should have 30 or less rows as a filter was applied', () => {
		var selectDropdownElement = element(by.id('mainselection'));
		selectDropdownElement.all(by.tagName('option')).then(function(options) {
			options[0].click();
		});

		element.all(by.css('.tbl-content tr')).count().then(function(rowCount) {
			expect(rowCount).toBeLessThanOrEqual(30);
		});
	});
});
