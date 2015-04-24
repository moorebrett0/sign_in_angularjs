  var signIn = angular.module("signIn", ["ui.router"]);

  signIn.config(function($stateProvider) {
      $stateProvider.state("home", {
          url: "",
          templateUrl: "partials/home.html"
      });

      signIn.config(function($stateProvider) {
          $stateProvider.state("home", {
              url: "lists",
              templateUrl: "partials/lists.html"
          });
      });
  });
