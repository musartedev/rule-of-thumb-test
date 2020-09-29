import { db } from '../services/firebase';

// eslint-disable-next-line import/prefer-default-export
export const getPreviousRulings = async () => {
  try {
    const querySnapshot = await db
      .collection('ruling')
      .orderBy('createdAt')
      .get();
    const result = [];
    querySnapshot.forEach(doc => result.push(doc.data()));
    return result;
  } catch (err) {
    console.log('getPreviousRulings -> err', err);
    return err;
  }
};
