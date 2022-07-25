const { plural } = require('pluralize');
const { getByIdFromCollection } = require('./util');


var arrayChangeHandler = {
    get: function(target, property) {
      console.log('getting ' + property + ' for ' + target);
      // property is index in this case
      return target[property];
    },
    set: function(target, property, value, receiver) {
      console.log('setting ' + property + ' for ' + target + ' with value ' + value);
      target[property] = value;
      // you have to return true to accept the changes
      return true;
    }
  };
  var originalArray = [];
  var proxyToArray = new Proxy(originalArray, arrayChangeHandler);
  

  function validate(obj, validations) {
      return new Proxy(obj, {
          set(target, key, value) {
              const validate = validations[key] || (() => true);
              validate(value);
              Reflect.set(target, key, value);
              return true;
          }
      });
  }


  const personValidation = {
      age(value) {
          if (typeof value !== 'number') {
              throw new Error('.age has to be a number!');
       }   
      },
      name(value) {
          if (typeof value !== 'string') {
              throw new Error('.name has to be a string!'); 
          }
      }
  }


  const person = validate({}, personValidation)

  person.name = 'Erik';
  person.age = 20;

 // person.age = 'Erick';


  function logAccessToProperties(obj, ref) {
      return new Proxy(obj, {
          get(target, key) {
              console.log('Accessed key', key, 'on', ref); 
              return Reflect.get(target, key); 
         }
     })
  }
 
  const persons = {
      name: 'Eirik',
      age: 31
  };


  const personWitchAccessLogging = logAccessToProperties(persons, 'abc');


  personWitchAccessLogging.age /*?*/

  personWitchAccessLogging.name

  

  function observable(obj, onChange) {
      return new Proxy(obj, {
          set(target, key, value) {
              Reflect.set(target, key, value);
              onChange({ key, value });
          },
          delete(target, key) {
              Reflect.delete(target, key);
              onChange({ key, value: undefined })
          },
      });
  }



function populateByProxy(depth = 0, collections = {}, object){
    /**
     * Handle invalid input
     */
    if (!object || typeof object !== 'object') {
      return object;
    }
  
    /**
     * List collection keys
     */
    const collectionKeys = Reflect.ownKeys(collections);
  
    /**
     * Create proxy trap handler for all get calls
     */
    const handler = {
      get(target, key, receiver) {
        /**
         * Get the accessed value
         */
        const value = Reflect.get(target, key, receiver);
  
        /**
         * Handle symbol access
         */
        if (typeof key === 'symbol' || depth <= 0) {
          return value;
        }
  
        /**
         * Handle null
         */
        if (typeof value === 'object' && !value) {
          return value;
        }
  
        /**
         * Handle dates (Date methods are not supported by proxies)
         */
        if (typeof value === 'object' && !!value.getTime) {
          return value;
        }
  
        /**
         * For collection references (list of ids) (Array)
         */
        if (Array.isArray(value) && collectionKeys.includes(key)) {
          return value
          .map(getByIdFromCollection(collections[key]))
          .filter(function(x) { return x })
          .map(populateByProxy.bind(null, depth - 1, collections));
        }
  
        /**
         * For collection references (list of ids) (Map)
         */
        if (typeof value === 'object' && collectionKeys.includes(key)) {
          return Reflect.ownKeys(value)
          .map(getByIdFromCollection(collections[key]))
          .filter(function(x) { return x })
          .map(populateByProxy.bind(null, depth - 1, collections))
          .reduce(function(res, item) {
            return Object.assign({}, res, {
              [item.id]: item
            });
          }, {});
        }
  
        /**
         * For single value references (single id)
         */
        if (collectionKeys.includes(plural(key))) {
          return populateByProxy(
            depth - 1,
            collections,
            getByIdFromCollection(collections[plural(key)])(value)
          );
        }
  
        /**
         * Handle nested objects
         */
        if (value && typeof value === 'object') {
          return populateByProxy(depth, collections, value);
        }
  
        /**
         * Handle primitive values
         */
        return value;
      },
    };
  
    /**
     * Return a proxied object or a list of proxied object
     */
    return Array.isArray(object) ? (
      object.map(function(item) { return populateByProxy(depth, collections, item) })
    ) : (
      new Proxy(object, handler)
    );
  }
  



//   const graph= {

      
      const people = [
        {
          type: 'person',
          id: 'person-1',
          name: 'John Storywriter',
          authored: {
            stories: ['story-1'],
          },
          likes: {
            stories: [
              'story-1',
              'story-2',
            ],
          }
        },
        {
          type: 'person',
          id: 'person-2',
          name: 'Peter Telltale',
          authored: {
            stories: ['story-2'],
          },
          likes: {
            stories: [
              'story-1',
              'story-2',
            ],
          }
        }
];
      
const stories = [
    {
      type: 'story',
      id: 'story-1',
      author: {
        person: 'person-1',
      },
    },
    {
      type: 'story',
      id: 'story-2',
      author: {
        person: 'person-2',
      },
    },
  ];


// }
const graph = { people, stories };

/**
 * Choose an entry point to the graph
 */
const entry = people[0];

/**
 * Create a populated entry point resolved against the graph with a specified depth
 */

  const populatedPerson = populateByProxy(4, graph, entry);
console.log(JSON.stringify(populatedPerson,null,2 )) /*?*/