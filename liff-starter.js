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
    "body": {
      "type": "box",
      "layout": "vertical",
      "spacing": "sm",
      "contents": [
        {
          "type": "button",
          "action": {
            "type": "uri",
            "label": "See more",
            "uri": "https://linecorp.com"
          },
          "flex": "1",
          "gravity": "center"
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
