import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const SignupForm = ({ onSuccess }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // In a real app, this would create a user in the backend
    localStorage.setItem('user', JSON.stringify({ ...data, isLoggedIn: true }));
    toast.success("Successfully signed up!");
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>
      <div>
        <Input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>
      <div>
        <Input
          type="text"
          placeholder="Zipcode"
          {...register("zipcode", { 
            required: "Zipcode is required",
            pattern: {
              value: /^\d{5}$/,
              message: "Please enter a valid 5-digit zipcode"
            }
          })}
        />
        {errors.zipcode && <p className="text-red-500 text-sm">{errors.zipcode.message}</p>}
      </div>
      <Button type="submit" className="w-full">Sign Up</Button>
    </form>
  );
};

export default SignupForm;