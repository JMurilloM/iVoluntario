console.log("routes");
app.config(function($urlRouterProvider, $stateProvider, $locationProvider){
       $locationProvider.html5Mode(true);
       $stateProvider
         /*.state('perfil', {
           url: '/perfil',
           views:{
             "page":{
               templateUrl: 'client/perfil/views/verperfil.ng.html',
               url: '/perfil',
               controller: 'perfil'
             }
           },
           resolve:{
             currentUser: function($q) {
               if(!Meteor.userId()){
                 return $q.reject();
               }
               else {
                 return $q.resolve();
               }
             }
           }
         })*/
         .state('registrousuario', {
           url: '/registrousuario',
           views:{
             "page":{
               templateUrl: 'client/login/views/registrousuario.ng.html',
               url: '/registrousuario',
               //controller: 'registrousuario'
             }
           },
           resolve:{
             currentUser: function($q) {
               if(Meteor.userId()){
                 return $q.reject();
               }
               else {
                 return $q.resolve();
               }
             }
           }

         })
         /*.state('registraradmin', {
           url: '/registraradmin',
           views:{
             "page":{
               templateUrl: 'client/administrador/views/registraradmin.ng.html',
               url: '/registraradmin',
               controller: 'registraradmin'
             }
           },
           resolve:{
             currentUser: function($q) {
               if(!Meteor.userId()){
                 return $q.reject();
               }
               else {
                   if(Meteor.user().profile.usrType==0)
                      return $q.resolve();
                   else
                      return $q.reject();
               }
             }
           }

         })*/
         .state('olvidepass', {
           url: '/olvidepass',
           views:{
             "page":{
               templateUrl: "client/login/views/olvidepass.ng.html",
               url: '/olvidepass',
               //controller: "olvidepass"
             }
           },
           resolve:{
             currentUser: function($q) {
               if(Meteor.userId()){
                 return $q.reject();
               }
               else {
                 return $q.resolve();
               }
             }
           }
         })
         .state('iniciarsesion', {
           url: '/iniciarsesion',
           views:{
             "page":{
               templateUrl: "client/login/views/iniciarsesion.ng.html",
               url:'/iniciarsesion',
               //controller: 'login'
             }
           }

         })
         .state('dashboard', {
           url: '/dashboard',
           views:{
             "page":{
               templateUrl: "client/voluntario/views/dashboard.ng.html",
               //controller: 'dashboard',
             }
           },
           resolve:{
             currentUser: function($q) {
               if(!Meteor.userId()){
                 return $q.resolve();
               }
               else {
                   if(Meteor.user().profile.usrType==0)
                      return $q.resolve();
                   else
                      return $q.resolve();
               }
             }
           }
         })
          if(!Meteor.userId())
            $urlRouterProvider.otherwise("/dashboard");
          //Linea anterior $urlRouterProvider.otherwise("/iniciarsesion");
          else
            $urlRouterProvider.otherwise("/dashboard");
     });