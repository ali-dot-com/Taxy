"use client"
import { useEffect } from 'react';
import { redirect } from 'next/navigation'

const Home = () => {

  useEffect(() => {
    redirect('/chat')
  }, []);

  return null;
};

export default Home;
