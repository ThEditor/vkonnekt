import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { cn } from '../utils/cn';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';

export default function Join() {
  const router = useRouter();
  const [roomId, setRoomId] = useState('');

  const handleChange = (e: any) => {
    setRoomId(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (roomId.match(/\w{4}\-\w{4}/)) {
      router.push(`/rooms/${roomId}`);
    } else {
      alert('Invalid room id');
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#111] justify-center h-screen">
      <form className='w-96' onSubmit={handleSubmit}>
        <h1 className="text-3xl text-white font-bold mb-6">Join Room</h1>
        <LabelInputContainer className="mb-4">
          <Label className='text-white' htmlFor="email">Room ID</Label>
          <Input
            id="room-id"
            name="room-id"
            placeholder="Enter Room ID"
            value={roomId}
            onChange={handleChange}
            type="text"
          />
        </LabelInputContainer>

        <button
          type="submit"
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        >
          Join &rarr;
          <BottomGradient />
        </button>
        <button
          onClick={() => {
            localStorage.removeItem('username');
            localStorage.removeItem('name');
            router.push('/');
          }}
          className="bg-gradient-to-br mt-5 relative group/btn from-red dark:from-red-900 dark:to-red-900 to-red-600 block dark:bg-red-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        >
          Logout &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn('flex flex-col space-y-2 w-full', className)}>{children}</div>;
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
