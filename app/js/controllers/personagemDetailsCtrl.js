angular.module("marvelPersonagens").controller("personagemDetailsCtrl", function ($scope, $routeParams, personagensApi, personagemDetails){
  $scope.personagemDetails = {name, thumbnail, comics} = personagemDetails.data.data.results[0];

  $scope.getImageUrl = function(personagemDetails){
    return personagemDetails.thumbnail.path+"."+personagemDetails.thumbnail.extension;
  }
});