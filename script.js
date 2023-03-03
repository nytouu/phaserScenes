class sceneExemple extends Phaser.Scene{
    constructor(){
        super("sceneExemple");
    }
    preload(){
        //ici le code de la fonction preload
    }
    create(){
        //ici le code de la fonction create
    }
    update(){
        //ici le code de la fonction update
    }
};

class menuChoixNiveau extends Phaser.Scene{
    constructor(){
        super("menuChoixNiveau");
    }
    preload(){
        //ici le code de la fonction preload
    }
    create(){
        //ici le code de la fonction create
    }
    update(){
        //ici le code de la fonction update
    }
};

var config =
{
    type: Phaser.AUTO,
    width: 1280, height: 720,
    physics:
    {
        default: 'arcade',
        arcade:
        {
            gravity: { y: 800 },
            debug: false
        }
    },
    scene: [sceneExemple,menuChoixNiveau],
    input:
    {
        gamepad: true
    }
};
new Phaser.Game(config);
