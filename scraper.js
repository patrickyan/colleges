$(document).ready( function() {
	var collegeLinks = $('.institution');
	var colleges = {};
	var collegeShortNames = {
		"american.edu": "American",
		"babson.edu": "Babson",
		"berkeley.edu": "Berkeley",
		"brown.edu": "Brown",
		"bu.edu": "BU",
		"brandeis.edu": "Brandeis",
		"caltech": "Caltech",
		"cmu.edu": "Carnegie Mellon",
		"case.edu": "Case Western",
		"uc.edu": "Cincinnati",
		"columbia.edu": "Columbia",
		"cornell.edu": "Cornell",
		"dartmouth.edu": "Dartmouth",
		"duke.edu": "Duke",
		"emory.edu": "Emory",
		"georgetown.edu": "Georgetown",
		"gatech.edu": "Georgia Tech",
		"harvard.edu": "Harvard",
		"indiana.edu": "Indiana",
		"jhu.edu": "Johns Hopkins",
		"lehigh.edu": "Lehigh",
		"lse.ac.uk": "LSE",
		"umaryland.edu": "Maryland",
		"mit.edu": "MIT",
		"mcgill.ca": "McGill",
		"umich.edu": "Michigan",
		"missouri.edu": "Missouri (Mizzou)",
		"northeastern.edu": "Northeaster",
		"northwestern.edu": "Northwestern",
		"nyu.edu": "NYU",
		"psu.edu": "Penn State",
		"princeton.edu": "Princeton",
		"rice.edu": "Rice",
		"richmond.edu": "Richmond",
		"risd.edu": "RISD",
		"rochester.edu": "Rochester",
		"rutgers.edu": "Rutgers",
		"stanford.edu": "Stanford",
		"syracuse.edu": "Syracuse",
		"ucdavis.edu": "UCDavis",
		"uci.edu": "UCI",
		"ucla.edu": "UCLA",
		"ucsd.edu": "UCSD",
		"ucsf.edu": "UCSF",
		"ucsb.edu": "UCSB",
		"uchicago.edu": "UChicago",
		"uillinois.edu": "UIllinois",
		"utexas.edu": "UT Austin",
		"illinois.edu": "UIUC",
		"unc.edu": "UNC",
		"upenn.edu": "UPenn",
		"usc.edu": "USC",
		"tufts.edu": "Tufts",
		"vanderbilt.edu": "Vanderbilt",
		"virginia.edu": "UVA",
		"wfu.edu": "Wake Forest",
		"wustl.edu": "WashU",
		"wisc.edu": "Wisconsin",
		"yale.edu": "Yale",
		"x": "x"
	};
	var collegesStringified = '';
	var result;

	for (var i = 0; i < collegeLinks.length; i++) {
		var $collegeLinkItem = $(collegeLinks[i])
		var collegeUrl = $collegeLinkItem.attr('href')
			.replace(/http:\/\//, '') //remove http://
			.replace(/www./, '') //remove www.
			.replace(/web./, '') //remove web.
			.replace(/\/(.+)/, '') //remove everything after slash
			.replace(/\//, '') //remove trailing slash
			;
		var collegeName = $collegeLinkItem.text();
		colleges[collegeUrl] = {
			name: collegeName
		};
		if (collegeShortNames[collegeUrl]) {
			colleges[collegeUrl]['short_name'] = collegeShortNames[collegeUrl];
		}
	}

	collegesStringified = JSON.stringify(colleges, null, 2);

	$result = $('<div id="scraped-result"/>');
	$result.append( $('<textarea/>').text( collegesStringified ) );
	$('body').append($result);
});
