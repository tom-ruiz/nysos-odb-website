import React from 'react';
import '../../style/home.css';
import background from '../../img/interface-numerique.jpg';
import logo1 from '../../img/nysos-logo.png';
import nysos from '../../img/nysos.png'
import FadeIn from 'react-fade-in';
function Home() {
    document.addEventListener('mousemove', parallax);

    function parallax(e) {
        this.querySelectorAll('.layer').forEach(layer => {
            let speed = layer.getAttribute('data-speed');
            let x = (window.innerWidth - e.pageX * speed) / 100;
            let y = (window.innerWidth - e.pageY * speed) / 100;
            layer.style.transform = `translate(${x}px, ${y}px)`;
        });
    }


    return (

        <div className="homepage">

            <section className="home home-section">

                <div className="bg">
                    <img src={background} className="layer background" alt="Background" data-speed="-2" />
                </div>
                <FadeIn delay="400">
                    <img src={logo1} className="layer" alt="Nysos" data-speed="-4" />
                </FadeIn>
                <FadeIn delay="1400">
                    <img src={nysos} className="layer girl" alt="Nysos" data-speed="2" />
                </FadeIn>
            </section>


        </div>
    );
}

export default Home;