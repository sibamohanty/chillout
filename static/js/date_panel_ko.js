
(function (){
    function blah (month,year) {
                 return new Date(year, month, 0).getDate();
    }
    function DatePanelViewModel(){
        // The data here is system generated
        // ensure that the system clock is uptodate
        
	var self = this;
	self.selectedDay = ko.observable();
        self.daysInMonth = function (month,year){
	    var dt = new Date();
	    console.log(dt.getMonth());

	    self.month = month || dt.getMonth()+1;
	    console.log("The current month is "+ month);
	    self.year = year || dt.getYear();
            return new Date(self.year, self.month, 0).getDate();
	},
	self.init = function (){
            self.noofdays= self.daysInMonth();
            console.log(self.noofdays);
            self.days= ko.observableArray();
            for (var i=1; i<= self.noofdays; i++){
		var eff = self.randomEfficiencyForTheDay();

                self.days.push({day: i, cop: eff});
            }
	},
	self.selectDate = function (day, e){
	    self.showData(self.year,self.month,day.day);
	    console.log(e);
	    $(self.selected).css('background-color',"transparent");
	    $(e.target).css('background-color',"yellow");
	    self.selected = e.target;
	},
	self.randomEfficiencyForTheDay = function (){
	   return Math.random(.1);
	},
	self.copColor = ko.computed(function (){
	// returns the color as per the efficiency level;
		return self.cop;
	},this );

	self.showData = function (y,m,d){
	    // Will check for existing data, and will fetch if it's not there
	    //
	    console.log("year"+y+" month"+m+" day"+d);

	    // And pass it to the appropriate viewmodel.
	},
	self.logMouseOver = function (d,e){

	    $(e.target).css("background-color","blue");
	    console.log(d.cop);
	},
	self.logMouseOut = function (d,e){
	    if (e.target == self.selected){
	        $(e.target).css("background-color", "yellow");

	    }
	    else {
	         $(e.target).css("background-color", "transparent");

	    }

	},
        this.init();
    }
    ko.applyBindings(
        new DatePanelViewModel()
      );

})();
