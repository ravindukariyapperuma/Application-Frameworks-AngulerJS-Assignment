app.controller('MainController',['$scope', $scope => {
    $scope.list = [];

    $scope.addEvent = () => {
        if ($scope.EventName == null || $scope.addTime == null || $scope.EventName == "" || $scope.addTime == "" ) {
            alert("Filde can't empty");
            return false;
        } else {
            $scope.list.push({event: $scope.EventName, time: $scope.addTime});
            $scope.EventName = null;
            $scope.addTime = null;
            $scope.EventIndex = null;
        }
    };

    $scope.removeEvent = () => {
        let oldList = $scope.list;
        $scope.list = [];
        angular.forEach(oldList, (checked) => {
            if (!checked.done) $scope.list.push(checked);
        });
    }

    $scope.Update = (Event) => {
            $scope.EventName = Event.event;
            $scope.addTime = Event.time;
            $scope.index = $scope.list.indexOf(Event);
            $scope.EventIndex = $scope.index;
    };

    $scope.searchEvent = function(){
        var searchText = element(by.model('searchText'));
        searchText.clear();
        searchText.sendKeys('m');

        searchText.clear();
        searchText.sendKeys('76');
    }

    $scope.UpdateEvent = ()=>{
        if ($scope.EventName == null || $scope.addTime == null || $scope.EventIndex == null || $scope.EventName == "" || $scope.addTime == "" ) {
            alert("Filde can't empty");
            return false;
        } else {
            $scope.clickedevent = {
                // date:$scope.ctrl.picker3.date,
                event: $scope.EventName,
                time: $scope.addTime
            };
            $scope.list[$scope.EventIndex] = $scope.clickedevent;

            $scope.clickedevent = {};
            $scope.index = 0;
            // $scope.ctrl.picker3.date = "";
            $scope.EventName = null;
            $scope.addTime = null;
            $scope.EventIndex = null;
        }
    }


}]);

app.controller('TimeController',function ($scope,$interval)  {

    $interval(function () {
        let expireDate = 18500 * 24 * 60 * 60;
        let nTime = Math.floor(Date.now() / 1000);
        let remaining = expireDate - nTime;
        $scope.rDays = parseInt(remaining / 60 / 60 / 24);
        $scope.rHours = parseInt((remaining - ($scope.rDays * 60 * 60 * 24)) / 60 / 60);
        $scope.rMinutes = parseInt((remaining - ($scope.rDays * 60 * 60 * 24) - ($scope.rHours * 60 * 60)) / 60);
        $scope.rSeconds = parseInt(remaining - ($scope.rDays * 60 * 60 * 24) - ($scope.rHours * 60 * 60) - ($scope.rMinutes * 60));
    }, 1000);

});
