const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv=require('dotenv');



const app = express();
app.use(express.json());
dotenv.config();

// TODO: solve this
if (!process.env.JWT_SECRET) {
  throw new Error }
const JWT_SECRET = process.env.JWT_SECRET;


let users = [];
let nextUserId = 1;

let notes = [];
let nextNoteId = 1;

// ---------- AUTH ROUTES (public) ----------

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'name, email and password are required' });
  }

  // TODO: solve this
  const existing = users.find(u => u.email === email.toLowerCase());
  if (existing) {
    return res.status(409).json({ error: 'Email already registered' });
  }

  // TODO: solve this
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = { id: nextUserId++, name, email:email.toLowerCase(), password: hashedPassword };
  users.push(user);

  res.status(201).json({ message: 'User registered', userId: user.id });
});

app.post('/login', async(req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email.toLowerCase());
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // TODO: solve this
  const isMatch =  await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const payload = { userId: user.id, email: user.email };

  // TODO: solve this
  const token =   jwt.sign(payload, JWT_SECRET,{expiresIn:'1h'});

  res.json({ message: 'Login successful', token });
});

// ---------- AUTH MIDDLEWARE ----------

function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // TODO: solve this
    req.user =jwt.verify(token, JWT_SECRET);
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

// ---------- PROTECTED ROUTES ----------

app.get('/profile', requireAuth, (req, res) => {
  const user = users.find(u => u.id === req.user.userId);
  res.json({ id: user.id, name: user.name, email: user.email });
});

app.post('/notes', requireAuth, (req, res) => {
  const { title, content } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'title is required' });
  }

  // TODO: solve this

  const note = { id: nextNoteId++, userId: req.user.userId, title, content: content || '' };
  notes.push(note);

  res.status(201).json(note);
});

app.get('/notes', requireAuth, (req, res) => {
  const myNotes = notes.filter(n => n.userId === req.user.userId);
  res.json(myNotes);
});

// TODO: solve this
app.get('/notes/:id', requireAuth, (req, res) => {
  const note = notes.find(n => n.id === Number(req.params.id)&&n.userId==req.user.userId);
  if (!note) return res.status(404).json({ error: 'Not found' });
  res.json(note);
});

// TODO: solve this
app.patch('/notes/:id', requireAuth, (req, res) => {
  const{title,content}=req.body;
  

  const note = notes.find(n => n.id === Number(req.params.id) && n.userId === req.user.userId);
  if (!note) return res.status(404).json({ error: 'Not found' });
  if(title!==undefined){
    note.title=title;

  }
   if(content!==undefined){
    note.content=content;

  }
  

  res.json(note);
});

// TODO: solve this — /login has no protection against repeated
// login attempts on the same account

app.listen(3000, () => console.log('Server running on port 3000'));