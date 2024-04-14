import express from "express";

const app = express();
const port = 9000;

app.get("/users", (req, res) => {
  let users = [
    {
      id: "1",
      loginId: 1,
      name: "raju",
      email: "skkanakaraju@gmail.com",
      phoneNumber: "8008868653",
    },
    {
      id: "2a91",
      userId: 2,
      loginId: 2,
      name: "ramu",
      email: "ramu@gmail.com",
      phoneNumber: "8008868653",
    },
    {
      id: "7d28",
      loginId: "b8a2",
      name: "jaanu",
      email: "skkanakaraju@gmail.com",
      phoneNumber: "12345678",
    },
    {
      id: "8486",
      loginId: "c80e",
      name: "divya sai",
      email: "skkanakaraju@gmail.com",
      phoneNumber: "8008868653",
    },
    {
      id: "e986",
      loginId: "50f2",
      name: "v kanakaraju",
      email: "rajukanaka142@gmail.com",
      phoneNumber: "7036266076",
    },
    {
      id: "2954",
      loginId: "97b4",
      name: "",
      email: "",
      phoneNumber: "",
    },
    {
      id: "60df",
      loginId: "c2af",
      name: "VECHALAPU SANTHOSH",
      email: "santhurock499@gmail.com",
      phoneNumber: "09177072241",
    },
    {
      id: "3b0a",
      loginId: "b5e5",
      name: "VECHALAPU SANTHOSH",
      email: "santhurock499@gmail.com",
      phoneNumber: "09177072241",
    },
  ];
  return res.json({ status: 200, data: users });
});

app.listen(port);
