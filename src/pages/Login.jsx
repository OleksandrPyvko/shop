import { useState } from "react";
import { login } from "../services/apiAuth";
import { useLogin } from "../features/auth/useLogin";

function Login() {
  const [email, setEmail] = useState(`user@email.com`);
  const [password, setPassword] = useState("123456");

  const { mutate, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    mutate({ email, password });
  }

  return (
    <>
    <form
      className="flex flex-col px-6 items-center bg-stone-200 max-w-[350px] m-auto py-10 rounded gap-4"
      onSubmit={handleSubmit}
    >
      <h1 className="py-8 text-2xl font-semibold">Login</h1>
      <input
        disabled={isLoading}
        placeholder="EMAIL"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        className="border border-gray-400 h-10 rounded px-2 w-full"
        />

      <input
        disabled={isLoading}
        placeholder="PASSWORD"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        className="border border-gray-400 h-10 rounded px-2 w-full"
        />

      <button
        disabled={isLoading}
        className="bg-stone-700 text-stone-200 px-4 py-2 rounded mt-5 w-full"
        >
        submit
      </button>
    </form>



        </>
  );
}

export default Login;