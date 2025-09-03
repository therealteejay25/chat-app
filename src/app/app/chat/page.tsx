"use client"
import LogoIcon from "@/components/icons/LogoIcon";
import React, { useEffect, useState } from "react";

const page = () => {

  const [user, setUser] = useState({})

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (!id) return;
  
    fetch(`http://localhost:8000/api/user/${id}`)
      .then(res => res.json())
      .then(data => {setUser(data)
        console.log(user)
      })
      .catch(console.error);
  }, []);

  return (
    <div className="h-full text-white flex">
      <div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default page;
