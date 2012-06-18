exports.createCache = function () {
	return {
		
		cache : {a:'s'},
		
		set : function(key, value){
			var org = this.cache[key];
			this.cache[key] = new valueholder(value, 1);
			return org;
		},
		get : function(key){
			var holder = this.cache[key];
			if(holder){
				return holder.value;
			}
			return null; 
		},
		cas : function(key, casId, value){
			return null;
		}
	};
};

function valueholder(value, casId){
	this.casId = casId;
	this.value = value;
}