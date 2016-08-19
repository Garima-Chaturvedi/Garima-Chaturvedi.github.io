/**
 * 
 */
$( "#datepickerReplay" ).datepicker(); 
$( "#datepickerDigno" ).datepicker();
  //zoom
	$('.img-zoom').hover(function() {
		$(this).addClass('transition');

	}, function() {
		$(this).removeClass('transition');
	});
//zoom-end

//Report Click
$("#report").click(function () {
		        if ($(this).data('name') == 'show') {
		            $("#sidebar").animate({
		                width: '1100px',
		                height: '540px'
		            }).show();
		            $("#showSubPage").animate({
		                width: '1100px',
		                height: '540px',
		                overflow: 'auto'
		            }).show();
		            $("#showSubPage").load("./Reports.jsp");
		            $("#map1").animate({
		                width: '0px'
		            });
		            $("#mainPanel").animate({
		                
		            }).hide();
		            $("#container-bar").animate({
		                
		            }).hide();
		            $("#container").animate({
		                
		            }).hide();
					$("#sidebarReplay").animate({  
		                
		            }).hide();
					$("#showSubPageReplay").animate({
			            width: '0%'
			        }).hide();
					$("#trackingMenu").animate({
			            
			        }).hide();
					$("#sidebarDiagnosis").animate({
			            width: '0%'                          
			        }).hide();
			        $("#showSubPageDiagno").animate({
			            width: '0%'                          
			        }).hide();
					$("#diagnosisMenu").animate({
			            
			        }).hide();
		            $("#closeButton").animate({
            
        				}).show();
		            //$("#showSubPage").load("./clearAll.html");
		            $("#showSubPageReplay").load("./clearAll.html")
		            $("#showSubPageDiagno").load("./clearAll.html")
		            $(this).data('name', 'show');
		        } 
		    });
		    
$("#replay").click(function () {
    if ($(this).data('name') == 'show') {
        $("#sidebarReplay").animate({
            width: '1100px',
            height: '540px'
            
        }).show();
		$("#trackingMenu").animate({
            
        }).show();
        $("#sidebarDiagnosis").animate({
            width: '0%'                          
        }).hide();
        $("#showSubPageDiagno").animate({
            width: '0%'                          
        }).hide();
		$("#diagnosisMenu").animate({
            
        }).hide();
        $("#map1").animate({
            width: '0px'
        });
        $("#mainPanel").animate({
            
        }).hide();
        $("#container-bar").animate({
            
        }).hide();
        $("#container").animate({
            
        }).hide();
        $("#sidebar").animate({    
            width: '0%'
        }).hide();
        $("#showSubPage").animate({    
            width: '0%'
        }).hide();
        $("#closeButton2").animate({

			}).show();
        $("#showSubPage").load("./clearAll.html");
        //$("#showSubPageReplay").load("./clearAll.html")
        $("#showSubPageDiagno").load("./clearAll.html")
        $(this).data('name', 'show');
    } 
});

$("#Diagnosis").click(function () {
    if ($(this).data('name') == 'show') {
        $("#sidebarDiagnosis").animate({
            width: '1100px',
            height: '540px'
            
        }).show();
        
        $("#diagnosisMenu").animate({
            
        }).show();
        
        $("#map1").animate({
            width: '0px'
        });
        $("#sidebarReplay").animate({
            
        }).hide();
        $("#showSubPageReplay").animate({
            width: '0%'
        }).hide();
		$("#trackingMenu").animate({
            
        }).hide();
        $("#mainPanel").animate({
            
        }).hide();
        $("#container-bar").animate({
            
        }).hide();
        $("#container").animate({
            
        }).hide();
        $("#sidebar").animate({
            width: '0%'
        }).hide();
        $("#showSubPage").animate({    
            width: '0%'
        }).hide();
        $("#closeButtonDiagno").animate({

			}).show();
        $("#showSubPage").load("./clearAll.html");
        $("#showSubPageReplay").load("./clearAll.html")
        //$("#showSubPageDiagno").load("./clearAll.html")
        $(this).data('name', 'show');
    } 
});

$("#replayButton").click(function(e){
	var date1 = $("input#datepickerReplay").val();
	var vtsDevice = $('select[name="vtsDevice"]').val();
	$("#showSubPageReplay").animate({
        width: '1090px',
        height: '490px'
        
    }).show();
    $("#showSubPageReplay").load("./Replay.jsp?vts="+vtsDevice+"&date1='"+date1+"'");
    
});
	
$("#dignoButton").click(function(e){
	var date1 = $("input#datepickerDigno").val();
	var vtsDevice = $('select[name="vtsDeviceD"]').val();
	$("#showSubPageDiagno").animate({
        width: '1090px',
        height: '490px'
        
    }).show();
    $("#showSubPageDiagno").load("./testTab.jsp?vts="+vtsDevice+"&date1='"+date1+"'");
    
});
function closeAll() {
	/* if ($(this).data('name') == 'showMain') { */
		$("#sidebarReplay").animate({
            width: '0%'
        }).hide();
		$("#sidebarDiagnosis").animate({
            width: '0%'                          
        }).hide();
		$("#showSubPageDiagno").animate({
            width: '0%'                          
        }).hide();
		$("#sidebar").animate({
            width: '0%'
        }).hide();
		$("#showSubPageReplay").animate({
            width: '0%'
        }).hide();
		$("#trackingMenu").animate({
		            
        }).hide();
		$("#diagnosisMenu").animate({
            
        }).hide();
        $("#map1").animate({
        	width: '1120px',
            height: '540px'
        });
        $("#mainPanel").animate({
            
        }).show();
        $("#container-bar").animate({
            
        }).show();
        $("#container").animate({
            
        }).show();
        $("#showSubPage").hide();
        $("#showSubPage").load("./clearAll.html");
        $("#showSubPageReplay").load("./clearAll.html")
        $("#showSubPageDiagno").load("./clearAll.html")
        $(this).data('name', 'showMain');
	//}
}


//ssssssss
  
 // map
  function initMap() {
      var myLatLng1 = {lat:41.6941,lng: -88.0211};
      var myLatLng2 = {lat:41.6928,lng: -88.0191};
      var myLatLng3 = {lat:41.6964,lng: -88.0185};
      var myLatLng4 = {lat:41.6954,lng: -88.0061};
      var myLatLng5 = {lat:41.6967,lng: -88.017};
      var myLatLng6 = {lat:41.6857,lng: -88.0047};
      var myLatLng7 = {lat:41.6941,lng: -88.0047};
      
	  var contentString = '<b>Vehicle : <a href="#"> 1196930026 </a></b>'
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: myLatLng7
      });
      var infowindow = new google.maps.InfoWindow({
    	    content: contentString
    	  });
      var marker1 = new google.maps.Marker({
        position: myLatLng1,
        map: map,
        icon: 'images/pickup_camper_g.png'
      });
      marker1.addListener('mouseover', function() {
    	    infowindow.open(map, marker1);
    	  });
      marker1.addListener('mouseout', function() {
    	    infowindow.close();
    	});
      var marker2 = new google.maps.Marker({
          position: myLatLng2,
          map: map,
          icon: 'images/mapStop.png'
        });
      marker2.addListener('mouseover', function() {
  	    infowindow.open(map, marker2);
  	  });
      marker2.addListener('mouseout', function() {
    	    infowindow.close();
    	});
      var marker3 = new google.maps.Marker({
          position: myLatLng3,
          map: map,
          icon: 'images/mapStop.png'
        });
      marker3.addListener('mouseover', function() {
  	    infowindow.open(map, marker3);
  	  });
      marker3.addListener('mouseout', function() {
    	    infowindow.close();
    	});
      var marker4 = new google.maps.Marker({
          position: myLatLng4,
          map: map,
          icon: 'images/pickup_camper_g.png'
        });
      marker4.addListener('mouseover', function() {
  	    infowindow.open(map, marker4);
  	  });
      marker4.addListener('mouseout', function() {
    	    infowindow.close();
    	});
      var marker5 = new google.maps.Marker({
          position: myLatLng5,
          map: map,
          icon: 'images/pickup_camper_g.png'
        });
      marker5.addListener('mouseover', function() {
  	    infowindow.open(map, marker5);
  	  });
      marker5.addListener('mouseout', function() {
    	    infowindow.close();
    	});
      var marker6 = new google.maps.Marker({
          position: myLatLng6,
          map: map,
          icon: 'images/mapStop.png'
        });
      marker6.addListener('mouseover', function() {
  	    infowindow.open(map, marker6);
  	  });
      marker6.addListener('mouseout', function() {
    	    infowindow.close();
    	});
    }
   //map-end
   
   //highchart
   // Radialize the colors
	    /* Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
	        return {
	            radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
	            stops: [
	                [0, color],
	                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
	            ]
	        };
	    });  */
   
   //Alert-stack bar chart
   
   var totalAlerts= new Array();
	var alertName = new Array();
	var active = new Array();
	var acknowledge = new Array();
	var resolved = new Array();
	
   $.getJSON('./LiveAlertsReport',function(data)
    		{   
	   
		   for (var i = 0; i < data.temp.length; i++) {
				totalAlerts.push(Math.round(parseFloat(data.temp[i].TotalAlerts)));
				alertName.push(data.temp[i].AlertName);
				active.push(data.temp[i].Active);
				acknowledge.push(data.temp[i].Acknowledge);
				resolved.push(data.temp[i].Resolved);
				}
    	    	
    	    	$('#container').highcharts({
    	            chart: {
    	                type: 'column'
    	            },
    	            title: {
    	                text: 'Alerts'
    	            },
    	            xAxis: {
    	                categories: alertName
    	            },
    	            yAxis: {
    	                min: 0,
    	                title: {
    	                    text: 'Total Alert'
    	                },
    	                stackLabels: {
    	                    enabled: true,
    	                    style: {
    	                        fontWeight: 'bold',
    	                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
    	                    }
    	                }
    	            },
    	            credits: {
    	    				            enabled: false
    	    				        },
    	            legend: {
    	                align: 'right',
    	                x: -30,
    	                verticalAlign: 'top',
    	                y: 25,
    	                floating: true,
    	               
    	            color: 'Green', fontFamily: 'Arial', fontSize: '24px',
    	           
    	                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
    	                borderColor: '#CCC',
    	                borderWidth: 1,
    	                shadow: false
    	            },
    	            tooltip: {
    	                headerFormat: '<b>{point.x}</b><br/>',
    	                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    	            },
    	            plotOptions: {
    	                column: {
    	                    stacking: 'normal',
    	                    dataLabels: {
    	                        enabled: true,
    	                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
    	                        style: {
    	                            textShadow: '0 0 3px black'
    	                        }
    	                    }
    	                }
    	            },
    	            series: [{
    	                name: 'Resolved',
    	                data: resolved,
    	                color:'Green'
    	            }, {
    	                name: 'Acknowledged',
    	                data: acknowledge,
    	                color:'#ffbf00'
    	            }, {
    	                name: 'Active',
    	                data: active,
    	               color:'#cc2900'
    	            }]
    	        });
    	    			    	
    	    	
    		});
   
   
   
    
	    //alert-pie end
	    
	    //second-chart
	     $('#container-bar').highcharts({			 
				        chart: {
				            type: 'column'
				        },
				        title: {
				            text: 'Live Vehicle Utilization'
				        },
				        xAxis: {
				            categories: ['In Motion','Idle','Stop','Disconnected']
				        },
				        yAxis: {
				            min: 0,
				            title: {
				                text: 'Total Vehicles'
				            }
				        },
				        credits: {
				            enabled: false
				        },
				        tooltip: {
				            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.y})<br/>',
				            shared: true
				        },
				        plotOptions: {
				            column: {
				                stacking: 'normal'
				            },
				            series: {
				            	
				                cursor: 'pointer',
				                point: {
				                    events: {
				                        click: function () {
				                            /* alert('Category: ' + this.category + ', value: ' + this.y); */
				                        	window.location.href = "./nextlevel.jsp?cat="+this.category;
				                        }
				                    }
				                }
				            }
				        },
				        series: [{
				            name: 'Vehicle Count',
				            colorByPoint: true,
				            data: [{y:16,
				                    color: 'Green'},
				                    {y:12,
				                    color: 'Yellow'},
				                    {y:5,
				                    color: '#ffbf00'},
				                    {y:14,
				                    color: '#cc2900'}]
				        }]
				    });
				
   
