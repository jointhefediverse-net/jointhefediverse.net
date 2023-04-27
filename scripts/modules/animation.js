const logos = document.getElementsByClassName('logo');
const centerCircle = document.getElementsByClassName('center');
const envelopes = document.getElementsByClassName('dot');
const connections = document.getElementsByClassName('line');

const animate = (step) => {
    switch (step) {
        case 1:
            Array.from(logos).forEach((logo) => {
                logo.src = `assets/logos/email/${logo.dataset.email}.svg`;
            });
            
            centerCircle[0].classList.add('fade-in');
            centerCircle[0].classList.remove('fade-out');
    
            Array.from(envelopes).forEach((envelope) => {
                envelope.classList.add('fade-in');
                envelope.classList.remove('fade-out');
            });
    
            Array.from(connections).forEach((connection) => {
                connection.classList.add('fade-in');
                connection.classList.remove('fade-out');
            });
        break;
    case 2:
        Array.from(logos).forEach((logo) => {
            logo.src = `assets/logos/social/${logo.dataset.social}.svg`;
        });

        centerCircle[0].classList.add('fade-out');
        centerCircle[0].classList.remove('fade-in');

        Array.from(envelopes).forEach((envelope) => {
            envelope.classList.add('fade-out');
            envelope.classList.remove('fade-in');
        });

        Array.from(connections).forEach((connection) => {
            connection.classList.add('fade-out');
            connection.classList.remove('fade-in');
        });

        break;
        
    case 3:
    case 4:
        Array.from(logos).forEach((logo) => {
            logo.src = `assets/logos/fediverse/${logo.dataset.fediverse}.svg`;
        });

        centerCircle[0].classList.add('fade-in');
        centerCircle[0].classList.remove('fade-out');

        Array.from(envelopes).forEach((envelope) => {
            envelope.classList.add('fade-in');
            envelope.classList.remove('fade-out');
        });

        Array.from(connections).forEach((connection) => {
            connection.classList.add('fade-in');
            connection.classList.remove('fade-out');
        });
    
        break;

    default:
        break;
    }
}

export default animate;