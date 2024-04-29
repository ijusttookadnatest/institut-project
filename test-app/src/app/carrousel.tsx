import React, { useState, useEffect } from 'react';
import '../styles/carrousel.css';

// Définir l'interface pour les props
interface CarrouselProps {
  initialePosition?: number;
}

// Composant avec l'application du type aux props
const Carrousel: React.FC<CarrouselProps> = ({ initialePosition = 0 }) => {
    const [position, setPosition] = useState<number>(initialePosition);
    const nbr = 32; // Nombre total d'images
    const [width, setWidth] = useState<number>(window.innerWidth > 1024 ? 600 : 300);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth > 1024 ? 600 : 300);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const moveLeft = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        if (position > 0) {
            setPosition(position - 1);
        }
        console.log(position);
    };

    const moveRight = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        if (position < nbr - 1) {
            setPosition(position + 1);
        }
        console.log(position);
    };

    const imageUrls = [
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ongle.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg',
        '../../img/ongles/ong.jpeg'
    ];

    return ( 
      <>
        <div id="carrousel">
            <div id="container-carr" 
            style={{
              width: `${600 * nbr}px`,
              transform: `translate(-${position * width}px)`,
              transition: 'all 0.5s ease'
            }}>
                {imageUrls.map((url, index) => (
                  <div key={index} onClick={moveRight} className="photo" style={{ backgroundImage: `url(${url})` }} />
                  ))}
            </div>
        </div>
        <div className="left arrow" onClick={moveLeft} style={{ visibility: position === 0 ? 'hidden' : 'visible' }}>❮</div>
        <div className="right arrow" onClick={moveRight} style={{ visibility: position === nbr - 1 ? 'hidden' : 'visible' }}>❯</div>
        </>
    );
};

export default Carrousel;