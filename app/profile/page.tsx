"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyFacebook, setCompanyFacebook] = useState("");
  const [companyInstagram, setCompanyInstagram] = useState("");
  const [companyTwitter, setCompanyTwitter] = useState("");
  const [companyYoutube, setCompanyYoutube] = useState("");

  const data = {
    name,
    email,
    password,
    company: {
      name: companyName,
      location: companyLocation,
      website: companyWebsite,
      socialLinks: {
        facebook: companyFacebook,
        twitter: companyTwitter,
        instagram: companyInstagram,
        youtube: companyYoutube,
      },
    },
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <form onSubmit={handleRegister} className="flex flex-col gap-5 w-1/2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          className="p-1 rounded-md"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="p-1 rounded-md"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="p-1 rounded-md"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          className="p-1 rounded-md"
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Location"
          value={companyLocation}
          className="p-1 rounded-md"
          onChange={(e) => setCompanyLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Website"
          value={companyWebsite}
          className="p-1 rounded-md"
          onChange={(e) => setCompanyWebsite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Facebook"
          value={companyFacebook}
          className="p-1 rounded-md"
          onChange={(e) => setCompanyFacebook(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Instagram"
          value={companyInstagram}
          className="p-1 rounded-md"
          onChange={(e) => setCompanyInstagram(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Twitter"
          value={companyTwitter}
          className="p-1 rounded-md"
          onChange={(e) => setCompanyTwitter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Youtube"
          value={companyYoutube}
          className="p-1 rounded-md"
          onChange={(e) => setCompanyYoutube(e.target.value)}
        />
        <button className="bg-white text-black rounded-md py-2" type="submit">Save Details</button>
      </form>
    </div>
  );
};

export default page;
