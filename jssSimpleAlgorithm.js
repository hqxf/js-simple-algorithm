//二分法查找
function binarySearch(arr,target){
	var start=0,end=arr.length-1;
	while(start<=end){
		var mid = Math.floor((start+end)/2);
		if(target==arr[mid]){
			return mid;
		}
		if(target<arr[mid]){
			end=mid-1;
		}else{
			start=mid+1;
		}
	}
	return -1;
}


//字符串翻转
function strReverse(str){
	var arr = str.split("");
	var i = 0; j = arr.length-1;
	while(i<j){
		var tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
		i++;
		j--;
	}
	return arr.join("");
}

//不借助中间两进行数值交换
function swap(a,b){
	b = b - a;
	a = a + b;  //a+b-a
	b = a - b;	//a-(b-a)=2a-b
	return [a,b]
}

//数组去重
function unique(arr){
	var newArr = [];
	var obj = {};
	var keyStr = "";
	for(var i = 0; i < arr.length ;i++){
		keyStr = JSON.stringify(arr[i]);
		if(!obj[keyStr]){
			obj[keyStr]=true;
			newArr.push(arr[i]);
		}
	}
	return newArr;
}


//统计数组中元素出现的次数(顺序被改变了,怎么恢复?)
function total(arr){
	var obj = {};
	obj.content=arr[0];
	obj.num = 0;
	var newArr = [];
	for(var i=0;i<arr.length;i++){
		obj.content=arr[i];
		if(!obj[JSON.stringify(arr[i])]){
			obj[JSON.stringify(arr[i])]=true;
			var k = arr[i];
			obj.num=1;
		}else{
			if(k!=arr[i]){
				obj.num++;
			}
		}
		newArr.push({num:obj.num,content:obj.content});
	}
	for(var i=0;i<newArr.length;i++){
		for(var j=i+1;j<newArr.length;j++){
			if(newArr[i].content==newArr[j].content){
				newArr.splice(i,1);
				i--;
				break;
			}
		}
	}
	return newArr
}