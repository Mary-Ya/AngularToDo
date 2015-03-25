(function() {
    var app = angular.module('taskList', []);

    app.controller('TaskController', function() {
        this.tasks = tasks;
    });


    app.controller('AddTaskController', function() {
        this.newTask = {
            text: "",
            stars: 1
        };
        this.add = function(products) {
            tasks.push(this.newTask);
            this.newTask = {};
        };
    });

    var tasks = [{
        text: "Die!",
        stars: 1
    }, {
        text: "Die, die!",
        stars: 2
    }, {
        text: "Die, die, die!",
        stars: 3
    }, {
        text: "Die, die, die, my darling!",
        stars: 4
    }];
}) ();

