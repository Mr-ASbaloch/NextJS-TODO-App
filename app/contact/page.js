"use client";
import React, { useEffect, useState } from "react";
import connectMongoDb from "@/libs/mongodb";
import task from "@/models/task";
import { profile } from "@/models/users";
import { NextResponse } from "next/server";
connectMongoDb();

const Contact = () => {
  const [result, setResult] = useState([]);
  const getData = () => {
    const data = fetch("http://localhost:3000/api/users");
    const res = data.json();
    console.log(res);
    setResult(result.users);
  };
  useEffect(() => {
    getData();
  });
  return (
    <div>
      <>
      <h1>result page</h1>
        {result.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item}</h1>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default Contact;
