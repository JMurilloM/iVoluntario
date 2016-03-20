// console.log("OKPS");
app.controller('olvidepass',function  ($scope,$meteor,$location) {
  console.log("Activa tu autolocalización");
  $scope.forgotpass= function(mail){
        email = $scope.correo;
        console.log(email);
    if (email !== "") {
      // console.log('NOTNULLMAIL');
      if (/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(email)){
        // console.log('REGEXVAL');
        Accounts.forgotPassword({email: email}, function(err) 
        {
          // console.log(err);
          if (err) 
          {
            if (err.message === 'User not found [403]') 
            {
              console.log('Este correo no existe en la base de datos.');
            } 
            else 
            {
              console.log('Disculpa, algo esta mal.');
            }
          } 
          else 
          {
            console.log('Correo Enviado. Revisa tu correo.');
          }
        });
      }
    }
    console.log('Ingresa un correo valido');
    return false;
  };
});

