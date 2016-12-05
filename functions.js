function __getCurrentDateTime(format){
	var dt=new Date(),x,date=[];
	date['d']=dt.getDate();
	date['dd']=dt.getDate()>10?dt.getDate():'0'+dt.getDate();
	date['m']=dt.getMonth()+1;
	date['mm']=(dt.getMonth()+1)>10?(dt.getMonth()+1):'0'+(dt.getMonth()+1);
	date['yyyy']=dt.getFullYear();
	date['yy']=dt.getFullYear().toString().slice(-2);
	date['h']=(dt.getHours()>12?dt.getHours()-12:dt.getHours());
	date['hh']=dt.getHours();
	date['mi']=dt.getMinutes();
	date['mimi']=dt.getMinutes()<10?('0'+dt.getMinutes()):dt.getMinutes();
	date['s']=dt.getSeconds();
	date['ss']=dt.getSeconds()<10?('0'+dt.getSeconds()):dt.getSeconds();
	date['sss']=dt.getMilliseconds();
	date['ampm']=(dt.getHours()>=12?'PM':'AM');
	x=format.toLowerCase();
	x=x.indexOf('dd')!=-1?x.replace(/(dd)/i,date['dd']):x.replace(/(d)/i,date['d']);
	x=x.indexOf('mm')!=-1?x.replace(/(mm)/i,date['mm']):x.replace(/(m)/i,date['m']);
	x=x.indexOf('yyyy')!=-1?x.replace(/(yyyy)/i,date['yyyy']):x.replace(/(yy)/i,date['yy']);
	x=x.indexOf('hh')!=-1?x.replace(/(hh)/i,date['hh']):x.replace(/(h)/i,date['h']);
	x=x.indexOf('mimi')!=-1?x.replace(/(mimi)/i,date['mimi']):x.replace(/(mi)/i,date['mi']);
	if(x.indexOf('sss')!=-1){	x=x.replace(/(sss)/i,date['sss']);	}
	x=x.indexOf('ss')!=-1?x.replace(/(ss)/i,date['ss']):x.replace(/(s)/i,date['s']);
	if(x.indexOf('ampm')!=-1){	x=x.replace(/(ampm)/i,date['ampm']);	}
	return x;
}
