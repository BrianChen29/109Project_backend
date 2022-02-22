var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema(
    {
        eveName : String ,
        eveIssuerName : String ,
        eveHelperName : String ,
        eveState : Boolean ,
        eveType : String ,
        eveLoc : String ,
        eveDate : String
    }
);

//Export model
module.exports = mongoose.model('event', EventSchema);
