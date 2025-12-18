import Link from "next/link";

export default function Login() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2 text-gray-900">Welcome back</h1>
      <p className="text-gray-500 mb-8">
        Please enter your details to sign in.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            placeholder="name@company.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            placeholder="••••••••"
          />
        </div>
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
            />
            Remember me
          </label>
          <a href="#" className="text-orange-600 font-medium hover:underline">
            Forgot password?
          </a>
        </div>
        <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-all">
          Sign In
        </button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <button className="w-full border border-gray-300 py-2.5 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
        <span className="text-xl">G</span> Google
      </button>

      <p className="text-center mt-8 text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/signup"
          className="text-orange-600 font-bold hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
