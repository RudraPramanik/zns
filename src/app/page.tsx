'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import ProductFilter from '../components/ProductFilter';
import PostList from '../components/link';
import { useRouter } from 'next/navigation'
import { Counter } from '../components/Counter';
interface Product {

}

const HomePage = () => {
  const router = useRouter()

  const posts = [
    {
      id: 1,
      slug: 'introduction-to-nextjs',
      title: 'Introduction to Next.js'
    },
    {
      id: 2,
      slug: 'deep-dive-into-ssg-and-ssr',
      title: 'Deep Dive into SSG and SSR'
    },
    {
      id: 3,
      slug: 'why-nextjs-is-great-for-seo',
      title: 'Why Next.js is Great for SEO'
    },
    {
      id: 4,
      slug: 'using-prisma-with-nextjs',
      title: 'Using Prisma with Next.js'
    }
  ];
  
  return (
    <div>
    hello
    <PostList posts={posts} />
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
    <Counter/>
    </div>
  );
};

export default HomePage;
