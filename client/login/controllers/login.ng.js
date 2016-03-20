// console.log("Login");
app.controller('login',function  ($scope,$meteor,$location) {

  if(Meteor.user()){
    if(Meteor.user().profile.usrType==1)
      $location.path("/dashboard");
    else if(Meteor.user().profile.usrType==0)
      $location.path("/asociasion/dashboard");
  }


  $scope.login=function(username,password){
    if(username && password){
      Meteor.loginWithPassword(username,password,function(error){
          if(error==undefined){
            if(Meteor.user().profile.usrType==1){
              if(Meteor.user().profile.phone==null){
                $location.path("/perfil");
              }
              else{
                $location.path("/dashboard");
              }
            }
            else if(Meteor.user().profile.usrType==0){
              $location.path("/asociasion/dashboard");
            }
            else{
              $location.path("/dashboard");
            }
          }
          else if(error.reason=="Incorrect password"){//Codigo de error Handler de Angular
            $('.mtoast').fadeIn(400).delay(3000).fadeOut(400).text("Contraseña incorrecta");
          }
          else if(error.reason=="User not found"){
            console.log("Usuario no encontrado");
          }
        }
      );
      // console.log("Meteor.user().username:");
      // console.log(Meteor.user().username);
    }

    else{
      console.log("Ingrese usuario y contraseña");
    }
  };

  $scope.loginFB=function(){
    Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
                console.log("No se pudo iniciar sesion con tu cuenta");
            }
            else{
              if(Meteor.user().profile.usrType==undefined){
                  Meteor.call("PerfilFacebookNuevo",function(){
                    if(Meteor.user().profile.usrType==undefined || Meteor.user().profile.peticion==undefined || Meteor.user().profile.name==undefined || Meteor.user().profile.facebook==undefined||Meteor.user().profile.tutorial==undefined||Meteor.user().profile.terminos==undefined){
                      /*Aqui se tiene que eliminar el usuario*/
                      console.log("Ocurrió un errror al iniciar sesion vuelve a intentarlo");
                    }
                    else{
                      $location.path("/dashboard");
                    }
                  });
              }
              else{
                if(Meteor.user().profile.phone==null){
                  $location.path("/perfil"); //Completar informacion
                }
                else{
                  $location.path("/dashboard");
                }
              }
            }
        });
  };

});
