describe('foo-controller should control the scope of bar', function() {
  beforeEach(module('d2-starter'));

  var scope, controller;

  beforeEach(inject(function( $controller ) {
    controller = $controller;
    scope = {};
  }));

  it('should set $scope.bar with data from foobar-service', inject(function( foobar ) {
    controller('FooCtrl', {
      $scope: scope,
      foobar: foobar
    });

    expect(scope.foo).toBe(foobar.foo);
  }));
});
