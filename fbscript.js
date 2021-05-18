
window.currentThing = "";

setTimeout(function(){

	$('select#thingSelect').on('change', function (e) {
			var optionSelected = $("option:selected", this);
    		var valueSelected = this.value;
        window.currentThing = valueSelected;
   			changeThing(valueSelected);
	});

},3000);

function changeThing(thingVal) {
	freeboard.showLoadingIndicator(true);
	setTimeout(function(){
		freeboard.setDatasourceSettings("myTestThing-1", {"thingname":""+thingVal+""});
		freeboard.showLoadingIndicator(false);
	},1200);
}
