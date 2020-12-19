class Form{
    constructor(){

    }
    display(){
        var title=createElement("h2");
        title.html("car racing game");
        title.position(250, 10);

        var input=createInput("");
        var button=createButton("play");
        var greeting=createElement("h3");

        input.position(250, 160);
        button.position(370, 200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
        
            greeting.html("hello "+name);
            greeting.position(250, 160);
        })
    }
}