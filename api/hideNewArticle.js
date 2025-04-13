import { getFirestore, doc, updateDoc } from 'firebase/firestore';

export default async function hideNewArticle(id) {
  const db = getFirestore();
  const currentArticleRef = doc(db, 'articles', `${id}`);
  await updateDoc(currentArticleRef, {
    visible: false,
  });
}
