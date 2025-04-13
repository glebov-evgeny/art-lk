import { getFirestore, doc, deleteDoc } from 'firebase/firestore';

export default async function deleteNewArticle(id) {
  const db = getFirestore();
  await deleteDoc(doc(db, 'articles', `${id}`));
}
