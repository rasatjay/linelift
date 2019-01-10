window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    document.getElementById('groupidfield').textContent = data.context.groupId;



    // closeWindow call
    document.getElementById('closewindowbutton').addEventListener('click', function () {
        liff.closeWindow();
    });

    // sendMessages call
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
		var distanceboxnotempty = false;
		var sendtext="select=distance";
		var inputElements = document.forms["distanceform"];
			for(var i=0; inputElements[i]; ++i){
				if(inputElements[i].checked){
					sendtext += inputElements[i].value;
					distanceboxnotempty = true;
				}
			}
		if (document.getElementById('regioncheck').checked) {
			sendtext += "region";
			inputElements = document.forms["regionform"];
			var regionboxnotempty = false;
			for(var i=0; inputElements[i]; ++i){
				if(inputElements[i].checked){
					sendtext += inputElements[i].value;
					regionboxnotempty = true;
				}
			}
			
		}
		
		else if (document.getElementById('provincecheck').checked) {
			sendtext += "province";
			sendtext += document.getElementById('provinceselect').value;

		}
		sendtext += "year";
		sendtext += document.getElementById('yearselect').value;
		
		sendtext += "month";
		inputElements = document.forms["monthform"];
		var monthboxnotempty = false;
		for(var i=0; inputElements[i]; ++i){
			if(inputElements[i].checked){
				sendtext += inputElements[i].value;
				monthboxnotempty = true;
			}
		}
		if (distanceboxnotempty && regionboxnotempty && monthboxnotempty) {
			liff.sendMessages([{
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "bubble",
    "direction": "ltr",
    "header": {
      "type": "box",
      "layout": "vertical",
      "spacing": "none",
      "contents": [
        {
          "type": "box",
          "layout": "horizontal",
          "flex": 10,
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "flex": 5,
              "contents": [
                {
                  "type": "text",
                  "text": "Intania Chula Mini Marathon 2019",
                  "size": "md",
                  "align": "start",
                  "weight": "bold",
                  "color": "#6A6A6A",
                  "action": {
                    "type": "postback",
                    "data": "action=reqraceinfo&raceid="
                  },
                  "wrap": true
                },
                {
                  "type": "text",
                  "text": "Faculty of Engineering, Chulalongkorn University Bangkok,  10330",
                  "margin": "none",
                  "size": "xs",
                  "color": "#B9B9B9",
                  "action": {
                    "type": "postback",
                    "data": "action=reqraceinfo&raceid="
                  },
                  "wrap": true
                },
                {
                  "type": "spacer"
                }
              ]
            },
            {
              "type": "separator",
              "margin": "sm"
            },
            {
              "type": "box",
              "layout": "vertical",
              "flex": 2,
              "contents": [
                {
                  "type": "text",
                  "text": "18",
                  "size": "lg",
                  "align": "center",
                  "gravity": "top",
                  "weight": "bold",
                  "color": "#E80404"
                },
                {
                  "type": "text",
                  "text": "Nov",
                  "align": "center",
                  "gravity": "top"
                },
                {
                  "type": "text",
                  "text": "2019",
                  "margin": "xs",
                  "size": "xs",
                  "align": "center",
                  "gravity": "center",
                  "color": "#CACACA"
                }
              ]
            }
          ]
        }
      ]
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "spacing": "none",
      "contents": [
        {
          "type": "box",
          "layout": "vertical",
          "spacing": "md",
          "margin": "md",
          "contents": [
            {
              "type": "text",
              "text": "เปิดรับสมัคร  27 ตุลาคม 2561",
              "margin": "xs",
              "size": "xs",
              "wrap": true
            },
            {
              "type": "box",
              "layout": "horizontal",
              "spacing": "xs",
              "contents": [
                {
                  "type": "spacer"
                },
                {
                  "type": "text",
                  "text": "5 km",
                  "flex": 2,
                  "size": "sm",
                  "align": "start",
                  "color": "#6A6A6A"
                },
                {
                  "type": "text",
                  "text": "(6:00 am)",
                  "flex": 3,
                  "margin": "sm",
                  "size": "xs",
                  "align": "start",
                  "gravity": "center",
                  "color": "#8C8C8C"
                },
                {
                  "type": "text",
                  "text": "550 THB",
                  "flex": 4,
                  "size": "sm",
                  "align": "end",
                  "color": "#8C8C8C"
                }
              ]
            },
            {
              "type": "box",
              "layout": "horizontal",
              "margin": "xs",
              "contents": [
                {
                  "type": "spacer"
                },
                {
                  "type": "text",
                  "text": "100 km",
                  "flex": 2,
                  "size": "sm",
                  "align": "start",
                  "color": "#6A6A6A"
                },
                {
                  "type": "text",
                  "text": "(6:00 am)",
                  "flex": 3,
                  "margin": "sm",
                  "size": "xs",
                  "align": "start",
                  "gravity": "center",
                  "color": "#989898"
                },
                {
                  "type": "text",
                  "text": "700 THB",
                  "flex": 4,
                  "size": "sm",
                  "align": "end",
                  "color": "#8C8C8C"
                }
              ]
            }
          ]
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "horizontal",
      "contents": [
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "uri",
                    "label": "Register",
                    "uri": "https://linecorp.com"
                  },
                  "color": "#CE0707",
                  "style": "link"
                },
                {
                  "type": "button",
                  "action": {
                    "type": "uri",
                    "label": "Visit site",
                    "uri": "https://linecorp.com"
                  },
                  "color": "#CE0707",
                  "style": "link"
                }
              ]
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "button",
                  "action": {
                    "type": "uri",
                    "label": "Save race",
                    "uri": "https://linecorp.com"
                  },
                  "color": "#E33D24",
                  "style": "primary"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
		
			//, {
			//    type: 'sticker',
			//    packageId: '2',
			//    stickerId: '144'
			//}
			]).then(function () {
				liff.closeWindow();
			}).catch(function (error) {
				window.alert("Error sending message: " + error);
			});
		}
		else {
			window.alert("checkbox was unselected");
		}
    });
	
}
