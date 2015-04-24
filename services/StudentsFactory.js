signIn.factory('StudentsFactory', function StudentsFactory() {
    var factory = {};
    factory.students = [
        { name: "Smicky McCoodle", signedIn: false},
        { name: "Ted Nugent ", signedIn: false},
        { name: "Francis Bacon", signedIn: false },
        { name: "Hans Olo",signedIn: false },
        { name: "Sharon Peters", signedIn: false },
        { name: "Sharon Needles", signedIn: false },
        { name: "Larry Kryzinsky", signedIn: false },
        { name: "Greg Alohia ", signedIn: false },
        { name: "Tim Tilliwink", signedIn: false },
        { name: "Woodsley Hardington", signedIn: false }
    ];

    return factory;
});
