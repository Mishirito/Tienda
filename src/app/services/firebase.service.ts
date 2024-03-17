import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { User } from '../model/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class firebaseService {
  // signIn(arg0: User) {
  //   throw new Error('Method not implemented.');
  // }

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);



  // ================== Authentication==================


  // =========== Acceder ============


  signIn(user: User) {

    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  // =========== Create User ============


  signUp(user: User) {

    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  // =========== Update User ============
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName });
  }

  // =========== Date Base ============

  // =========== Set a Document ============
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);

  }


}
