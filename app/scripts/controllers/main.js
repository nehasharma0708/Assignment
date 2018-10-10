'use strict';

/**
 * @ngdoc function
 * @name assignmentAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assignmentAppApp
 */
 angular.module('assignmentAppApp')
 .controller('MainCtrl', function ($scope) {
 	this.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];
 	$scope.persons = 
 	[
 	{ "name":"Richard", "surname":"Stallman", "age":"13" },
 	{ "name":"Linus", "surname":"Torvalds", "age":"23" },
 	{ "name":"Donald", "surname":"Knuth", "age":"34" },
 	{ "name":"Amanda", "surname":"Hayes", "age":"21" },
 	{ "name":"Daniel", "surname":"Pugh", "age":"56" },
 	{ "name":"Wendy", "surname":"Milbury", "age":"32" }
 	];

 	$scope.onDelete = function(data){
 		var newPersonsList=[];
 		angular.forEach($scope.persons,function(v){
 			if(data.$$hashKey !== v.$$hashKey) {
 				newPersonsList.push(v);
 			}
 		});    
 		$scope.persons = newPersonsList;
 	};

 	   $scope.addRow = function(){
          var fname = document.getElementById("name");
 			var lname = document.getElementById("surname");
 			var age = document.getElementById("age");
           $scope.persons.push({ 
           	'name':fname.value, 
           	'surname': lname.value, 
           	'age':age.value 
           });
           fname.value = "" ;
           lname.value	 = "";
           age.value = "";
        };
var dataArray = $scope.persons;
console.log(dataArray);
   window.onload = function () {

 	var pieChart = document.getElementById("pieChart").getContext('2d');

 	//var datasets = [ $scope.persons	];

 	var options = {
    responsive: true,
    title: {
        display: true,
        position: "top",
        text: "Pie Chart",
        fontSize: 18,
        fontColor: "#111"
    },
    legend: {
        display: true,
        position: "bottom",
        labels: {
            fontColor: "#333",
            fontSize: 16
        }
    }
};
var labelResult= [];
var ageArray = [];
for (var i = 0; i < dataArray.length; i++) {
	labelResult[i] = dataArray[i].name	;
	ageArray[i] = dataArray[i].age	;
}


var data = {
        labels: labelResult,
        datasets: [
            {
                data: ageArray,
                backgroundColor: [
                    "#DEB887",
                    "#A9A9A9",
                    "#DC143C",
                    "#F4A460",
                    "#2E8B57",
                    "#000000"
                ],
                borderColor: [
                    "#CDA776",
                    "#989898",
                    "#CB252B",
                    "#E39371",
                    "#1D7A46",
                    "#000000"
                ],
                borderWidth: [1, 1, 1, 1, 1,1]
            }
        ]
    };

 		var myPieChart = new Chart(pieChart, {
 			type: 'pie',
 			data: data, 	
 			options: options
 		});
 		
};


  
 });
