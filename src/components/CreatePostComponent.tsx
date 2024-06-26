// app/components/CreatePostComponent.tsx
'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function CreatePostComponent() {
  const [title, setTitle] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/posts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });

    if (response.ok) {
      const { id } = await response.json();
      router.push(`/post/${id}`); // Use router.push to navigate
    } else {
      alert('Failed to create post');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title of the post"
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
}

export default CreatePostComponent;
