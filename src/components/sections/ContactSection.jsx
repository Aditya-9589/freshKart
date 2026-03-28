import { createElement } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const contactItems = [
  { icon: MapPin, text: '12 MG Road, Indiranagar, Bengaluru 560038' },
  { icon: Phone, text: '+91 80 1234 5678' },
  { icon: Mail, text: 'hello@freshkart.example' },
  { icon: Clock, text: '7:00 AM – 11:00 PM, every day' },
]

/** Contact info + form; map placeholder hidden on small phones to reduce noise. */
export function ContactSection() {
  const { ref: leftRef, isInView: leftVisible } = useScrollAnimation()
  const { ref: rightRef, isInView: rightVisible } = useScrollAnimation()

  return (
    <section id="contact" className="py-10 min-[400px]:py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-3 min-[400px]:px-4 sm:px-6 lg:max-w-[min(100%,80rem)] lg:px-8 wide:max-w-[90rem]">
        <div className="mb-8 text-center min-[400px]:mb-10">
          <h2 className="font-heading text-2xl font-bold text-text-primary min-[400px]:text-3xl sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-1 text-sm text-text-muted min-[400px]:mt-2 min-[400px]:text-base max-md:mx-auto max-md:max-w-md">
            Questions about bulk orders, partnerships, or support? We reply within one
            business day.
          </p>
        </div>

        <div className="grid gap-8 min-[480px]:gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -20 }}
            animate={leftVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="space-y-5 min-[400px]:space-y-6"
          >
            <ul className="space-y-3 min-[400px]:space-y-4">
              {contactItems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-2.5 text-sm text-text-primary min-[400px]:gap-3 min-[400px]:text-base">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary min-[400px]:h-10 min-[400px]:w-10">
                    {createElement(Icon, { className: 'h-4 w-4 min-[400px]:h-5 min-[400px]:w-5', 'aria-hidden': true })}
                  </span>
                  <span className="min-w-0 pt-1.5 leading-snug">{text}</span>
                </li>
              ))}
            </ul>

            <div
              className="hidden min-h-[180px] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-muted/40 text-text-muted min-[480px]:flex md:min-h-[200px]"
              role="img"
              aria-label="Map location placeholder"
            >
              <MapPin className="h-8 w-8 text-primary min-[400px]:h-10 min-[400px]:w-10" />
              <span className="px-4 text-center text-xs font-medium min-[400px]:text-sm">
                Google Maps embed placeholder
              </span>
            </div>
          </motion.div>

          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 20 }}
            animate={rightVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <form
              className="space-y-3 rounded-2xl border border-border bg-surface p-4 shadow-lg min-[400px]:space-y-4 min-[400px]:p-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-1.5 min-[400px]:space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="space-y-1.5 min-[400px]:space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@email.com" required />
              </div>
              <div className="space-y-1.5 min-[400px]:space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+91 ..." />
              </div>
              <div className="space-y-1.5 min-[400px]:space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="How can we help?" required />
              </div>
              <Button type="submit" className="w-full bg-primary min-[400px]:w-auto">
                Send message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
