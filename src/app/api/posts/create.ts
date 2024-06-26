// pages/api/posts/create.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        console.log('Received POST request');
        // Simulate a database operation
        const id = Date.now().toString();  // Generate a dummy ID
        console.log('Generated ID:', id);
        res.status(200).json({ id });
      } catch (error) {
        console.error('Error during POST request:', error);
        res.status(500).json({ error: 'Failed to create the post' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
