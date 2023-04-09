import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { auth } from "../../firebase";
import { googleAuthProvider } from "../../firebase";
import { ToastError, ToastSuccess } from "../components/toast/toast.component";
import { DB_TABLES } from "../consts/app_keys.const";

class UserService {
  public emailPasswordRegister = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      if (err instanceof Error) ToastError(err.message);
    }
  };

  public emailPasswordSignUp = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      ToastSuccess("User was succesfully registred!");
    } catch (err) {
      if (err instanceof Error) ToastError(err.message);
    }
  };

  public googleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (err) {
      if (err instanceof Error) ToastError(err.message);
    }
  };

  public logout = async () => {
    await signOut(auth);
  };

  public getUsers = async () => {
    try {
      const allUsers = await getDocs(collection(db, DB_TABLES.USERS)).then(
        (snapshot) =>
          snapshot.docs.map((doc) => ({
            id: doc.id,
            email: String(doc.data().email),
            role: String(doc.data().role),
          }))
      );
      return allUsers;
    } catch (e) {
      console.log(e);
    }
  };

  public addUser = async (id: string, email: string, role: string) => {
    const allUsers = await this.getUsers();
    const isExistUser = allUsers?.filter((user) => user.email === email);
    if (isExistUser?.length === 0) {
      try {
        await addDoc(collection(db, DB_TABLES.USERS), { id, email, role });
      } catch (e) {
        console.log(e);
      }
    }
  };

  public updateUserRole = async (userId: string, newRole: string) => {
    try {
      await updateDoc(doc(db, DB_TABLES.USERS, userId), {
        role: newRole,
      });
      ToastSuccess(`Role was succesfully changed to ${newRole}`);
    } catch (err) {
      if (err instanceof Error) ToastError(err.message);
    }
  };
}

export const userService = new UserService();
