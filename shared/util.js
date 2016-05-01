//EXAMPLE INCLUDE LINE:
//<script Language="JavaScript" SRC="../shared/util.js"></script>

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function confirmDelete(){
	return confirm('This record will be deleted.\n\nAre you sure?');
}

function setStatus(strmsg){

	window.status = strmsg;
	return true;
}

function adWin(loc, CurWidth, CurHeight)
{
	sBrowser = navigator.appName;
	sVersion = parseInt(navigator.appVersion);
	sDetail = navigator.userAgent;
	sBrowVer = null;

	y = (screen.availHeight)/2 - CurHeight/2;
	x = (screen.availWidth)/2 - CurWidth/2;

	//=============================================================
	if (sBrowser == "Netscape")
	{
		if (sVersion == 2)
		{
			sBrowVer = "Net2"
		}
		else if (sVersion >= 3 && sVersion < 4)
		{
			sBrowVer = "Net3"
		}
		else if (sVersion >= 4)
		{
			sBrowVer = "Net4"
		}
	}
	else if (sBrowser == "Microsoft Internet Explorer")
	{
		if (sVersion >= 2 && sVersion <= 3)
		{
			if (sDetail.indexOf("3.") != -1)
			{
				sBrowVer = "IE3"
			}
			else
			{
				sBrowVer = "IE2"
			}
		}
		else if (sVersion >= 4)
		{
			sBrowVer = "IE4"
		}
	}

//========================================================
	  if (sBrowVer =="Net2" ||sBrowVer=="Net3")
		{
			NewWindow=window.open("", "adWIN","height="+CurHeight+",width="+CurWidth+",screenX="+x+",left="+x+",screenY="+y+",top="+y+",alwaysRaised=0,dependent=1,directories=0,fullscreen=0,location=0,menubar=0,resizable=1,scrollbars=0,status=0,toolbar=0");
			NewWindow.location.href = loc;
			if(sBrowVer == "Net3")
			{
				NewWindow.focus()
			}
		}

//=======================================================
	  if(sBrowVer=="Net4")
	  {
			NewWindow=window.open("", "adWIN","height="+CurHeight+",width="+CurWidth+",screenX="+x+",left="+x+",screenY="+y+",top="+y+",alwaysRaised=0,dependent=1,directories=0,fullscreen=0,location=0,menubar=0,resizable=1,scrollbars=0,status=0,toolbar=0");
			NewWindow.location.href = loc;
			NewWindow.focus()
		}

//========================================================
	  if(sBrowVer=="IE3")
	  {
			NewWindow=window.open('',"adWIN",'height="+CurHeight+",width="+CurWidth+",screenX="+x+",left="+x+",screenY="+y+",top="+y+",dependent=1,directories=0,fullscreen=0,location=0,menubar=0,channelmode=0,resizable=1,scrollbars=0,status=0,toolbar=0"');
  		if (NewWindow != null)
  		{
     		if (NewWindow.opener == null)
     		{
					NewWindow.opener = self;
     		}
    		NewWindow.location.href = loc;
   		}
		}
//=======================================================
	  if(sBrowVer=="IE4")
	  {
			NewWindow = window.open("", "adWIN","height="+CurHeight+",width="+CurWidth+",screenX="+x+",left="+x+",screenY="+y+",top="+y+",dependent=1,directories=0,fullscreen=0,location=0,menubar=0,channelmode=0,resizable=1,scrollbars=0,status=0,toolbar = 0");
			NewWindow.location.href = loc;
			NewWindow.focus()
		}
		
		if(sBrowVer==null)
		{
			NewWindow=window.open("", "adWIN","height="+CurHeight+",width="+CurWidth+",screenX="+x+",left="+x+",screenY="+y+",top="+y+",dependent=1,directories=0,fullscreen=0,location=0,menubar=0,channelmode=0,resizable=1,scrollbars=0,status=0,toolbar=0");
			NewWindow.location.href = loc;
		}
}

function printPopup(loc,CurWidth, CurHeight){
	y = (screen.availHeight)/2 - CurHeight/2;
	x = (screen.availWidth)/2 - CurWidth/2;
	var win=window.open("", "printWindow","height="+CurHeight+",width="+CurWidth+",screenX="+x+",left="+x+",screenY="+y+",top="+y+",dependent=1,directories=0,fullscreen=0,location=0,menubar=1,channelmode=0,resizable=1,scrollbars=1,status=0,toolbar=0");
	win.location.href = loc;
	win.focus();
}

function printWindow(){
	window.print();
}