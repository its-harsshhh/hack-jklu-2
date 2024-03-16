"use client";
import React, { useState, useContext, createContext } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation"; // Fixed import
import { auth } from "./firebase/firebase-config";
import { db } from "./firebase/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { useUser } from "@/context/userContext";

const UserContext = createContext(null);

const Login = () => {
  const [user] = useAuthState(auth);
  const { userData, setUserData } = useUser();

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const handleSignIn = async () => {
    const res = await signInWithEmailAndPassword(email, password);
    console.log({ res });

    if (res?.user) {
      const userUID = res.user.uid;
      console.log("User UID:", userUID);
      const userDocRef = doc(db, "users", "ZL2D1mDE1xOZYhRzAtdJ");
      const userDocSnapshot = await getDoc(userDocRef);
      if (userDocSnapshot.exists()) {
        const userDataRes = userDocSnapshot.data();
        console.log("User document data:", userDataRes);
        setUserData(userDataRes);
      } else {
        console.log("User document does not exist in Firestore.");
      }
      router.push("/dashboard");
    } else {
      console.log("Sign-in failed.");
    }
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-gray-800 w-1/3 p-10 h-fit flex flex-col gap-10 text-center rounded-2xl">
        <span className="text-xl font-bold"> Login Here </span>

        <div className="flex flex-col gap-5">
          <input
            className="p-2 rounded-xl"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <input
            className="p-2 rounded-xl"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <div>
          Not Registered ? <Link href={"/signup"}> Click Here </Link>
        </div>
        <button
          className="bg-blue-500 p-2 rounded-xl text-white"
          onClick={handleSignIn}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
