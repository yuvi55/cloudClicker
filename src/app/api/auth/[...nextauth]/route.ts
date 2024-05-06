import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";
import db from "../../../../../helper/firebaseConfig";
import {
  CollectionReference,
  collection,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile?.name,
          email: profile.email,
          image: profile?.picture,
        };
      },
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {},
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!user.email) {
        throw new Error("Email is required for sign-in.");
      }
      const userCollection = collection(db, "Users");
      const docRef = doc(userCollection, user.email); // Using email as the document ID

      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        const newUser = {
          email: user.email,
          name: user.name,
          image: user.image,
          clicks: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          provider: account?.provider,
          googleId: profile?.sub,
        };
        await setDoc(docRef, newUser);
        return true;
      } else {
        await updateDoc(docRef, { updatedAt: new Date() });
        return true;
      }
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
