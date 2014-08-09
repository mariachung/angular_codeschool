(function(){
	var app = angular.module('store', []);
	app.controller('StoreController', function(){
		this.product = gem; 
		this.products = gems;
	});
	
	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: '...',
		canPurchase:true
	}

	var gems = [{
		name: 'Dodecahedron',
		price: 2.95,
		description: '...',
		canPurchase:true
	},{
		name: 'Dodecahedron',
		price: 2.95,
		description: '...',
		canPurchase:true
	},{
		name: 'Dodecahedron',
		price: 2.95,
		description: '...',
		canPurchase:false
	}];


})();
