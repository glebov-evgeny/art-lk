import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default async function getDate() {
  const db = getFirestore();
  const request = [];
  const querySnapshot = await getDocs(collection(db, 'articles'));
  querySnapshot.forEach((doc) => {
    const item = {
      data: doc.data(),
      id: doc.id,
    };
    request.push(item);
  });
  return request;
}
