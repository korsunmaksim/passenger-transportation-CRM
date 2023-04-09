import React, { useEffect } from "react";
import { MainRouter } from "./modules/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { userService } from "./modules/service/user.service";

function App() {
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser)
        userService.addUser(currentUser.uid, currentUser.email!, "client");
    });
    return () => {
      unsub();
    };
  }, []);

  return <MainRouter />;
}

export default App;
