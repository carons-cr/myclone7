module.exports = function main(email, suffixes) {
           var postfixArray = new Array();
    	   postfixArray=suffixs;
    	   var suffix;  	   
    	   var index=email.lastIndexOf('@');
    	   if(index!=-1){
    		          suffix=email.substring(index+1);
    	   }else{
    		          return false;
    	   }
    	   for(var i=0;i<postfixArray.length;i++){
	    		     if(postfixArray[i]==suffix){
	    		    	 return true;
	    		     }
    	   }    
    	   return false;
};
