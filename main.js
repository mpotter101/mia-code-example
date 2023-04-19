
$(window).on('load', function () {
	// This starts your app after the whole page has loaded which gives you access to the variables in your other script files
	var myCoolApp = new MyArgosApp ();
	/*
		from here you can access and manually test functions in your app in the browser console by typing something like:
		myCoolApp.UpdateObject5();
		
		Usually you can open the browser console by pressing f12, but you may need to enable it depending on your browser.
		
		you can also tell your myCoolArgosClass to log its favorite color by typing this into the terminal:
		myCoolApp.myCoolArgosClass.SatFavoriteColor();
	*/
});

var MyArgosApp = function () {
	// copy and paste your javascript for app into here
	
	// Examples on how to access your external files data
	// This data is only accessable because the MyArgosApp function is called after the window has finished loading
	console.log (window.myExternalFileObject);

	window.myExternalPointerFunction ();

	window.myExternalNormalFunction ();

	window.myExternalParameterFunction('foo');
	
	// Example on how to declare and store a reference to a class-like object from an external file
	this.myCoolArgosClass = new ArgosClassLikeObject ({name: 'Coolio', favoriteColor: 'blue'});
}