import { getDb } from "./firebase-admin";

const db = getDb();

export async function getZoomData() {
  const ref = db.collection("zoomlinks")
  const doc = await ref.get();
  const data = {}

  doc.docs.forEach((e) => {
    // @ts-ignore
    data[e.id] = e.data()
  })

  if (!data) return null;

  return {
    ...data,
  };
}
