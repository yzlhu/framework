//表格初始化公共方法
function tablePublic(ht,html){
		$("#tbody").html(html);
		//dataTables初始化参数
		var parmData = {
				 	"scrollY": ht,
				    "scrollX": true,
				    "scrollCollapse": true,
				    "paging": false,
				    "ordering": false,
				    "info": false,
				    "searching":false,
				    "bProcessing":true,
				    "bSort":false,
				    "bRetrieve":true,
				    "bLengthChange":true,
				    "bDestroy":true
				};
	    $.fn.dataTable.ext.errMode = function(s,h,m){};
	    if ($('#showTable').hasClass('dataTable')) {
	    	var  dttable = $('#showTable').dataTable();
	    	dttable.fnClearTable(); //清空一下table
	    	dttable.fnDestroy(); //还原初始化了的datatable
	    	$("#tbody").html(html);
	    	$('#showTable').dataTable(parmData);
	    }
	    $('#showTable').dataTable(parmData);
	};
	//显示表格左下角记录数样式
function pages(count,pag){
	var begin=pag*20-19;
	var end = pag*20;
	
	if(count!=0){//判断是否有数据，如果没有数据则进
		$("#begin").html(begin);
	} else {
		$("#begin").html(count);
	}
	
	if(parseInt(end)>parseInt(count)){//如果乘积大于总条数则进入
		$("#ending").html(count);
	}else{
		$("#ending").html(end);
	}
	$("#count").html(count);
};