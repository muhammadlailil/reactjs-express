export default {
     client_id: "884679408745-0ae2r7scc2mbp7r6ehc8n73ocvj4i2ng.apps.googleusercontent.com",

     project_id: "app-dev-385207",

     auth_uri: "https://accounts.google.com/o/oauth2/auth",

     token_uri: "https://oauth2.googleapis.com/token",

     auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",

     client_secret: "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",

     redirect_uris: ["http://localhost:3333/google/redirect"],

     scopes: [
          'https://www.googleapis.com/auth/calendar'
     ],


     // https://developers.google.com/oauthplayground/
     // Jika api digunakan untuk applikasi, maka credential token akan diambil dari applikasi setelah proses authorization
     credential: {
          "access_token": "ya29.a0Ael9sCMdNSRUvyqIm-WSRivT3ObzDN7W76ogFwN5cuU7oqPRmRVTnK9nesYMvRfKsTJ-VLPknhNmb_aid4hrEgo8J5DDC84tQjZ48Dw28KI_dPlI0Jg2hRfc6QolzoOVJpi5sjgjV6BlMNSnjftbMP9dimjBaCgYKAbcSARISFQF4udJhnPm99kba_ix7r722b4bwJQ0163",
          "scope": "https://www.googleapis.com/auth/calendar",
          "token_type": "Bearer",
          "expires_in": 3599,
          "refresh_token": "1//04MhePXapCO74CgYIARAAGAQSNwF-L9IrdPXcalVAigYoKgei_Ls89uCu9_c0DVxKKnqqj2J68wTD67gLTSrrdD3xnmLO9c90bZM"
     }
}