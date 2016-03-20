// console.log("registrar");
app.controller('registrousuario',function  ($scope,$meteor,$location) {
  $scope.maxlength = 5;
  $scope.numberpattern = "/^(0|[1-9][0-9]*)$/";
  $scope.terminos=false;
  function convert_case(str) {
    var lower = str.toLowerCase();
    return lower.replace(/(^| )(\w)/g, function(x) {
      return x.toUpperCase();
    });
  }

  function verificaInTel () {
    // console.log($scope.phoneVer);
    if($scope.phoneVer!= 1 && $scope.phoneVer!=0){
      setTimeout(verificaInTel,500);

    }
    else  {

      if(!$scope.usr){
        console.log("Introduzca campos de registro");
      }
      else if(!$scope.usr.name){
        console.log("Nombre no definido");
      }
      else if(!$scope.usr.email){
        console.log("Email no definido");
      }
      else if($scope.phoneVer==0){
        console.log("Teléfono ya registrado");
      }
      else if(!$scope.usr.username){
        console.log("Nombre de usuario no definido");
      }
      else if(!$scope.usr.pass1){
        console.log("Contraseña no definida");
      }
      else if(!$scope.usr.pass2){
        console.log("Contraseña no definido");
      }
      /*Validar palabras groseras*/
      else if($scope.usr.name.toString().search("baca")==0||$scope.usr.name.toString().search("baka")==0||$scope.usr.name.toString().search("buei")==0||$scope.usr.name.toString().search("buey")==0||$scope.usr.name.toString().search("caca")==0||$scope.usr.name.toString().search("caco")==0||$scope.usr.name.toString().search("caka")==0||$scope.usr.name.toString().search("cako")==0||$scope.usr.name.toString().search("coge")==0||$scope.usr.name.toString().search("cogi")==0||$scope.usr.name.toString().search("coja")==0||$scope.usr.name.toString().search("coje")==0||$scope.usr.name.toString().search("cojo")==0||$scope.usr.name.toString().search("cola")==0||$scope.usr.name.toString().search("culo")==0||$scope.usr.name.toString().search("falto")==0||$scope.usr.name.toString().search("feto")==0||$scope.usr.name.toString().search("geta")==0||$scope.usr.name.toString().search("guei")==0||$scope.usr.name.toString().search("guey")==0||$scope.usr.name.toString().search("jeta")==0||$scope.usr.name.toString().search("joto")==0||$scope.usr.name.toString().search("kaka")==0||$scope.usr.name.toString().search("kaco")==0||$scope.usr.name.toString().search("kaga")==0||$scope.usr.name.toString().search("koge")==0||$scope.usr.name.toString().search("koji")==0||$scope.usr.name.toString().search("koja")==0||$scope.usr.name.toString().search("kojo")==0||$scope.usr.name.toString().search("kola")==0||$scope.usr.name.toString().search("kulo")==0||$scope.usr.name.toString().search("lilo")==0||$scope.usr.name.toString().search("loca")==0
      ||$scope.usr.name.toString().search("loco")==0||$scope.usr.name.toString().search("loka")==0||$scope.usr.name.toString().search("mame")==0||$scope.usr.name.toString().search("mamo")==0||$scope.usr.name.toString().search("mear")==0||$scope.usr.name.toString().search("meon")==0||$scope.usr.name.toString().search("miar")==0||$scope.usr.name.toString().search("mion")==0||$scope.usr.name.toString().search("moco")==0||$scope.usr.name.toString().search("moko")==0||$scope.usr.name.toString().search("mula")==0||$scope.usr.name.toString().search("mulo")==0||$scope.usr.name.toString().search("naca")==0||$scope.usr.name.toString().search("naco")==0||$scope.usr.name.toString().search("peda")==0||$scope.usr.name.toString().search("pedo")==0||$scope.usr.name.toString().search("pene")==0||$scope.usr.name.toString().search("pipi")==0||$scope.usr.name.toString().search("pito")==0||$scope.usr.name.toString().search("popo")==0||$scope.usr.name.toString().search("puta")==0||$scope.usr.name.toString().search("puto")==0||$scope.usr.name.toString().search("qulo")==0||$scope.usr.name.toString().search("rata")==0 ||$scope.usr.name.toString().search("roba")==0||$scope.usr.name.toString().search("robe")==0||$scope.usr.name.toString().search("robo")==0||$scope.usr.name.toString().search("ruin")==0||$scope.usr.name.toString().search("seno")==0||$scope.usr.name.toString().search("teta")==0||$scope.usr.name.toString().search("vaca")==0||$scope.usr.name.toString().search("vaga")==0||$scope.usr.name.toString().search("vago")==0
      ||$scope.usr.name.toString().search("vaka")==0||$scope.usr.name.toString().search("vuei")==0||$scope.usr.name.toString().search("wuei")==0||$scope.usr.name.toString().search("vuey")==0||$scope.usr.name.toString().search("wuey")==0 )
      {
        console.log("Evite introducir palabras altisonantes");
      }
      else if($scope.usr.username.toString().search("baca")==0||$scope.usr.username.toString().search("baka")==0||$scope.usr.username.toString().search("buei")==0||$scope.usr.username.toString().search("buey")==0||$scope.usr.username.toString().search("caca")==0||$scope.usr.username.toString().search("caco")==0||$scope.usr.username.toString().search("caka")==0||$scope.usr.username.toString().search("cako")==0||$scope.usr.username.toString().search("coge")==0||$scope.usr.username.toString().search("cogi")==0||$scope.usr.username.toString().search("coja")==0||$scope.usr.username.toString().search("coje")==0||$scope.usr.username.toString().search("cojo")==0||$scope.usr.username.toString().search("cola")==0||$scope.usr.username.toString().search("culo")==0||$scope.usr.username.toString().search("falto")==0||$scope.usr.username.toString().search("feto")==0||$scope.usr.username.toString().search("geta")==0||$scope.usr.username.toString().search("guei")==0||$scope.usr.username.toString().search("guey")==0||$scope.usr.username.toString().search("jeta")==0||$scope.usr.username.toString().search("joto")==0||$scope.usr.username.toString().search("kaka")==0||$scope.usr.username.toString().search("kaco")==0||$scope.usr.username.toString().search("kaga")==0||$scope.usr.username.toString().search("koge")==0||$scope.usr.username.toString().search("koji")==0||$scope.usr.username.toString().search("koja")==0||$scope.usr.username.toString().search("kojo")==0||$scope.usr.username.toString().search("kola")==0||$scope.usr.username.toString().search("kulo")==0||$scope.usr.username.toString().search("lilo")==0||$scope.usr.username.toString().search("loca")==0
      ||$scope.usr.username.toString().search("loco")==0||$scope.usr.username.toString().search("loka")==0||$scope.usr.username.toString().search("mame")==0||$scope.usr.username.toString().search("mamo")==0||$scope.usr.username.toString().search("mear")==0||$scope.usr.username.toString().search("meon")==0||$scope.usr.username.toString().search("miar")==0||$scope.usr.username.toString().search("mion")==0||$scope.usr.username.toString().search("moco")==0||$scope.usr.username.toString().search("moko")==0||$scope.usr.username.toString().search("mula")==0||$scope.usr.username.toString().search("mulo")==0||$scope.usr.username.toString().search("naca")==0||$scope.usr.username.toString().search("naco")==0||$scope.usr.username.toString().search("peda")==0||$scope.usr.username.toString().search("pedo")==0||$scope.usr.username.toString().search("pene")==0||$scope.usr.username.toString().search("pipi")==0||$scope.usr.username.toString().search("pito")==0||$scope.usr.username.toString().search("popo")==0||$scope.usr.username.toString().search("puta")==0||$scope.usr.username.toString().search("puto")==0||$scope.usr.username.toString().search("qulo")==0||$scope.usr.username.toString().search("rata")==0 ||$scope.usr.username.toString().search("roba")==0||$scope.usr.username.toString().search("robe")==0||$scope.usr.username.toString().search("robo")==0||$scope.usr.username.toString().search("ruin")==0||$scope.usr.username.toString().search("seno")==0||$scope.usr.username.toString().search("teta")==0||$scope.usr.username.toString().search("vaca")==0||$scope.usr.username.toString().search("vaga")==0||$scope.usr.username.toString().search("vago")==0
      ||$scope.usr.username.toString().search("vaka")==0||$scope.usr.username.toString().search("vuei")==0||$scope.usr.username.toString().search("wuei")==0||$scope.usr.username.toString().search("vuey")==0||$scope.usr.username.toString().search("wuey")==0 )
      {
        console.log("Evite introducir palabras altisonantes");
      }
      else if($scope.usr.pass1==$scope.usr.pass2 ){

              $scope.usr.name = convert_case($scope.usr.name);

              var prof={
                name:$scope.usr.name,
                phone:$scope.usr.phone,
                usrType:1,
                peticion:false,
                facebook:false,
                tutorial:0,
                terminos:0
              };
              if($scope.terminos){
                prof.terminos=1;
              }
              else{
                prof.terminos=0;
              }
              /*Aqui se crea el usuario*/
              Accounts.createUser({
                email:$scope.usr.email,
                password:$scope.usr.pass1,
                username:$scope.usr.username,
                profile:prof,
              },
              function(error){
                //No se cacho ningun error
                if(error==undefined){
                  console.log("Bienvenido");
                  //Ocurrio error en la creacion, generalmente por tiempos de ejecucion
                  if(Meteor.user().profile.usrType==undefined || Meteor.user().profile.peticion==undefined || Meteor.user().profile.name==undefined || Meteor.user().profile.facebook==undefined||Meteor.user().profile.tutorial==undefined||Meteor.user().profile.terminos==undefined){
                    Meteor.call("EliminarUsuarioM");
                    console.log("Ocurrió un errror al crear tu cuenta vuelve a intentarlo");
                  }
                  else{
                    if(Meteor.user().profile.phone==null){
                      //Si no ha registrado el telefono se situa al usuario en la ventana
                      //para completar su registro
                      $location.path("/perfil");
                    }
                    else{
                      //si ya lo completo se va a la principal
                      $location.path("/dashboard");
                    }
                  }
                }
                else if(error.reason=="Email already exists."){
                  console.log("Correo ya existe");
                }
                else if(error.reason=="Username already exists."){
                  console.log("El usuario ya existe");
                }
              }
              //
            );
          }
          else {
            console.log("Las contraseñas deben ser iguales para poder registrarse");
          }

    }
  }

  $scope.abrirTerminos=function(){
    $("#terminos3").openModal();
  };

    $scope.registrar= function(usr){
      if($scope.terminos){
        $scope.phoneVer = Meteor.call("verificarTelefono",usr.phone,function(error, result){
          if(error){
            $scope.phoneVer = 1;
          } else {
            $scope.phoneVer = result;
          }
        });
        $scope.usr = usr;
        setTimeout(verificaInTel(),500);
      }
      else{
        console.log("acepte los términos y condiciones para poder continuar con el registro");
      }

    };


});
