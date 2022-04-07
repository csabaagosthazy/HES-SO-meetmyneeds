import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAdmin = async (user) => {
    if (user) {
      if (user.role == "admin") return true;
      else return false;
    }
    return false;
  };

  const signup = (email, password) => {
    //do signup
    const user = {
      id: "userId",
      role: "user",
    };
    //do login
    setCurrentUser(user);
    return user;
  };

  const login = (email, password) => {
    //do login
    const user = {
      id: "userId",
      role: "user",
    };
    setCurrentUser(user);

    return user;
  };

  const logout = () => {
    //do logout
    setCurrentUser(null);
    console.log("signed out");

    return "signed out";
  };

  const resetPassword = (email) => {
    //do reset password
    return "password reset";
  };

  const updateEmail = (email) => {
    //do update email
    return "user email updated";
  };

  const updatePassword = (password) => {
    //do update password
    return "user password updated";
  };

  useEffect(() => {
    setLoading(false);
    //setup an event listener to check the user is still signed in
    const unsubscribe = async (user) => {
      await checkAdmin(user);
      setCurrentUser(user);
      setLoading(false);
    };

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    isAdmin,
    login,
    checkAdmin,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export default AuthProvider;
