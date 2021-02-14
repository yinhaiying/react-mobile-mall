import bcrypt from "bcryptjs"
const salt = bcrypt.genSaltSync(10);
const users = [
  {
    name: "admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", salt),
    isAdmin: true
  },
  {
    name: "person1",
    email: "person1@example.com",
    password: bcrypt.hashSync("123456", salt),
    isAdmin: false,
  },
  {
    name: "person2",
    email: "person2@example.com",
    password: bcrypt.hashSync("123456", salt),
    isAdmin: false
  },
]


export default users;
