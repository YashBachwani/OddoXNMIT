import React from "react";
import { Navigate } from "react-router-dom";
import { auth, db } from "./components/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const ProtectedRoute = ({ allowedRole, children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;

  if (!user) {
    return <Navigate to="/login" />;
  }

  // Fetch user role from Firestore
  const [role, setRole] = React.useState(null);
  const [roleLoading, setRoleLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchRole = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setRole(docSnap.data().role);
      }
      setRoleLoading(false);
    };
    fetchRole();
  }, [user]);

  if (roleLoading) return <p>Loading...</p>;

  if (role !== allowedRole) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
