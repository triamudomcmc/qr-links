import { getDb } from "./firebase-admin";

const db = getDb();

export async function getZoomData() {
  const ref = db.collection("zoomlinks").doc("data");
  const doc = await ref.get();
  const data = doc.data();

  if (!data) return null;

  return {
    ...data,
  };
}
