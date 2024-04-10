import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { cn } from '../utils/cn';

const login = async (username: string, password: string) => {
  const response = await fetch('https://positive-clearly-tiger.ngrok-free.app/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning":"any"
    },
    body: JSON.stringify({ reg_no: username, passwd: password }),
  });

  if (response.status == 200) {
    const body = await response.json();
    console.log(body);
    localStorage.setItem('username', body.username);
    localStorage.setItem('name', body.user);
  }
  return response.status == 200;
};

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // redirect directly to '/' if localStorage has username
  useEffect(() => {
    if (localStorage.getItem('username')) router.push('/register');
  }, []);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      if (await login(username, password)) router.push('/register');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center bg-[#111] justify-center h-screen">
      <form className="my-8 w-96" onSubmit={handleLogin}>
        <h1 className="text-3xl text-white font-bold mb-4">Login</h1>
        <LabelInputContainer className="mb-4">
          <Label className='text-white' htmlFor="email">Register Number</Label>
          <Input
            id="email"
            placeholder="00AAA0000"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className='text-white' htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </LabelInputContainer>

        <button type="submit" className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
          Login &rarr;
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
