angular.module("marvelPersonagens").controller("personagensCtrl", function($scope, $location, personagens, personagensApi){
  $scope.title = "Personanges";
  $scope.personagens = personagens.data.data.results;

  $scope.personagemDetails = function(personagemId) {
    $location.path("/personagem/"+personagemId)
  }

  $scope.searchByName = function(name){
    personagensApi.getPersonagemByName(name).then(function(resolve){
      $scope.personagens = resolve.data.data.results;
    })
  }
});