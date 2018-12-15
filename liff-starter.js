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
		var sendtext="select=";
		if (document.getElementById('regioncheck').checked) {
			sendtext += "region";
			var inputElements = document.forms["regionform"];
			for(var i=0; inputElements[i]; ++i){
				if(inputElements[i].checked){
					sendtext += inputElements[i].value;
				}
			}
			
		}
		
		else if (document.getElementById('provincecheck').checked) {
			sendtext += "province";
			sendtext += document.getElementById('provinceselect').value;

		}
		
		
        liff.sendMessages([{
            type: 'text',
            text: sendtext
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
    });
	
}
