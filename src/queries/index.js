
import mongoDB  from'../connectors/database/mongodb';
 
/*
const getDogsListTest = async () => {      
    return mongoDB.find({}, 'Dogs');
} 
*/ 

export default {

    getDogByBreed: async (breed) => {
      const result = await mongoDB.find({breed: breed}, 'Dogs');
      return result;
    },

   getDogsList: async () => {      
    const result = await mongoDB.find({}, 'Dogs');
    return result;
   }, 
    
   getFeatureFlags: async (url) => {
    const result = await mongoDB.find({}, 'featureFlags');
    return result;     
   },

   addFeatureFlag: async (flagData) => {
    mongoDB.add(flagData, 'featureFlags', () => {
      console.log("DONE");
      return true;
    });     
   }, 

   setup: async () => {
     mongoDB.dropDB();
     const obj = [
      {
        url: '/about',
        template: "Html",    
        layout: [ 
          {
            span: 12,
            components: [
              {
                name: "Header",
                props: {}
              }
            ]
          },
          {
            span: 12,
            components:[
              {
                name: "About",
                props: {}
              }
            ] 
          }         
        ]    
      },
      {
        url: '/home',
        template: "Html",              
        layout: [ 
          {
            span: 12,
            components: [
              {
                name: "Header",
                props: {}
              }
            ]
          },
          {
            span: 12,
            components:[
              {
                name: "Home",
                props: {}
              }
            ] 
          },        
        ]
      },
      {
        url: '/greetings',
        template: "Html",    
        layout: [ 
          {
            span: 12,        
            components: [
              {
                name: "Header",
                props: {}
              }
            ]
          },
          {
            span: 12,
            components:[
              {
                name: "Greetings",
                props: { user: "Sam"}
              }
            ] 
          },        
        ]
      },
      {
        url: '/other-template',
        template: "OtherHtml",      
        layout: [ 
          {
            span: 12,
            components:[
              {
                name: "Greetings",
                props: {}
              }
            ] 
          },        
        ]
      }    
     ]
    

    mongoDB.add(obj, 'Pages', () => {
      console.log("DONE");
    });
    //const result = await mongoDB.setup({}, 'Pages');
    //return result;     
   }   

}
