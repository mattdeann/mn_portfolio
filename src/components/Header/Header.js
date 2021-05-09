import React from 'react';
import './Header.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function Header() {
  return (  <header>
            <section className="floater">
              <h1 className="animate__animated animate__bounceInUp">
                Molly Newton Interiors? Designs?
              </h1>
            </section>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              showStatus={false}
            >
                <div>
                    <img src="https://duetdesigngroup.com/wp-content/uploads/2020/05/Duet-Design-Residence_Kitchen-V2_compressed-e1591207800427.jpg" />
                    <p className="legend">Home Life</p>
                </div>
                <div>
                    <img src="https://www.studioilse.com/wp-content/uploads/2020/01/07.jpg" />
                    <p className="legend">Work is Cool</p>
                </div>
                <div>
                    <img src="https://www.studioilse.com/wp-content/uploads/2020/01/07.jpg" />
                    <p className="legend">Nap Time</p>
                </div>
            </Carousel>
            </header>
        );
}