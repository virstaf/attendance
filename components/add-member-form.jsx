"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTransition } from "react";
import { branches, roles } from "@/lib/data";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const AddMemberForm = () => {
  const [isPending, startTransition] = useTransition();
  const handleAddMember = async (formData) => {
    startTransition(async () => {
      const name = await formData.get("name");
      const email = await formData.get("email");
      const dob = await formData.get("date of birth");
      const branch = await formData.get("branch");
      const role = await formData.get("role");
      const data = { name, email, dob, branch, role };
      console.log("formadata:::", data);

      let errorMessage;
      let title;
      let description;

      errorMessage = "Something went wrong!";
      title = "Error";
      description: "Small error";

      if (errorMessage) {
        toast.error(title, { description });
      } else {
        toast.success("Member added", { description: "Check logs" });
      }
    });
  };
  return (
    <form action={handleAddMember} className="max-w-[550px] mx-auto">
      <div className="flex flex-col gap-4 w-full p-6 border rounded-2xl shadow-md">
        <div className="text-center">
          <h3 className="font-bold text-2xl">Add Member</h3>
          <p>Fill the below form to add a member</p>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">
            Name<span className="text-red-500">*</span>
          </Label>
          <Input type="text" name="name" id="name" className="" />
        </div>{" "}
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">
            Email<span className="text-red-500">*</span>
          </Label>
          <Input type="email" name="email" id="email" className="" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="date of birth">Date of Birth</Label>
          <Input type="date" name="date of birth" id="dob" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="branch">
            Branch<span className="text-red-500">*</span>
          </Label>
          <select
            name="branch"
            id="branch"
            className="border p-2 rounded-md shadow"
          >
            {branches.map((branch, index) => (
              <option key={index} value={branch.name}>
                {branch.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="role">
            Role<span className="text-red-500">*</span>
          </Label>
          <select
            name="role"
            id="role"
            className="border p-2 rounded-md shadow"
          >
            {roles.map((role, index) => (
              <option key={index} value={role.value}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
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
  );
};

export default AddMemberForm;
