"use strict"
class mainController {
    constructor(ctitle){
        this.title = ctitle;
    }
   
    get body(){
        return  "".concat(this.generateTopPage(), this.generateBodyContent(), this. generateBottomPage());
    }

    generateTopPage(){
      return '<html><head>'.concat('<title>',this.title,'</title></head><body>'); 
    }

    generateBottomPage(){
       return '</head></html>'; 
    }

    generateBodyContent(){
       return "<h1>Hello!</h1>".concat('<p>', 'Have a nice day!','</p>');
    }
}

module.exports=mainController;