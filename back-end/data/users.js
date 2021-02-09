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
    email: "person2@example.com",
    password: bcrypt.hashSync("123456", salt),
  },
  {
    name: "person2",
    email: "person2@example.com",
    password: bcrypt.hashSync("123456", salt),
  },
]


export default users;
