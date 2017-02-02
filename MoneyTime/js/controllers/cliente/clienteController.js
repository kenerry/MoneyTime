(function(){
    
    var clienteController = function($scope){
        
            $scope.selected = [];
            $scope.query = {
                order: 'name',
                limit: 10
            };
            $scope.limitOptions = [2,3,5];
            $scope.pessoa = [{}];
            $scope.pessoa = [

                 { nome: "Kenerry Serain", email: "kenerry13@gmail.com", celular: "(11) 96057-4281", dataNascimento: "16/11/1995"},
                 { nome: "Kenerry Serain", email: "kenerry13@gmail.com", celular: "(11) 96057-4281", dataNascimento: "16/11/1995"},
                 { nome: "Kenerry Serain", email: "kenerry13@gmail.com", celular: "(11) 96057-4281", dataNascimento: "16/11/1995"},
                 { nome: "Kenerry Serain", email: "kenerry13@gmail.com", celular: "(11) 96057-4281", dataNascimento: "16/11/1995"},
                 { nome: "Kenerry Serain", email: "kenerry13@gmail.com", celular: "(11) 96057-4281", dataNascimento: "16/11/1995"},
                 { nome: "Kenerry Serain", email: "kenerry13@gmail.com", celular: "(11) 96057-4281", dataNascimento: "16/11/1995"},
                 { nome: "Kenerry Serain", email: "kenerry13@gmail.com", celular: "(11) 96057-4281", dataNascimento: "16/11/1995"},
            ];
$scope.limitOptions = [5, 10, 15];
            };
  
            angular.module("MoneyTime").controller("clienteController", clienteController);     
}());







