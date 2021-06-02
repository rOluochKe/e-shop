import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@e-shop.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
