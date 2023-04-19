// Don't use pointer functions at this level.
// This allows you to create a unique scope instance
// The syntax used in the parameters of this function is called a "deconstructor". It allows you to define what properties you want out of a passed-in javascript  object literal. Javascript object literals are the curly braces with key-value pairs. E.g. { foo: 'bar' }
var ArgosClassLikeObject = function ({name, favoriteColor}) {
	this.name = name;
	this.favoriteColor = favoriteColor;
	
	// Always use pointer functions once inside of your class-like object
	// this allows you to keep track of the scoped data for this object at any point later during runtime
	this.SayFavoriteColor = () => {
		console.log ('Hi! My name is', this.name, 'and my favorite color is', this.favoriteColor);
	}
}