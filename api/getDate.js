import { getFirestore, getDoc, doc } from 'firebase/firestore';

export default async function getDate(id) {
  const db = getFirestore();
  const docRef = doc(db, 'date', id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
