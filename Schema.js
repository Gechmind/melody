{
	CoreConcept:{
    	co_concept_name : String, //概念名称
    	co_concept_father_id : Number,//父概念 应该是可扩展成多个父概念
    	co_concept_group : Number,//概念所属组
    	co_concept_source : Number,//概念来源  wiki 用户归并
    	co_concept_use_rate:Number,//概念使用率
    	co_concept_trans_rate:Number,//概念输送率
    	co_concept_follower:[{ //子概念
    		follower_name:String,
    		follower_id:Number
    	}]
	},
	UserConcept:{
		u_concept_name:String,//名称
		u_concept_core_id:Number,//核心概念Id
		u_concept_ui_id:Number,//用户继承概念ID
		u_concept_group:Number,//概念所属组
		u_user_id:Number, //用户Id
		u_concept_follower:[{ //子概念
			follwer_id:Number
		}],
		u_concept_star:Number,
		u_concept_star_detail:Number,//关联 detail表
		u_concept_transformer:Number,
		u_concept_trans_time:Date,
		u_concept_trans_group:Number,
		u_concept_evolution:[{  //进化
			fomer_concept_id:Number
		}],
		u_concept_outer_factor:[
			{
				outerUrl：String
			}
		]
	},
	StarDetail:{
		u_concept_id:Number,
		u_concept_star_userid:Number,
		u_concept_trans_group:Number,
		u_concept_star_time:Date
	},
	ConceptGroup:{
		group_name:String,//组名称
		group_type:Number,//组类型
		group_open_type:Number//组开放程度
	},
	user:{
		user_id:Number,
		age:Number,
		vocation:Number, //从概念中获取
		degress:Number,//
		School:Number,
		Group:Number
	}
}