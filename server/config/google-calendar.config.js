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
          "access_token": "ya29.a0Ael9sCNipFPfWsrEVUpJfPk-2GxPUG3cY0w0F14KJZGQi68PivzBMhmTU12BiAQ0jK0LDppVHybWhl5CVC3lpfuzTCjIAoc4LEq_zkbrNKV_ALAzOFlbyBcXMEey9MYasQLbj2iF1sLiOs3UWsDb4THFdyYBaCgYKAU0SARISFQF4udJhwTe4dAm8jsOjYtiglCS4uQ0163",
          "scope": "https://www.googleapis.com/auth/calendar",
          "token_type": "Bearer",
          "expires_in": 3599,
          "refresh_token": "1//042jV3_F-AkX3CgYIARAAGAQSNwF-L9Ir1DnsJjkNxKve27lbLVpGpAy0HSKq1xbJtaViRSdf_j8MlqRX901qKGfMm9CukAr3gBE"
     }
}