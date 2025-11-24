// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyBrN3UPDcBgKb6APNxg_FITezsUKnPTBSk",
        authDomain: "aimstechsystem.firebaseapp.com",
        projectId: "aimstechsystem",
        storageBucket: "aimstechsystem.firebasestorage.app",
        messagingSenderId: "526062597380",
        appId: "1:526062597380:web:4a506bf795ef385b108c51",
        measurementId: "G-0EV3QXELN6"
      })
    ),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
}).catch(err => console.error(err));
