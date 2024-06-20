'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <div>
        <Link href="/">Home</Link>
        <Link href="/products" className="ml-4">
          Products
        </Link>
        <Link href="/cart" className="ml-4">
          Cart
        </Link>
      </div>
      <div>
        {session ? (
          <>
            <span className="mr-4">Hello, {session.user?.name}</span>
            <button onClick={() => signOut()}>Logout</button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
