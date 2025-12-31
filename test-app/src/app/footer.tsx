import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
    <div className="section footer">
        <div className="full-section-image footer" id="contact">
            <div className="center-content-wrapper center-aligment footer">
                <div className="decorative footer">À propos de l&apos;institut...</div>
                <div className="content-footer">
                    <h2  className="h2-footer">Institut Secrets de Beauté</h2>
                    <div className="wrapper-footer">
                        <p className="p-footer">INSTITUT CLIMATISÉ</p>
                        <p className="p-footer">Adresse : 10 rue du Distro, 56690 LANDÉVANT</p>
                    </div>
                    <div className="wrapper-footer">
                        <p className="p-footer">Tel : 06 12 35 08 77</p>
                        <p className="p-footer">Rendez-vous par SMS</p>
                    </div>
                    <div className="wrapper-footer">
                        <p className="p-footer">Pas de règlement en CB</p>
                    </div>
                    <div className="wrapper-footer">
                        <p className="p-footer heavy">Ouvert sur rendez-vous</p>
                        <p className="p-footer"><br></br>Horaires d&apos;ouverture :</p>
                        <p className="p-footer"><br></br>Lundi : de 13h30 à 19h00</p>
                        <p className="p-footer">Mardi : de 9h00 à 19h00</p>
                        <p className="p-footer">Mercredi : de 13h30 à 19h00</p>
                        <p className="p-footer">Jeudi : de 9h00 à 19h00</p>
                        <p className="p-footer">Vendredi : de 8h30 à 13h30</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
