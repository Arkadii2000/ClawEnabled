/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  CheckCircle2,
  XCircle,
} from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  source: string;
  key?: React.Key;
}

const Testimonial = ({ quote, author, source }: TestimonialProps) => (
  <div className="border-l border-brand-border pl-8 py-2">
    <p className="text-brand-text text-lg leading-relaxed mb-4 font-display">
      “{quote}”
    </p>
    <footer className="text-sm">
      <span className="text-brand-text font-semibold">{source}</span>
      <span className="text-brand-muted mx-2">—</span>
      <span className="text-brand-muted">{author}</span>
    </footer>
  </div>
);

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  href: string;
  recommended?: boolean;
}

const PricingCard = ({ title, price, description, href, recommended = false }: PricingCardProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex w-full flex-col sm:flex-row items-start sm:items-center justify-between rounded-xl p-6 transition-all duration-200 text-left border ${
      recommended
        ? "bg-white border-brand-accent ring-1 ring-brand-accent/20"
        : "bg-white border-brand-border hover:border-brand-muted"
    }`}
  >
    <div className="flex-1 pr-4">
      <div className="flex items-center gap-3 mb-1">
        <h3 className="text-base font-bold text-brand-text uppercase tracking-tight">{title}</h3>
        {recommended && (
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/5 border border-brand-accent/20 rounded px-2 py-0.5">
            Recommended
          </span>
        )}
      </div>
      <p className="text-sm text-brand-muted leading-relaxed">{description}</p>
    </div>
    <div className="mt-4 sm:mt-0 flex flex-col items-start sm:items-end">
      <span className="text-xl font-bold text-brand-text tracking-tight">{price}</span>
      <span className="text-[10px] text-brand-muted font-bold uppercase tracking-widest group-hover:text-brand-accent transition-colors mt-1">Select plan →</span>
    </div>
  </a>
);


export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const testimonials = [
    {
      source: "MIT Technology Review",
      author: "Melissa Heikkilä (Senior AI Reporter)",
      quote: "Agentic AI systems that can take actions on a user’s behalf represent a significant shift from chatbots to software that actually does work for people."
    },
    {
      source: "The Verge",
      author: "James Vincent (AI Reporter)",
      quote: "The promise of AI agents is simple: software that doesn’t just answer questions but carries out tasks autonomously across apps and services."
    },
    {
      source: "Financial Times",
      author: "Madhumita Murgia (AI Editor)",
      quote: "The next phase of artificial intelligence is software that can execute tasks for users — not just generate text — effectively acting as a digital worker."
    },
    {
      source: "The Wall Street Journal",
      author: "Christopher Mims (Technology Columnist)",
      quote: "AI agents are emerging that can use computers much like a person would, navigating websites and applications to complete real-world tasks."
    },
    {
      source: "Bloomberg",
      author: "Parmy Olson (Technology Columnist)",
      quote: "Companies are racing toward AI assistants that can handle workflows and business processes, not just conversation."
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-brand-bg text-brand-text">
      <main className="max-w-3xl mx-auto px-8 pt-24 pb-32">
        {/* Header */}
        <header className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="size-16 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="size-full text-red-600 fill-current" xmlns="http://www.w3.org/2000/svg">
                {/* Body/Tail */}
                <path d="M50 30 C55 30 60 35 60 45 L60 70 C60 75 55 80 50 80 C45 80 40 75 40 70 L40 45 C40 35 45 30 50 30" />
                <path d="M45 75 L35 85 L40 88 L50 82 L60 88 L65 85 L55 75" />
                {/* Head/Antennae */}
                <path d="M50 30 L45 20 M50 30 L55 20" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M50 30 C45 25 35 25 30 15 M50 30 C55 25 65 25 70 15" stroke="currentColor" strokeWidth="1.5" fill="none" />
                {/* Claws */}
                <path d="M40 45 C30 45 20 40 15 30 C10 20 20 15 25 20 C28 23 30 30 35 35 L40 45" />
                <path d="M60 45 C70 45 80 40 85 30 C90 20 80 15 75 20 C72 23 70 30 65 35 L60 45" />
                {/* Legs */}
                <path d="M40 50 L30 55 M40 55 L30 60 M40 60 L30 65" stroke="currentColor" strokeWidth="2" />
                <path d="M60 50 L70 55 M60 55 L70 60 M60 60 L70 65" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight text-brand-text">ClawEnabled</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand-text mb-8 max-w-2xl leading-[1.1] font-display">
            We implement OpenClaw AI Assistant inside your company — and make it do real work.
          </h1>

          <div className="space-y-6 max-w-2xl mb-12">
            <p className="text-lg text-brand-muted leading-relaxed">
              OpenClaw is powerful, but almost nobody has time to configure workflows, permissions, monitoring, and safeguards.
            </p>
            <p className="text-lg text-brand-text font-medium leading-relaxed">
              We deploy, train, and operationalize a private OpenClaw agent so it can reliably handle daily tasks across your email and tools.
            </p>
            <p className="text-sm text-brand-muted italic border-l-2 border-brand-border pl-4">
              This is not a chatbot and not a virtual assistant service. It is your own locally-controlled automation operator.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a 
              href="https://cal.com/arkadii-vedernikov-inmnif/15min?overlayCalendar=true&date=2026-02-27"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-text text-white font-bold px-8 py-4 rounded hover:bg-brand-text/90 transition-all active:scale-[0.98] text-sm uppercase tracking-widest inline-block"
            >
              Schedule a free 15-minute call
            </a>
          </div>
        </header>

        {/* Integrated Operational Section */}
        <section className="mb-32">
          <h2 className="section-header">Removing manual overhead from recurring business operations.</h2>
          
          <div className="space-y-8 max-w-2xl mb-16">
            <p className="text-lg text-brand-muted leading-relaxed">
              ChatGPT and Claude are designed to generate text and answer questions. OpenClaw is designed to operate software.
            </p>
            <p className="text-lg text-brand-text font-medium leading-relaxed">
              It can click, type, read inboxes, update spreadsheets, send emails, and move data between systems—executing the actual steps of a workflow instead of just talking about them.
            </p>
          </div>

          {/* Comparison Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="p-8 rounded-xl border border-brand-border bg-white/30">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-6">ChatGPT / Claude</h3>
              <ul className="space-y-4">
                {[
                  "Answers questions",
                  "Drafts content",
                  "Requires manual copying",
                  "Doesn’t act inside tools"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-brand-muted">
                    <XCircle className="size-4 text-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-xl border border-brand-accent/30 bg-brand-accent/[0.02]">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6">OpenClaw (Configured by Us)</h3>
              <ul className="space-y-4">
                {[
                  "Reads your inbox",
                  "Updates your CRM",
                  "Schedules meetings",
                  "Prepares reports",
                  "Executes repeatable workflows"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-brand-text font-medium">
                    <CheckCircle2 className="size-4 text-brand-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-sm text-brand-muted italic text-center max-w-xl mx-auto">
            This is not about replacing people. It’s about removing small, recurring coordination tasks that consume attention every day.
          </p>
        </section>

        {/* Implementation Process */}
        <section className="mb-32">
          <h2 className="section-header">Implementation Process</h2>
          <div className="space-y-12">
            {[
              { title: "Kickoff Call", desc: "We identify repeatable tasks currently done manually." },
              { title: "Environment Setup", desc: "OpenClaw is installed on a dedicated machine (Mac Mini or secure server) with restricted permissions." },
              { title: "Workflow Configuration", desc: "We define exactly what the agent is allowed to do and where." },
              { title: "Supervised Training Period", desc: "You observe actions before automation is fully enabled." },
              { title: "Ongoing Operation", desc: "The system runs continuously and we adjust workflows as needed." },
            ].map((item, i) => (
              <div key={i} className="flex gap-8">
                <span className="text-xs font-bold font-mono text-brand-muted pt-1">0{i+1}</span>
                <div>
                  <h4 className="text-base font-bold text-brand-text uppercase tracking-tight mb-2">{item.title}</h4>
                  <p className="text-sm text-brand-muted leading-relaxed max-w-xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who This Is For - Animated Blocks */}
        <section className="mb-32">
          <h2 className="section-header">Good Fit</h2>
          <div className="flex flex-wrap gap-3">
            {['Owner-operators', 'Small teams', 'Agencies', 'Service businesses', 'Heavy email coordination', 'Operations Managers', 'Finance & Admin Teams'].map((item, i) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="px-4 py-2 rounded-full bg-white border border-brand-border text-xs font-bold uppercase tracking-widest text-brand-text shadow-sm"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-32">
          <h3 className="section-header">The Shift to Agentic AI</h3>
          <div className="space-y-20">
            {testimonials.map((t, i) => (
              <Testimonial 
                key={i} 
                quote={t.quote} 
                author={t.author} 
                source={t.source} 
              />
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mb-32">
          <h2 className="section-header">Implementation Pricing</h2>
          <div className="space-y-4">
            <PricingCard
              title="Hosted (VPS) Setup"
              price="$2,000"
              description="Fully managed cloud deployment. We host, harden, and provide 14-day hypercare."
              href="https://buy.stripe.com/fZu00j8IQ3jy6lvbbf5gc00"
            />
            <PricingCard
              title="Mac Mini In-Person"
              price="$4,000"
              description="Minneapolis area only. On-site setup, hardware provisioning, and local integration."
              href="https://buy.stripe.com/dRm7sLe3ag6k39j9375gc01"
            />
          </div>

          <div className="mt-6 flex items-center gap-3 px-6 py-4 rounded-xl bg-emerald-50 border border-emerald-100">
            <CheckCircle2 className="size-4 text-emerald-500" />
            <p className="text-sm font-bold text-emerald-700 uppercase tracking-widest">100% satisfaction guarantee — we will refund you with no questions asked</p>
          </div>

          <div className="mt-12 bg-white/50 border border-brand-border rounded-xl p-8 flex items-center gap-8 backdrop-blur-sm">
            <div className="size-16 rounded-full bg-zinc-100 overflow-hidden shrink-0 border border-brand-border">
              <img src="https://picsum.photos/seed/arkadii/200/200" alt="Arkadii" className="size-full object-cover grayscale" />
            </div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-brand-text uppercase tracking-tight">Talk to Arkadii</h4>
              <p className="text-sm text-brand-muted mt-1">Experience deploying 50+ agents.</p>
            </div>
            <a href="mailto:arkadii.ved@gmail.com" className="text-sm font-bold text-brand-text hover:text-brand-accent transition-colors uppercase tracking-widest">
              email me →
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-32 py-20 bg-brand-text text-white rounded-xl text-center px-8">
          <h2 className="text-2xl font-bold mb-6 font-display italic">See if OpenClaw can actually reduce your workload.</h2>
          <a 
            href="https://cal.com/arkadii-vedernikov-inmnif/15min?overlayCalendar=true&date=2026-02-27"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-text font-bold px-12 py-5 rounded hover:bg-zinc-100 transition-all active:scale-[0.98] text-sm uppercase tracking-widest inline-block"
          >
            Book a call
          </a>
        </section>

        {/* FAQ */}
        <section className="mb-32">
          <h2 className="section-header">Operational FAQ</h2>
          <div className="border-t border-brand-border">
            {[
              {
                q: "What exactly is OpenClaw?",
                a: "OpenClaw is an open-source automation agent that can operate inside real software tools (email, calendars, spreadsheets, CRMs) the same way a person would. Instead of connecting through limited APIs, it interacts with the actual interfaces and workflows you already use. We do not build the software — we configure and integrate it so it performs defined tasks reliably in your business."
              },
              {
                q: "Why can’t I just install it myself?",
                a: "You technically can. Most people who try run into problems not with installation, but with operation: defining what the agent is allowed to do, preventing unintended actions, setting permission boundaries, monitoring behavior, and making workflows repeatable. Our work is not the install — it is making OpenClaw predictable and safe to run continuously."
              },
              {
                q: "What kinds of tasks does it handle well?",
                a: "OpenClaw performs best with structured, repeatable operational work. Common examples: responding to standard email requests, preparing recurring reports, organizing meeting scheduling, following up on outstanding items, summarizing communications, and updating records in internal systems. It is not intended to replace complex judgment or creative work."
              },
              {
                q: "Will it send emails without my approval?",
                a: "You choose the level of autonomy. We can configure: review-before-send, draft-only mode, restricted recipients, internal-only communication, or full automation for specific workflows. Most clients start with review mode and expand once comfortable."
              },
              {
                q: "Can it access sensitive information?",
                a: "Only what you explicitly allow. We set specific permission scopes and separate accounts where appropriate. The agent does not automatically gain access to your entire computer or all company data. You can revoke access at any time."
              },
              {
                q: "Where does it run?",
                a: "Typically on a dedicated Mac Mini or a secure private server. The system is isolated from your personal computer and runs continuously so workflows don’t depend on someone being online. You own the environment."
              },
              {
                q: "What happens if it makes a mistake?",
                a: "We configure logging and supervision first. Before any full automation: actions are recorded, actions can require approval, and workflows are tested in limited scope. You can pause or shut down the agent immediately. The goal is gradual trust, not instant autonomy."
              },
              {
                q: "How long does implementation take?",
                a: "Usually 1–3 weeks depending on workflow complexity. Week 1: environment setup. Week 2: workflow configuration. Week 3: supervised operation and adjustments. After that, we refine and add additional workflows."
              },
              {
                q: "Do I need technical knowledge to use it?",
                a: "No. You only need to describe how work currently gets done. We translate your processes into automated workflows."
              },
              {
                q: "What if I stop using your service?",
                a: "Nothing is locked in. Because OpenClaw is open-source and runs in your own environment: you keep the setup, you keep the workflows, and you retain control. We are not a proprietary platform."
              },
              {
                q: "When is this not a good fit?",
                a: "It may not be useful if: your business has no repeatable processes, every task is custom or creative, you are looking for a website chatbot, or you want fully unsupervised decision-making immediately."
              }
            ].map((item, i) => (
              <div key={i} className="border-b border-brand-border">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between py-6 text-left hover:text-brand-accent transition-colors group"
                >
                  <span className="text-sm font-semibold text-brand-text pr-8">{item.q}</span>
                  <ChevronDown className={`size-4 text-brand-muted transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-brand-muted text-sm leading-relaxed max-w-xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-brand-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="size-4 rounded-full border border-brand-text flex items-center justify-center">
                  <div className="size-1.5 bg-brand-text rounded-full" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-text">ClawEnabled</span>
              </div>
              <p className="text-[10px] text-brand-muted uppercase tracking-[0.2em]">Questions? <a href="mailto:arkadii.ved@gmail.com" className="text-brand-text hover:underline">Send Us an Email</a></p>
              <div className="flex gap-6">
                <Link to="/terms" className="text-[10px] text-brand-muted hover:text-brand-text transition-colors uppercase tracking-widest">Terms of Service</Link>
                <Link to="/privacy" className="text-[10px] text-brand-muted hover:text-brand-text transition-colors uppercase tracking-widest">Privacy Policy</Link>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded border border-emerald-200 bg-emerald-50">
              <div className="size-1.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">Accepting new clients</span>
            </div>
          </div>
          <p className="mt-16 text-[10px] text-brand-muted text-center uppercase tracking-[0.2em]">
            © 2026 ClawEnabled. Operational Excellence through Automation.
          </p>
        </footer>
      </main>
    </div>
  );
}

