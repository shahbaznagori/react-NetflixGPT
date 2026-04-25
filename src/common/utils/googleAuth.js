import { signInWithPopup, GoogleAuthProvider ,getAdditionalUserInfo } from "firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("THIS IS COMING HERERcccc")

    const credential = GoogleAuthProvider.credentialFromResult(result);
        const additionalInfo = getAdditionalUserInfo(result);
            const isNewUser = additionalInfo?.isNewUser;


    const token = credential?.accessToken;

    const user = result.user;

    return { user, token ,isNewUser}; // ✅ return data

  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
};