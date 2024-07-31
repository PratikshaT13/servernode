const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 8080;

// Set up CORS to allow requests from your deployed frontend
app.use(cors({
  origin: 'https://the-blue-transit.vercel.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

const busDataList = [
  { timestamp: '0 Hr 14 Min', busNumber: '101', passNumber: '17/45' },
  { timestamp: '0 Hr 21 Min', busNumber: '102', passNumber: '26/45' },
  { timestamp: '0 Hr 30 Min', busNumber: '103', passNumber: '12/45' },
  { timestamp: '0 Hr 44 Min', busNumber: '104', passNumber: '19/45' },
  { timestamp: '0 Hr 51 Min', busNumber: '105', passNumber: '06/45' },
  { timestamp: '0 Hr 56 Min', busNumber: '106', passNumber: '44/45' }
];

const users = [
  { username: 'user1', password: 'pass1', phone_no: '1234567890', email: 'user1@example.com' },
  { username: 'user2', password: 'pass2', phone_no: '0987654321', email: 'user2@example.com' }
];

app.get("/", (req, res) => {
    res.json("Hello");
})

app.get('/buses', (req, res) => {
  res.json(busDataList);
});

app.get('/api/auth/login', (req, res) => {
  const { username, password } = req.query;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json(true);
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.get('/api/auth/register', (req, res) => {
  const { username, password, phone_no, email } = req.query;
  const userExists = users.some(u => u.username === username);
  if (userExists) {
    res.status(400).json({ error: 'User already exists' });
  } else {
    const newUser = { username, password, phone_no, email };
    users.push(newUser);
    res.json(newUser);
  }
});

app.get('/buses', (req, res) => {
  const { sourceCode, destinationCode } = req.query;
  // Here we can filter busDataList based on source and destination codes
  // For now, just returning the full list as an example
  res.json(busDataList);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
