import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';

export default async function setNewArticle(content, title) {
  const db = getFirestore();
  const time = Math.floor(Math.random() * 10000001);
  await setDoc(doc(db, 'articles', `${time}`), {
    title: title,
    id: time,
    visible: true,
    content: content,
    createAt: serverTimestamp(),
  });
}
