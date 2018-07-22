// import {Connect, SimpleSigner} from 'uport-connect'

const Connect = window.uportconnect.Connect
const SimpleSigner = window.uportconnect.SimpleSigner

window.onload = function () {
  const btn = document.getElementById("connectUportBtn")
  btn.addEventListener("click", (e) => uportConnect())
}

const uportConnect = function () {
 const logelem = document.getElementById("userInformation")
 const uport = new Connect("Hackathon", {
   clientId: "2oo7fQjxR44MnKa8n4XKDZBBa2Buty4qrug",
   network: "rinkeby",
   signer: SimpleSigner("d12d8a5c643ab7facc0a1815807aba1bed174762a2061b6b098b7bffd7462236")
 })

  // Request credentials to login
  uport.requestCredentials({
    // requested: ['name', 'phone', 'country'],
    notifications: true // We want this if we want to recieve credentials
  }).then((credentials) => {
    // Do something
    console.log(credentials)
    logelem.innerHTML = JSON.stringify(credentials, null, "  ")
  })

// Attest specific credentials
// uport.attestCredentials({
//   sub: THE_RECEIVING_UPORT_ADDRESS,
//   claim: {
//     CREDENTIAL_NAME: CREDENTIAL_VALUE
//   },
//   exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
// })

}
