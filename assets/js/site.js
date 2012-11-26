$(function() {

    // Prepare
    var History = window.History; // Note: We are using a capital H instead of a lower h
    if ( !History.enabled ) {
         // History.js is disabled for this browser.
         // This is because we can optionally choose to support HTML4 browsers or not.
        return false;
    }

    // Bind to StateChange Event
    History.Adapter.bind(window,'statechange',function() { // Note: We are using statechange instead of popstate
        var State = History.getState()
        $('#content').load(State.url);
		$('#current').html(State.url);
    });
		
    $('a').click(function(e) {
		var pat = /^https?:\/\//i;
		if (!pat.test($(this).attr('href')))
		{
        	e.preventDefault();
        	History.pushState(null, $(this).text(), $(this).attr('href'));
		}
		else
		{
			e.preventDefault();
			alert("Loading an external page...");
			window.location.replace($(this).attr('href'));
		}
    });
});
