describe('Todo Controller', function(){

  beforeEach(inject(function($rootScope, $controller){
    this.rootScope = $rootScope;
    this.scope = $rootScope.$new();
    this.controller = $controller(TodoController, {
      $scope: this.scope,
      $location: {
        path: jasmine.createSpy('path')
      }
    });
  }));
  
  it('starts off as empty', function(){
    expect(this.scope.items).toEqual([]);
  });

  it('adds item', function(){
    this.scope.addItem('foo');
    expect(this.scope.items).toEqual([
      {name: 'foo', done: false}
    ]);
  });

  it('clears currentName when item is added', function(){
    this.scope.currentName = 'bar';
    this.scope.addItem('zing');
    expect(this.scope.currentName).toBe('');
  });

  it('counts incomplete items', function(){
    expect(this.scope.incompletedCount()).toBe(0);
    this.scope.items = [{name: 'foo', done: false}];
    expect(this.scope.incompletedCount()).toBe(1);
  });

  it('counts completed items', function(){
    expect(this.scope.completedCount()).toBe(0);
    this.scope.items = [{name: 'foo', done: true}];
    expect(this.scope.completedCount()).toBe(1);
  });

  it('navigates to foo on navigate', function(){
    this.scope.navigate();
    expect(this.controller.location.path).toHaveBeenCalledWith('/zing');
  });
});
