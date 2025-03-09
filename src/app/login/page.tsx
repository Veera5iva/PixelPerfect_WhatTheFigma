"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      // Handle login logic here
      console.log("Login attempt with:", { email, password })
   }

   return (
      <div className="min-h-screen flex flex-col md:flex-row">
         {/* Image Section */}
         <div className="hidden md:block md:w-1/2 relative">
            <Image
               src="/placeholder.svg?height=1080&width=1080"
               alt="Fresh organic produce"
               fill
               className="object-cover"
            />
         </div>

         {/* Login Form Section */}
         <div className="w-full md:w-1/2 flex items-center justify-center p-8">
            <div className="w-full max-w-md">
               <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-2">Log In</h1>
                  <p className="text-text-light">Welcome back to FreshHarvest</p>
               </div>

               <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                     <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                     </label>
                     <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your email"
                        required
                     />
                  </div>

                  <div>
                     <label htmlFor="password" className="block text-sm font-medium mb-2">
                        Password
                     </label>
                     <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your password"
                        required
                     />
                  </div>

                  <div className="flex items-center justify-between">
                     <div className="flex items-center">
                        <input
                           id="remember-me"
                           type="checkbox"
                           className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-text-light">
                           Remember me
                        </label>
                     </div>

                     <div className="text-sm">
                        <Link href="#" className="text-primary hover:underline">
                           Forgot password?
                        </Link>
                     </div>
                  </div>

                  <button type="submit" className="w-full btn-primary">
                     Log In
                  </button>
               </form>

               <div className="mt-6 text-center">
                  <p className="text-text-light">
                     Don&apos;t have an account?{" "}
                     <Link href="/signup" className="text-primary hover:underline">
                        Sign up
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

