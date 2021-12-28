angular.module("marvelPersonagens").factory("personagensApi", function($http, config){
  let _getPersonagens = function(){
    return $http.get(config.baseUrl+"/characters?ts="+config.ts+"&apikey="+config.apikey+"&hash="+config.hash);
  }

  let _getPersonagemDetails = function(personagemId){
    return $http.get(config.baseUrl+"/characters/"+personagemId+"?ts="+config.ts+"&apikey="+config.apikey+"&hash="+config.hash);
  }

  let _getPersonagemByName = function(name){
    return $http.get(config.baseUrl+"/characters?nameStartsWith="+name+"&ts="+config.ts+"&apikey="+config.apikey+"&hash="+config.hash)
  }

  return {
    getPersonagens: _getPersonagens,
    getPersonagemDetails: _getPersonagemDetails,
    getPersonagemByName: _getPersonagemByName
  }
});