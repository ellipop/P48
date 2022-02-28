class Game {
    constructor (){
        
    }
    play(){
        menu = createSprite(400,80, 600,100);
        menu.shapeColor ="white";
        //cupcakes
        cupcake1 = createSprite(150,80,20,20);
        cupcake1.addImage(cp1);
        cupcake1.scale = 0.25;

        cupcake2 = createSprite(250,80,20,20);
        cupcake2.addImage(cp2);
        cupcake2.scale = 0.25;

        cupcake3 = createSprite(350,80,20,20);
        cupcake3.addImage(cp3);
        cupcake3.scale = 0.25;
        
    }
}