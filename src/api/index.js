import { db } from '../services/firebase';

const COLLECTION_NAME = 'ruling';

export const getPreviousRulings = async () => {
  try {
    const querySnapshot = await db
      .collection(COLLECTION_NAME)
      .orderBy('createdAt')
      .get();
    const result = [];
    querySnapshot.forEach(doc => result.push({ id: doc.id, ...doc.data() }));
    return result;
  } catch (err) {
    // TODO: Better error handling
    return err;
  }
};

export const updateThumbs = async (rulingId, updatedThumbs) => {
  try {
    const rulingRef = db.collection(COLLECTION_NAME).doc(rulingId);
    return rulingRef.update(updatedThumbs);
  } catch (err) {
    console.log('updateThumbs -> err', err);
    return err;
  }
};
