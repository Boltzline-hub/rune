import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler, UseFormReturn } from "react-hook-form";
import { Form, FormControl, FormField,  FormItem, FormLabel, FormMessage,}from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupValidation } from "@/lib/validation";
import { Loader } from "lucide-react";
import { Link } from "react-router-dom";


// Define your form schema


// Define your form component
const Signupform: React.FC = () => {
  const isloading = false;

  // Define your form using useForm
  const form: UseFormReturn<z.infer<typeof SignupValidation >> = useForm({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // Define your submit handler
  const onSubmit: SubmitHandler<z.infer<typeof SignupValidation>> = (values) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
      <Form {...form}>
        <div className=" sm:428 flex-center  flex-col">
          <img className="w-40" src="/assets/images/logo.svg"/>
          <h2 className="h-5 md:h-10 pt-5 sm:pt-1"> Create a new account</h2>
          <p className="text-light-3 small-medium md:base-regular">To use Snapgram enter your account details</p>

        <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col gap-5 w-full mt-4">
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
          <Button type="submit" className="shad-button_primary">
              {isloading ? (
              <div className="flex-center gap-2"> 
                <Loader/> 
              </div>
              ): "Sign Up"}
          </Button>

          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account?  
            <Link to="/sign-in" className="text-primary-500 text-small-semibold ml-1"> Log in</Link>
          </p>
        </form>
      </div>
      </Form>
  );
};

export default Signupform;