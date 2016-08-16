(function(){
	var app = angular.module('hadl-post-module',[]);
  	app.directive('tabHadl',function(){
	    return{
	      restrict:"E",
	      templateUrl:"html/tab.html"
	    }
	  });
  	app.directive('commentHadl',function(){
	    return{
	      restrict:"E",
	      templateUrl:'html/comment.html',
	      controller:function(){
	          this.review = {};
	          this.addComment = function(post){
	            this.review.time = new Date();
	            post.reviews.push(this.review);
	            this.review = {};

	          }
	      },
	      controllerAs:'cmt'
	    }
	  });
	app.directive('hadlBlog',function(){
			return {
				restrict:"E",
				templateUrl:"html/blog.html",
	      controller:(['$http',function($http){
	        //this.posts = ???
	        var s = this;
	        data = $http.post('/post').success(function(data){
	        	s.posts = data;
	        });

	      }]),
	      controllerAs:"blog"
			};
		});
  	app.directive('voteHadl',function(){
	    return{
	      restrict:'E',
	      templateUrl:'html/vote.html',
	      controllerAs:function(){
	      	this.rate = 1;
	      	this.setRate = function(rateSet){
	      		this.rate = rateSet;
	      	}
	      	
	      }
	      // controller:function(){
	      // 	 	this.rating1 = 5;
			    // this.rating2 = 2;
			    // this.isReadonly = true;
			    // this.rateFunction = function(rating) {
			    //   console.log('Rating selected: ' + rating);
			    // };
	      // },controllerAs:"rating"
	    }
	  });
  	app.directive('detailHadl',function(){
	    return {
	      restrict:'E',
	      templateUrl:'html/detail.html'
	    }
	  });
})();