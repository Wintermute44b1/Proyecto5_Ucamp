import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("/api/auth");
      const data = await response.json();
      setUser(data);
    };
    getUser();
  }, []);

  if (!user) {
    return <div>Cargando..</div>;
  }

  return (
    <>
      <h1>Tus datos</h1>
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </>
  );
};

export default ProfilePage;