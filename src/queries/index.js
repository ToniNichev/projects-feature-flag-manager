
import mongoDB  from'../connectors/database/mongodb';


export default {

    findFeatureFlagByName: async (flagName) => {
      const result = await mongoDB.find({ flagName }, 'featureFlags');
      return result;
    },

    
   getFeatureFlags: async (url) => {
    const result = await mongoDB.find({}, 'featureFlags');
    return result;     
   },

   updateFeatureFlag: async (searchObject, newObject) => {
     delete newObject._id;
    mongoDB.update(searchObject, newObject, 'featureFlags', (result) => {
      return true;
    });     
   },    

   addFeatureFlag: async (flagData) => {
    mongoDB.add(flagData, 'featureFlags', () => {
      return true;
    });     
   }, 

   dropdb: async () => {
    const result = mongoDB.dropDB();
    return result;
   },

   setup: async () => {
     mongoDB.dropDB();
     const obj = [
      {
        "flagName" : "quickLinks",
        "value": "on",
        "group": "switches"
      },
      {
        "flagName" : "featuredNewsHero",
        "value": "on",
        "group": "switches"
      },
      {
        "flagName" : "latestNews",
        "value": "on",
        "group": "switches"
      }                  
     ]
    

    mongoDB.add(obj, 'featureFlags', () => {

    }); 
   }   

}
