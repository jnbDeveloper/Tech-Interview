
import dbConnect from '../lib/mongodb';
import User from '../model/user';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, password } = req.body;

    try {
      await dbConnect();

       
      const existingUser = await User.findOne({ name });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'User already exists' });
      }

     
      const hashedPassword = await bcrypt.hash(password, 10);

 
      const newUser = await User.create({ name, password: hashedPassword });

      res.status(201).json({ success: true, user: { name: newUser.name } });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
