"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { branches } from "@/lib/data";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { date, z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Event name must be at least 5 characters")
    .max(100, "Event name must be less than 100 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Event name can only contain letters, spaces, hyphens, and apostrophes"
    ),

  branch: z.string().min(1, "Branch is required"),

  //   time: date(),
});

const AddEventForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      branch: "",
      time: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  const handleAddEvent = async () => {
    startTransition(async () => {
      const formData = form.getValues();
      //   const { name, branch, time } = formData;

      console.log("event data:::", formData);

      form.reset();
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleAddEvent)}
        className="max-w-[550px] mx-auto"
      >
        <div className="flex flex-col gap-6 w-full p-6 border rounded-2xl shadow-md">
          <div className="text-center">
            <h3 className="font-bold text-2xl">Add Event</h3>
            <p>Fill the below form to add an Event</p>
          </div>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="grid grid-cols-[120px_1fr] gap-2">
                <FormLabel>Event name</FormLabel>
                <FormControl>
                  <Input
                    className="text-sm w-full min-w-[180px]"
                    placeholder="Enter event name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

          <Button type="submit" className="mt-4" disabled={isPending}>
            {isPending ? (
              <span className="animate-spin">
                <Loader2 />
              </span>
            ) : (
              "Add Event"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddEventForm;
