(function(){
	angular
		.module("WebAppMaker")
		.controller("EditWebsiteController",EditWebsiteController);

		function EditWebsiteController($routeParams,WebsiteService){
			var vm = this;
			console.log("he");
			vm.userId = $routeParams.userId;
			vm.websiteId = $routeParams.websiteId;
			function init(){
				vm.website = WebsiteService.findWebsiteById(vm.websiteId);
			}
			init();
		}
})();