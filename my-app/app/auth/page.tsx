"use client";

import Link from "next/link";
import { useState } from "react";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("signup");

  return (
    <div className="flex min-h-screen font-sans">
      <div className="hidden lg:flex lg:w-[45%] relative bg-linear-to-br from-navy to-primary text-white flex-col justify-between p-12">
        <div className="absolute top-0 right-0 opacity-[0.04] pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            {Array.from({ length: 36 }).map((_, i) => (
              <rect
                key={i}
                x={(i % 6) * 30 + 10}
                y={Math.floor(i / 6) * 30 + 10}
                width="18"
                height="18"
                rx="4"
                fill="currentColor"
              />
            ))}
          </svg>
        </div>

        <div>
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:opacity-90 transition-opacity"
          >
            Succoth Initiative Inc.
          </Link>
        </div>

        <div className="max-w-md">
          <h1 className="text-4xl font-bold tracking-tight mb-6 leading-tight">
            Connecting the right people to the right homes.
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Join Succoth Initiative to list your property, find housing, and
            access programs that advance housing equity across Newfoundland.
          </p>
        </div>

        <div className="flex items-center gap-6 text-white/40 text-xs">
          <Link href="/find-a-home" className="hover:text-white transition-colors">
            Find a Home
          </Link>
          <Link href="/list-a-home" className="hover:text-white transition-colors">
            List a Home
          </Link>
          <Link href="/events" className="hover:text-white transition-colors">
            Events
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>

      
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-background">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-10">
            <Link
              href="/"
              className="text-navy font-bold text-xl tracking-tight"
            >
              Succoth Initiative Inc.
            </Link>
          </div>

          
          <div className="flex bg-white rounded-xl p-1 border border-black/5 mb-8">
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 text-sm font-semibold py-2.5 rounded-lg transition-all duration-200 ${
                mode === "signup"
                  ? "bg-navy text-white shadow-sm"
                  : "text-navy/50 hover:text-navy"
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setMode("login")}
              className={`flex-1 text-sm font-semibold py-2.5 rounded-lg transition-all duration-200 ${
                mode === "login"
                  ? "bg-navy text-white shadow-sm"
                  : "text-navy/50 hover:text-navy"
              }`}
            >
              Log In
            </button>
          </div>

          <h2 className="text-navy text-2xl font-bold tracking-tight mb-2">
            {mode === "signup"
              ? "Create your account"
              : "Welcome back"}
          </h2>
          <p className="text-foreground/50 text-sm mb-8">
            {mode === "signup"
              ? "Sign up to list your property or start searching for a home."
              : "Log in to manage your listings or continue browsing."}
          </p>

          <form className="space-y-5">
            {mode === "signup" && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="authFirstName"
                    className="block text-navy text-xs font-semibold uppercase tracking-wider mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="authFirstName"
                    type="text"
                    placeholder="John"
                    className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-navy placeholder:text-navy/30 outline-none focus:ring-2 focus:ring-accent transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="authLastName"
                    className="block text-navy text-xs font-semibold uppercase tracking-wider mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="authLastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-navy placeholder:text-navy/30 outline-none focus:ring-2 focus:ring-accent transition"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="authEmail"
                className="block text-navy text-xs font-semibold uppercase tracking-wider mb-2"
              >
                Email Address
              </label>
              <input
                id="authEmail"
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-navy placeholder:text-navy/30 outline-none focus:ring-2 focus:ring-accent transition"
              />
            </div>

            <div>
              <label
                htmlFor="authPassword"
                className="block text-navy text-xs font-semibold uppercase tracking-wider mb-2"
              >
                Password
              </label>
              <input
                id="authPassword"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-navy placeholder:text-navy/30 outline-none focus:ring-2 focus:ring-accent transition"
              />
            </div>

            {mode === "signup" && (
              <div>
                <label
                  htmlFor="authRole"
                  className="block text-navy text-xs font-semibold uppercase tracking-wider mb-2"
                >
                  I am a
                </label>
                <select
                  id="authRole"
                  className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-navy outline-none focus:ring-2 focus:ring-accent transition bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your role...
                  </option>
                  <option>Tenant — looking for housing</option>
                  <option>Property Owner — listing a home</option>
                  <option>Community Partner</option>
                </select>
              </div>
            )}

            {mode === "login" && (
              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-xs text-accent hover:underline font-medium"
                >
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-navy text-white text-sm font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity duration-200"
            >
              {mode === "signup" ? "Create Account" : "Log In"}
            </button>
          </form>

          
          <div className="flex items-center gap-4 my-8">
            <span className="flex-1 h-px bg-black/5" />
            <span className="text-foreground/30 text-xs">or continue with</span>
            <span className="flex-1 h-px bg-black/5" />
          </div>

          
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-white border border-black/10 rounded-xl py-3 text-sm font-medium text-navy hover:border-navy/30 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border border-black/10 rounded-xl py-3 text-sm font-medium text-navy hover:border-navy/30 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              Facebook
            </button>
          </div>

          <p className="text-center text-foreground/40 text-xs mt-8">
            By continuing, you agree to our{" "}
            <a href="#" className="underline hover:text-navy">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-navy">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
