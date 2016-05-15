'use strict';

var mongoose		= require('mongoose');
var findOrCreate	= require('mongoose-findorcreate');

var userConceptSchema = mongoose.Schema({
	id:ObjectId,
	u_concept_name:String,
	u_concept_core_id:Number,
	u_concept_ui_id:Number,
	u_concept_group:Number,
	u_user_id:Number,
	u_concept_follower:[{
		follwer_id:Number
	}],
	u_concept_star:Number,
	u_concept_star_detail:Number,
	u_concept_transformer:Number,
	u_concept_trans_time:Date,
	u_concept_trans_group:Number,
	u_concept_evolution:[{
		fomer_concept_id:Number
	}],
	u_concept_outer_factor:[
		{
			outerUrl:String
		}
	]
});

userConceptSchema.statics = {
	fillDoc:function(document,bodyReq,callback){
		for(var field in this.schame.paths){
			if(field !== '_id' && field !== '_v' && bodyReq[field] !== undefined) {
				document[field] = bodyReq[field];
			}
		}
		document.save(callback);
	}
};

mongoose.model("userConcept",userConceptSchema);