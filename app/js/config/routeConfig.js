angular.module("marvelPersonagens").config(function ($routeProvider){
  $routeProvider.when("/", {
    templateUrl: "view/personagens.html",
    controller: "personagensCtrl",
    resolve: {
      personagens: function(personagensApi){
        return personagensApi.getPersonagens();
      }
    }
  });
  $routeProvider.when("/personagem/:id", {
    templateUrl: "view/personagemDetails.html",
    controller: "personagemDetailsCtrl",
    resolve: {
      personagemDetails: function(personagensApi, $route){
        return personagensApi.getPersonagemDetails($route.current.params.id);
      }
    }
  });
})