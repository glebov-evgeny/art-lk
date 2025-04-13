import { getFirestore, setDoc, doc } from 'firebase/firestore';

export default async function addCard(currentUser, userColor) {
  const db = getFirestore();
  await setDoc(doc(db, 'date', `${currentUser.uid}`), {
    color: userColor.value,
    email: currentUser.email,
    uid: currentUser.uid,
  });
}
