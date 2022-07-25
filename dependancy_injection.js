class Module {
    static get loadersMap () { 
        if (!Module._loadersMap) Module._loadersMap = new Map();
      
      return Module._loadersMap;
    }
  
    static require(loaders, callback = () => null) {
      const params = loaders.map(
          (loader) => Module.loadersMap.get(loader)
      );
  
      return callback(...params);
    }
  
    static define(name, loaders, callback = () => null) {
      Module.loadersMap.set(
        name, 
        Module.require(loaders, callback)
      );
    }
  }
  
  Module.define('banana', [], () => console.count('BANANA')  || 'BANANA');
  Module.define('backwards', [], () => (string) => string.split('').reverse().join(''));
  Module.define('ananab', ['banana', 'backwards'], (banana, back) => back(banana))
  
  Module.require(['banana', 'ananab'], function(b, c) {
    console.log(b, c);
  });