import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

export const userstore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) return set({ currentUser: null, isLoading: false });

    try {
      const docRef = doc(db, "users", uid);

      const docSnap = await getDoc(docRef);
      console.log("Document reference:", docRef);
      console.log("Document exists:", docSnap);
      console.log("Document data:", docSnap.data());
      if (docSnap) {
        return set({ currentUser: docSnap.data(), isLoading: false });
      } else {
        return set({ currentUser: null, isLoading: false });
      }
    } catch (err) {
      return set({ currentUser: null, isLoading: false });
    }
  },
}));
