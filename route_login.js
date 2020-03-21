const express = require('express');
const route = express.Router();
const mongodb = require('mongodb');

var url = 'mongodb://localhost:27017/data/main';

route.get('/',(req,res,next)=>{
    res.render('login',{layout:'login.hbs'});
});

// route.post('/',(req,res,next)=>{
    
//     if (req.getHeader("X-Requested-With") == null) {
//         // Without the `X-Requested-With` header, this request could be forged. Aborts.
//     };
    
//     // Set path to the Web application client_secret_*.json file you downloaded from the
//     // Google API Console: https://console.developers.google.com/apis/credentials
//     // You can also find your Web application client ID and client secret from the
//     // console and specify them directly when you create the GoogleAuthorizationCodeTokenRequest
//     // object.
//     var CLIENT_SECRET_FILE = "/path/to/client_secret.json";
    
//     // Exchange auth code for access token
//     var clientSecrets =
//         GoogleClientSecrets.load(
//             JacksonFactory.getDefaultInstance(), new FileReader(CLIENT_SECRET_FILE));
//     var tokenResponse =
//                 new GoogleAuthorizationCodeTokenRequest(
//                     new NetHttpTransport(),
//                     JacksonFactory.getDefaultInstance(),
//                     "https://oauth2.googleapis.com/token",
//                     clientSecrets.getDetails().getClientId(),
//                     clientSecrets.getDetails().getClientSecret(),
//                     authCode,
//                     REDIRECT_URI)  // Specify the same redirect URI that you use with your web
//                                 // app. If you don't have a web version of your app, you can
//                                 // specify an empty string.
//                     .execute();
    
//     var  accessToken = tokenResponse.getAccessToken();
    
//     // Use access token to call API
//     var credential = new GoogleCredential().setAccessToken(accessToken);
//     var drive =
//         new Drive.Builder(new NetHttpTransport(), JacksonFactory.getDefaultInstance(), credential)
//             .setApplicationName("Auth Code Exchange Demo")
//             .build();
//     var file = drive.files().get("appfolder").execute();
    
//     // Get profile info from ID token
//     var idToken = tokenResponse.parseIdToken();
//     var payload = idToken.getPayload();
//     var user_data = {
//         userId : payload.getSubject(),  // Use this value as a key to identify a user.
//         email : payload.getEmail(),
//         emailVerified : Boolean.valueOf(payload.getEmailVerified()),
//         name : payload.get('name'),
//         pictureUrl :  payload.get("picture"),
//         locale :  payload.get("locale"),
//         familyName :  payload.get("family_name"),
//         givenName :  payload.get("given_name"),
//     }
//     console.log(user_data);
// })
module.exports = route;