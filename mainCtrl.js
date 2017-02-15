var app = angular.module("nytApp", []);
app.controller("mainCtrl", function($scope, $http, $httpParamSerializerJQLike){


$scope.searchArticles = function(input){
  console.log(input);
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "8eb2dc46813c4e2ab0c2ef02ee9f0fa6",
      'q': input + "",
        'end_date': "19691231"
  }, true);



$http.get(url).success(function(response){
    $scope.articles = response.response.docs;
      console.log(response);
    // console.log(response.response.docs[0].multimedia[0].url);
  });
};

// $scope.favoriteArticle = function(article){
//   console.log(article);
// }
// $scope.removeArticle = function(article){
// var index = $scope.articles.indexOf(article);
//   $scope.articles.splice(index, 1);
// }


//add article (use this to display search terms you selected?) > connect with Edit
// $scope.addParameters = function(param){
// console.log(param);
// }
//







});//end of controller
