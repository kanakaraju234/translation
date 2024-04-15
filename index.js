import cors from "cors";
import express from "express";

const app = express();
const port = 9000;

// Use the cors middleware
app.use(cors());

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

app.get("/users_credentials", (req, res) => {
  const { mail } = req?.query;
  console.log("GET", req.query);
  let credentials = [
    {
      id: "1",
      name: "raju",
      mail: "skkanakaraju@gmail.com",
      phoneNumber: "8008868653",
      password: "123",
      created_at: "02/04/2024",
      token: "automaticgenerated",
    },
    {
      id: "2",
      name: "ramu",
      mail: "ramu@gmail.com",
      phoneNumber: "8008868653",
      password: "123",
      created_at: "02/04/2024",
      token: "automaticgenerated",
    },
    {
      id: "b8a2",
      name: "jaanu",
      phoneNumber: "12345678",
      email: "skkanakaraju@gmail.com",
      password: "123",
      created_at: "2024-04-09T06:49:36.449Z",
      token: "newtoken",
    },
    {
      id: "407a",
      name: "priya",
      mail: "priya@gmail.com",
      phoneNumber: "8008868653",
      password: "123",
      created_at: "09/04/2024",
      token: "automaticgenerated",
    },
    {
      id: "c80e",
      name: "divya sai",
      phoneNumber: "8008868653",
      email: "skkanakaraju@gmail.com",
      password: "12345",
      created_at: "2024-04-09T14:38:13.730Z",
      token: "newtoken",
    },
    {
      id: "720f",
      name: "priya",
      mail: "priya@gmail.com",
      phoneNumber: "8008868653",
      password: "123",
      created_at: "09/04/2024",
      token: "automaticgenerated",
    },
    {
      id: "50f2",
      name: "v kanakaraju",
      phoneNumber: "7036266076",
      email: "rajukanaka142@gmail.com",
      password: "raju@123",
      created_at: "2024-04-12T04:08:52.783Z",
      token: "newtoken",
    },
    {
      id: "97b4",
      name: "",
      phoneNumber: "",
      email: "",
      password: "",
      created_at: "2024-04-13T08:42:31.642Z",
      token: "newtoken",
    },
    {
      id: "c2af",
      name: "VECHALAPU SANTHOSH",
      phoneNumber: "09177072241",
      email: "santhurock499@gmail.com",
      password: "santhu@123",
      created_at: "2024-04-13T08:43:13.019Z",
      token: "newtoken",
    },
    {
      id: "b5e5",
      name: "VECHALAPU SANTHOSH",
      phoneNumber: "09177072241",
      email: "santhurock499@gmail.com",
      password: "santhu@123",
      created_at: "2024-04-13T08:45:14.573Z",
      token: "newtoken",
    },
  ];
  console.log("Starting", mail);
  if (mail?.length > 0) {
    console.log("inside");
    let filterLogin = credentials?.find((item) =>
      item?.email?.toLowerCase().includes(mail?.toLowerCase())
    );
    console.log(filterLogin);
    return res.json({ status: 200, data: filterLogin });
  }
  return res.json({ status: 200, data: credentials });
});

app.listen(port);
