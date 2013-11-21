$(document).ready( function() {
	var collegeLinks = $('.institution');
	var colleges = {};
	var collegesStringified = '';
	var result;

	for (var i = 0; i < collegeLinks.length; i++) {
		var $collegeLinkItem = $(collegeLinks[i])
		var collegeUrl = $collegeLinkItem.attr('href')
			.replace(/http:\/\//, '')
			.replace(/www./, '')
			.replace(/\/(.+)/, '')
			.replace(/\//, '');
		var collegeName = $collegeLinkItem.text();
		colleges[collegeUrl] = {
			name: collegeName
		};
	}

	collegesStringified = JSON.stringify(colleges, null, 2);

	$result = $('<div id="scraped-result"/>');
	$result.append( $('<textarea/>').text( collegesStringified ) );
	$('body').append($result);
});
