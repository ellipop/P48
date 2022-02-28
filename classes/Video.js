class Video{
    constructor (){
        
    }
    start(){
        
        if (video == 0){
            story = createSprite(400,300);
            story.addAnimation("story1",sImg1);
            video = 1;
        }

        if (keyDown("1") && video == 1){
            story.addAnimation("story2",sImg2);
            story.changeAnimation("story2");
            video = 2;
        }

        if (keyDown("2") && video == 2){
            story.addAnimation("story3", sImg3);
            story.changeAnimation("story3");
            video = 3;
        }
        if (keyDown("3") && video == 3){
            story.addAnimation("story4", sImg4);
            story.changeAnimation("story4");
            video = 4;
            playButton = createSprite(570,300,200,200);
            playButton.addImage(playButtonImg);
            playButton.scale = 0.5;
        }
        if (video == 4 && keyDown("space")){
            BG = createSprite(400,200,800,600);
            BG.addImage(bgImg);
            BG.scale = 0.7;
      
            counter = createSprite(400,500,700,200);

            gameState = 1;
        }
    }
}