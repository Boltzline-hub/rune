import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler, UseFormReturn } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupValidation } from "@/lib/validation";
import { Loader } from "lucide-react";
import { Link } from "react-router-dom";
import { createUserAccount } from "@/lib/appwrite/api";

const Signupform: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const form: UseFormReturn<z.infer<typeof SignupValidation>> = useForm({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof SignupValidation>> = async (values) => {
    try {
      setIsLoading(true);
      const newUser = await createUserAccount(values);
      console.log(newUser);
      // Add any additional logic for successful user creation
    } catch (error) {
      console.error("User creation error:", error.message);
      // Add error handling and display relevant messages to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <div className="sm:428 flex-center flex-col">
        <div className="flex text-xl font-bold gap-2 items-center">
          <img className="w-10" src="/assets/images/boltline.png" alt="BoltLine Logo" />
          <h1>BoltLine</h1>
        </div>
        <h2 className="h-5 md:h-10 pt-5 sm:pt-1">Create a new account</h2>
        <p className="text-light-3 small-medium md:base-regular">
          To use Boltline, please enter your account details
        </p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary" disabled={isLoading}>
            {isLoading ? (
              <div className="flex-center gap-2">
                <Loader />
              </div>
            ) : (
              "Sign Up"
            )}
          </Button>

          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account?
            <Link to="/sign-in" className="text-primary-500 text-small-semibold ml-1">
              {" "}
              Log in
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default Signupform;
