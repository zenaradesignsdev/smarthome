'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { contactSchema, type ContactFormValues } from './contact.schema'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

async function submitContactForm(data: ContactFormValues): Promise<void> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const body = await response.json().catch(() => ({}))
    throw new Error((body as { error?: string }).error ?? 'Failed to send message')
  }
}

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      website: '',
    },
  })

  const { mutate, isPending } = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      toast.success("Message sent — we'll be in touch shortly.")
      form.reset()
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Something went wrong. Please try again.')
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => mutate(data))} noValidate className="space-y-6">
        {/* Honeypot — hidden from real users, bots fill it, server rejects those submissions */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...form.register('website')}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Smith" autoComplete="name" {...field} />
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
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="jane@example.com"
                    autoComplete="email"
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
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Phone number <span className="text-muted-foreground">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="+1 (416) 555-0100"
                  autoComplete="tel"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="How can we help?"
                  rows={6}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          type="submit"
          disabled={isPending}
          className="relative overflow-hidden gold-gradient text-on-primary font-bold px-8 py-4 rounded-xl text-base font-headline uppercase tracking-wider hover:shadow-[0_0_32px_rgba(255,193,7,0.45)] transition-shadow group disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
        >
          <span className="relative z-10">{isPending ? 'Sending…' : 'Send Message'}</span>
          <span className="absolute inset-0 w-1/3 -skew-x-[18deg] bg-white/25 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-out" />
        </button>
      </form>
    </Form>
  )
}
