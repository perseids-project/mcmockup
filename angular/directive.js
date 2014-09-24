app.directive("scrollto", function( $timeout ) {
	return {
		link: function ($scope, element, attrs) {
			$scope.$evalAsync( function () { 
				var jq = new jq_ang();
				jq.click_start( element );
			});
		}
	};
 });