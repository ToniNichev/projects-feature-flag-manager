import PageData from '../src/containers/PageLayout/PageData'; 
import queries from '../src/queries';


function requestFromMongoDB(req, res, next) {
  return {
    getDog: {
      type: DogType,
      args: {
        id: { type: graphql.GraphQLID }
      },
      resolve: function (_, {id}) {      
        return new Promise((resolve, reject) => {
          const _id = parseInt(id);
          mongoDB.find({id: _id}, 'Dogs', function(err, result) {
            if(err) 
              reject(err);
            else 
              resolve(result[0]);                  
          });
        }); 
      },
    }
  }  
}


const requestDataFromAPI = async (req, res, next) => {

  const result = await queries.getFeatureFlags();
  const templateName = PageData[req.url].template;    
  req.templateName = templateName;
  req.apiData = result;
  next(); // continue once the data is available.

}

export default requestDataFromAPI;