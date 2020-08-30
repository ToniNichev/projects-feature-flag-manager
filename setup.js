const mongoDB = require('./src/connectors/database/mongodb');
const featureFlags = require('./src/models/mock_data/FeatureFlags');


mongoDB.dropDB();
mongoDB.add(featureFlags, 'featureFlags', null);
