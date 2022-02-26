import React from "react";
import {GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {auth} from '../../database'

const config = {
     // Popup signin flow rather than redirect flow.
     signInFlow: 'popup',
     // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
     signInSuccessUrl: '/',
     // We will display Google and Facebook as auth providers.
     signInOptions: [
       GoogleAuthProvider.PROVIDER_ID,
       FacebookAuthProvider.PROVIDER_ID,
     ],
}

export default function Auth() {
    return (
      <div>
  
          <StyledFirebaseAuth uiConfig={config} firebaseAuth={auth} />
      </div>
    )
  }
  
