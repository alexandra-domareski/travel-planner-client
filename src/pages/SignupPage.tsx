import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { register } = useAuth();
  const nav = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      setSubmitting(true);
      const trimmedName = name.trim();
      await register(email, password, trimmedName ? trimmedName : undefined);
      nav("/login");
    } catch {
      setError("Registration failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F2F1] p-6">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-[#3A2A1A] mb-6">
          Create your account
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Input
            label="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <Button type="submit" className="w-full">
            Signup
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#3B82F6] hover:underline font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignupPage;
