  var signIn = angular.module("signIn", ["ui.router"]);

  signIn.config(function($stateProvider) {
      $stateProvider.state("home", {
          url: "",
          templateUrl: "partials/home.html"
      });

      $stateProvider.state("studentlist", {
          url: "students-list",
          templateUrl: "partials/lists.html",
          controller: "StudentsCtrl"
      });

      $stateProvider.state("filteredlist", {
          url: "filtered",
          templateUrl: "partials/filtered.html",
          controller: "StudentsCtrl"
      });

});
