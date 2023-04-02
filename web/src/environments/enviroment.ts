
import { getAuth } from 'firebase/auth';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA-ME6Df5zLy5F3ALMh4L0RezePi4BkrK4',
    authDomain: 'angular-testing-49f71.firebaseapp.com',
    projectId: 'angular-testing-49f71',
    storageBucket: 'angular-testing-49f71.appspot.com',
    messagingSenderId: '772765801743',
    appId: '1:772765801743:web:6508751353b957675ff27a',
    measurementId: 'G-HSN2977LL8',
  },
};

export const auth = getAuth();
