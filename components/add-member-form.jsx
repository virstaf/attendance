"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTransition } from "react";
import { branches, roles } from "@/lib/data";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { DatePicker } from "./date-picker";
import { useContext } from "react";
import MemberDobContext from "@/contexts/memberDob";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes"
    )
    .transform((name) => name.trim())
    .refine((name) => name.split(" ").length >= 2, {
      message: "Please enter both first and last name",
    }),

  email: z
    .string()
    .email("Please enter a valid email address")
    .endsWith(".com", "Only .com domains are allowed"), // optional restriction

  branch: z.string().min(1, "Branch is required"),

  role: z.string().min(1, "Role is required"),
});

const AddMemberForm = () => {
  const { memberDob } = useContext(MemberDobContext);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      dob: memberDob,
      branch: "",
      role: "",
    },
  }); // Initialize the form with Zod validation

  const [isPending, startTransition] = useTransition();

  const handleAddMember = async () => {
    startTransition(async () => {
      const dob = memberDob;
      const formData = form.getValues();
      const { name, email, branch, role } = formData;
      const member = {
        name,
        email,
        dob,
        branch,
        role,
      };
      console.log("Member data:", member);

      form.reset();
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleAddMember)}
        className="max-w-[550px] mx-auto"
      >
        <div className="flex flex-col gap-6 w-full p-6 border rounded-2xl shadow-md">
          <div className="text-center">
            <h3 className="font-bold text-2xl">Add Member</h3>
            <p>Fill the below form to add a member</p>
          </div>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="grid grid-cols-[120px_1fr] gap-2">
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input
                    className="text-sm"
                    placeholder="Enter fullname"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="grid grid-cols-[120px_1fr] gap-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="text-sm"
                    placeholder="Enter email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-[120px_1fr] gap-2">
            <Label htmlFor="date of birth">Date of Birth</Label>
            <DatePicker />
          </div>

          <FormField
            control={form.control}
            name="branch"
            render={({ field }) => (
              <FormItem className="grid grid-cols-[120px_1fr] gap-2">
                <FormLabel>Branch</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full min-w-[180px]">
                    <SelectValue placeholder="Select branch" />
                  </SelectTrigger>
                  <SelectContent>
                    {branches.map((branch, index) => (
                      <SelectItem key={index} value={branch.name}>
                        {branch.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="grid grid-cols-[120px_1fr] gap-2">
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full min-w-[180px]">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role, index) => (
                      <SelectItem key={index} value={role.value}>
                        {role.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-4" disabled={isPending}>
            {isPending ? (
              <span className="animate-spin">
                <Loader2 />
              </span>
            ) : (
              "Add Member"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddMemberForm;
