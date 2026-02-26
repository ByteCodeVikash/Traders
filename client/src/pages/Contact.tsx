import { useCreateContact } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/routes";
import { Mail, Phone, MapPin, Send, Loader2, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    subtitle: "Typically reply within 2 hours",
    value: "support@techforex.com",
    href: "mailto:support@techforex.com",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Phone,
    title: "Call Us",
    subtitle: "Mon–Sat, 9 AM – 7 PM IST",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "Fastest response — usually instant",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: MapPin,
    title: "Location",
    subtitle: "Online & India-based",
    value: "New Delhi, India",
    href: null,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

export default function Contact() {
  const createContact = useCreateContact();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(data: InsertContact) {
    createContact.mutate(data, { onSuccess: () => form.reset() });
  }

  return (
    <div className="min-h-screen bg-[#07101e]">

      {/* Header */}
      <div className="relative bg-[#0b1627] border-b border-white/[0.05] py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-blue-600/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">
            <div className="w-5 h-0.5 bg-blue-400" />
            Get In Touch
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">Contact Us</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Have questions about our programs? Want to talk to a counsellor? We're here for you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 ${info.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm mb-0.5">{info.title}</div>
                    <div className="text-slate-600 text-xs mb-2 flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {info.subtitle}
                    </div>
                    {info.href ? (
                      <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={`${info.color} font-bold text-sm hover:underline`}>
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-slate-300 font-bold text-sm">{info.value}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Points */}
            <div className="p-5 rounded-2xl bg-blue-600/[0.06] border border-blue-500/20 mt-6">
              <div className="text-white font-bold text-sm mb-4">What to expect</div>
              {[
                "Response within 2 hours on WhatsApp",
                "No pushy sales calls",
                "Honest guidance on the right program",
                "Free 15-min consultation available",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2.5 text-slate-300 text-xs mb-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8">
              <h2 className="text-2xl font-black text-white mb-2">Send us a Message</h2>
              <p className="text-slate-500 text-sm mb-8">Fill in the form below and we'll get back to you within 2 hours.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 font-bold text-sm">Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Rahul Sharma"
                              className="h-12 bg-white/[0.05] border-white/10 text-white placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl"
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
                        <FormItem>
                          <FormLabel className="text-slate-300 font-bold text-sm">Email Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="rahul@example.com"
                              className="h-12 bg-white/[0.05] border-white/10 text-white placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300 font-bold text-sm">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us which program interests you, or ask us anything about trading..."
                            className="min-h-[160px] resize-none bg-white/[0.05] border-white/10 text-white placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={createContact.isPending}
                      className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-black rounded-2xl shadow-lg shadow-blue-900/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {createContact.isPending ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="w-4 h-4" /> Send Message</>
                      )}
                    </button>

                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button type="button" className="w-full py-4 bg-emerald-600/10 border border-emerald-500/25 hover:bg-emerald-600/20 text-emerald-400 font-black rounded-2xl transition-all flex items-center justify-center gap-2 text-sm">
                        💬 WhatsApp Instead
                      </button>
                    </a>
                  </div>

                  {createContact.isSuccess && (
                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
                      <CheckCircle2 className="w-4 h-4" />
                      Message sent! We'll respond within 2 hours.
                    </div>
                  )}
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
