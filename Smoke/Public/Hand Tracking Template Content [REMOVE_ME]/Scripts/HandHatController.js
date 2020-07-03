// -----JS CODE-----
// HandHatController.js
// Version: 0.0.2
// Event: Initialized
// Description: Set and play texture depending on whether object is detected or lost.

// @input Component.AnimationMixer animMixer
// @input string foundAnimName
// @input string lostAnimName

// @ui {"widget":"separator"}
// @input Component.Image triggerImage
// @input Asset.Texture foundTexture
// @input Asset.Texture lostTexture

script.api.onObjectFound = function()
{
    setAndPlayTexture( script.triggerImage, script.foundTexture );
    playAnimation( script.animMixer, script.foundAnimName, script.lostAnimName, 1 );
}

script.api.onObjectLost = function()
{
    setAndPlayTexture( script.triggerImage, script.lostTexture );
    playAnimation( script.animMixer, script.lostAnimName, script.foundAnimName, -1 );
}

function setAndPlayTexture( imageComponent, texture )
{
    if( imageComponent )
    {
        if( texture )
        {
            imageComponent.mainPass.baseTex = texture;

            var isAnimated = !!texture.control.getDuration;
            if( isAnimated )
            {
                var provider = texture.control;
                provider.play( -1, 0 );
            }
        }
    }
}

function playAnimation( animationComponent, animNamePlay, animNamePause, loops )
{
    if( animationComponent )
    {
        if (animationComponent.getLayer( animNamePause )) {
            animationComponent.getLayer( animNamePause ).weight = 0.0;
        }
        if (animationComponent.getLayer( animNamePlay )) {
            animationComponent.getLayer( animNamePlay ).weight = 1.0;
        }
        animationComponent.start( animNamePlay, 0, loops );
    }
}