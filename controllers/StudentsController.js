signIn.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;

    $scope.studentsHere = function(student) {
        student.signedIn = true;
    
    }

});
