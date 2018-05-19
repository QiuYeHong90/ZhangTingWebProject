
// 



function network (path,complete,errorCallback){
  var baseUrl = 'http://api.zhangtingkeji.com'
	
  $.ajax({
    async: false,
    type: "GET",
    dataType: 'json',
    jsonp: 'callback',
    jsonpCallback: 'callbackfunction',
    url: baseUrl+path,
    data: "",
    timeout: 3000,
    contentType: "application/json",
    success: function(data) {
//    console.log(baseUrl,path,data);
      complete(data)
    },
    error:function(msg){
    		errorCallback(msg)
    }
  });
}

/**
 * 停车场列表
 * @param {Function} complete
 * @param {Function} errorCallback
 */
function getCityAndPark(complete,errorCallback){
	
	var path = '/app/getCityAndPark'
	network(path,complete,errorCallback)
}
