const animate = (step) => {
    const supportsOffsetDistance = CSS && CSS.supports && CSS.supports('offset-distance', 0);
    const supportsMotionOffset = CSS && CSS.supports && CSS.supports('motion-offset', 0);

    if (!supportsOffsetDistance && !supportsMotionOffset){
        return false
    }

    const m = document.querySelectorAll('.mover');
    const logos = document.getElementsByClassName('logo');
    const time = 9000;

    const circleAnimationKeyframes = [
        { offsetDistance: '100%', motionOffset: '100%' },
        { offsetDistance: 0, motionOffset: 0 }
    ];

    const circleAnimationOptions = {
        duration: time,
        iterations: Infinity,
        fill: 'both',
        easing: 'ease-in'
    };

    const scaleAnimationKeyframes = [
        {   
            transform: 'scale(0)',
            opacity: 0, 
            offset: 0
        },
        {
            transform: 'scale(1)',
            opacity: 1, 
            offset: .01 },
        {   
            transform: 'scale(0)',
            opacity: 0, 
            offset: 1
        }
    ];

    const scaleAnimationOptions = {
        duration: time,
        iterations: Infinity,
        direction: 'normal',
        fill: 'both',
        easing: 'cubic-bezier(0.55,0.055,0.675,0.19)'
    };

    switch (step) {
        case 1:
            Array.from(logos).forEach((logo) => {
                logo.src = `assets/logos/email/${logo.dataset.email}.svg`
            });

            if (!window.animationStarted){
                window.animationStarted = true;
                window.circleAnimations = [];

                for (let i = 0, len = m.length; i < len; ++i) {
                    const delay = time * (i / m.length);
    
                    circleAnimationOptions.delay = delay; 
                    scaleAnimationOptions.delay = delay;

                    const circleAnimation = m[i].animate(circleAnimationKeyframes, circleAnimationOptions);
                    const scaleAnimation = m[i].querySelector('img').animate(scaleAnimationKeyframes, scaleAnimationOptions);                    
                    
                    window.circleAnimations = window.circleAnimations || [];
                    window.scaleAnimations = window.scaleAnimations || [];

                    window.circleAnimations.push(circleAnimation);
                    window.scaleAnimations.push(scaleAnimation);
                }

            } else {
                window.circleAnimations.forEach(animation => {
                    animation.playbackRate = 1;
                    animation.play();
                });
        
                window.scaleAnimations.forEach(animation => {
                    animation.playbackRate = 1;
                    animation.play();
                });
            }
    
        break;
    case 2:
        Array.from(logos).forEach((logo) => {
            logo.src = `assets/logos/social/${logo.dataset.social}.svg`
        });


        for (let i = 1; i <= 11; i++){
            (function(i){
          
              window.setTimeout(() => {
                window.circleAnimations.forEach(animation => {
                    if (i === 11){
                        animation.pause();
                    } else {
                        animation.playbackRate = 1/i;
                    }
                });
              }, i * 170);
            }(i));
        }

        window.scaleAnimations.forEach(animation => {
            animation.pause();
        });
        break;
        
    case 3:
    case 4:
        Array.from(logos).forEach((logo) => {
            logo.src = `assets/logos/fediverse/${logo.dataset.fediverse}.svg`
        });

        window.circleAnimations.forEach(animation => {
            animation.playbackRate = 1;
            animation.play();
        });

        window.scaleAnimations.forEach(animation => {
            animation.playbackRate = 1;
            animation.play();
        });
        break;

    default:
        break;
    }
}

export default animate;