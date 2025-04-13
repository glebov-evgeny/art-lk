import { getFirestore, doc, updateDoc } from 'firebase/firestore';

export default async function updateNewArticle(content, title, id) {
  const db = getFirestore();
  const currentArticleRef = doc(db, 'articles', `${id}`);
  await updateDoc(currentArticleRef, {
    title: title,
    content: content,
  });
}
