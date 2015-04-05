var app = angular.module('taskList', []);

app.controller('PlanerController', function($http) {
    this.plans = prevPlans;
    /*this.loadPlans = function() {
        var httpRequest = $http({
            method: 'POST',
            url: '/list.json'
        }).success(function(data, status) {
            this.plans = data;
        });

    };
    this.loadPlans();*/
});

app.controller('todayController', function(){
    var timeInMs = new Date();
    this.day = timeInMs.getDate();
    this.year = timeInMs.getFullYear();
});

app.directive("taskInput", function() {
    return {
        restrict: "E",
        templateUrl: "./app/taskInput/task-input.html",
        controller: function() {},
        controllerAs: "taskInput"
    };
});

app.directive("taskFilters", function() {
    return {
        restrict: "E",
        templateUrl: "./app/taskFilters/task-filters.html",
        controller: function() {},
        controllerAs: "taskInput"
    };
});

app.directive("planerTabs", function() {
    return {
        restrict: "E",
        templateUrl: "./app/tabs/planer-tabs.html",
        controller: function() {
            this.tab = 1;

            this.isSet = function(checkTab) {
                return this.tab === checkTab;
            };

            this.setTab = function(activeTab) {
                this.tab = activeTab;
            };
        },
        controllerAs: "tab"
    };
});

app.directive("yearPlan", function() {
    return {
        restrict: "E",
        templateUrl: "./app/tabs/year-plan/year-plan.html",
        controller: function() {},
        controllerAs: "yaer-plan-tab"
    };
});

app.directive("monthPlan", function() {
    return {
        restrict: "E",
        templateUrl: "./app/tabs/month-plan/month-plan.html",
        controller: function() {},
        controllerAs: "month-plan-tab"
    };
});

app.directive("weekPlan", function() {
    return {
        restrict: "E",
        templateUrl: "./app/tabs/week-plan/week-plan.html",
        controller: function() {},
        controllerAs: "week-plan-tab"
    };
});

app.directive("dayPlan", function() {
    return {
        restrict: "E",
        templateUrl: "./app/tabs/day-plan/day-plan.html",
        controller: function() {},
        controllerAs: "day-plan-tab"
    };
});

//--------change to local storage
var prevPlans = [{
    text: "text",
    toDate: "01.01.2013"
}, {
    text: "text2",
    toDate: "01.02.2013"
}, {
    text: "text3",
    toDate: "01.03.2013"
}, {
    text: "text4",
    toDate: "01.04.2013"
}]
