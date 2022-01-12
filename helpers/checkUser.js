import { useState, useEffect } from "react";
import { Auth, Hub } from "aws-amplify";

export default function checkUser() {
  const [user, setUser] = useState(null);

  async function checkUserAuth() {
    try {
      const signedInUser = await Auth.currentAuthenticatedUser();
      setUser(signedInUser);
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    checkUserAuth();
    const unsubscribe = Hub.listen("auth", () => checkUserAuth());
    return () => unsubscribe();
  }, []);

  return user;
}
