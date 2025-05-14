"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Sparkles, Stars } from "lucide-react";
import { useActionState } from "react";
import { sendContactEmail } from "@/actions/sendContactEmail";

// Submit Button Component with Loading State
function SubmitButton({ isPending }) {
  return (
    <Button
      type="submit"
      className="w-full bg-business-700 hover:bg-business-800"
      disabled={isPending}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {isPending ? "Sending..." : "Send Message"}
        <Send />
      </span>
    </Button>
  );
}

export const ContactForm = () => {
  // Initialize form state
  const initialState = {
    message: "",
    success: false,
    error: false,
  };

  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState
  );

  return (
    <section id="contact" className="">
      {/* Show success/error messages */}
      {state?.message && (
        <div
          className={`mb-4 p-4 rounded-lg ${
            state.success
              ? "bg-green-500/10 text-green-500 border border-green-500/20"
              : "bg-red-500/10 text-red-500 border border-red-500/20"
          }`}
          role="alert"
        >
          {state.message}
        </div>
      )}

      <form action={formAction} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              className=""
              required
              disabled={isPending}
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              className=""
              required
              disabled={isPending}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Input
            type="text"
            name="subject"
            placeholder="Subject"
            className=""
            required
            disabled={isPending}
          />
        </div>
        <div className="space-y-2">
          <Textarea
            name="message"
            placeholder="Your Message"
            className=""
            required
            disabled={isPending}
          />
        </div>
        <SubmitButton isPending={isPending} />
      </form>
    </section>
  );
};
