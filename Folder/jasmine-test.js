
describe("Sample Test Suite", function() {

  it("sample thrutiness test", function() {
    expect(true).toBeTruthy();
  });

});
	
	(function() {
    'use strict';
    describe('core: Modules', function() {
        describe("core Module:", function() {
            var module;
            beforeEach(function() {
                module = angular.module("app");
            });

            it("All Registered Modules", function() {
                expect(module).not.toEqual(null);
            });

            describe("Dependencies:", function() {

                var deps;
                var hasModule = function(m) {
                    return deps.indexOf(m) >= 0;
                };

                beforeEach(function() {
                    deps = module.value('core').requires;
                });

                it("Used ngRoute for Single Page Application", function() {
                    expect(hasModule('ngRoute')).toEqual(true);
                });
            });
        });
    });
})();
   
   