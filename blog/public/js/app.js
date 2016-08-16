(function(){
	var app = angular.module('duclinhblog',['hadl-post-module']);

	// app.controller('HadlPostController',function(){
	// 	this.posts = post;
	// });
  app.controller('PanelController',function(){
    this.tab = 3;
    this.setTab = function(selectTab){
      this.tab = selectTab;
    }
    this.isSelected = function(select){
      return this.tab === select;
    }
  });
  app.directive('hadlFooter',function(){
    return{
      restrict:"E",
      templateUrl:"html/footer.html"
    }
  });
  app.directive('hadlNav',function(){
    return{
      restrict:"E",
      templateUrl:"html/nav.html"
    }
  });
  app.directive('hadlLeftmenu',function(){
    return{
      restrict:"E",
      templateUrl:"html/leftmenu.html"
    }
  });


	
					
})();