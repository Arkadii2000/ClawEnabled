/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link } from "react-router-dom";

const Section = ({ number, title, children }: { number: string; title: string; children: React.ReactNode }) => (
  <section className="mb-12">
    <div className="flex gap-8 mb-4">
      <span className="text-xs font-bold font-mono text-brand-muted pt-1 shrink-0">{number}</span>
      <h2 className="text-base font-bold text-brand-text uppercase tracking-tight">{title}</h2>
    </div>
    <div className="pl-12 space-y-4 text-sm text-brand-muted leading-relaxed">
      {children}
    </div>
  </section>
);

const Bullet = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 list-none">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className="text-brand-border shrink-0">—</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default function Privacy() {
  return (
    <div className="min-h-screen font-sans bg-brand-bg text-brand-text">
      <main className="max-w-3xl mx-auto px-8 pt-24 pb-32">

        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-text transition-colors mb-16"
        >
          ← Back
        </Link>

        {/* Header */}
        <header className="mb-20 border-b border-brand-border pb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="size-4 rounded-full border border-brand-text flex items-center justify-center">
              <div className="size-1.5 bg-brand-text rounded-full" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-text">ClawEnabled</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-brand-text mb-4 font-display">Privacy Policy</h1>
          <p className="text-sm text-brand-muted">Last Updated: February 26, 2026</p>
        </header>

        {/* 1. Introduction */}
        <Section number="01" title="Introduction">
          <p>
            ClawEnabled ("we," "us," or "our") respects your privacy and is committed to handling your personal information responsibly. This Privacy Policy explains what information we collect, how we use and protect it, and your rights in relation to it, when you visit our website (clawenabled.com) or use our OpenClaw implementation and support services (collectively, the "Services").
          </p>
          <p>
            By using our website or Services, you agree to the practices described in this Policy. If you do not agree, please do not use our Services.
          </p>
        </Section>

        {/* 2. Information We Collect */}
        <Section number="02" title="Information We Collect">
          <p>We collect only the information necessary to provide our Services. This includes:</p>
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-brand-text mb-2">2.1 Booking and Contact Information</p>
              <p>When you schedule an appointment, we collect your name, email address, phone number, and scheduling preferences through our booking platform (Cal.com). This information is used solely to coordinate and confirm your appointment.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-text mb-2">2.2 Payment Information</p>
              <p>Payment details are collected and processed securely by Stripe, our third-party payment processor. ClawEnabled does not store, access, or retain your full credit card number or banking information on our servers. We receive only a confirmation of payment and limited transaction metadata (such as the last four digits of a card and billing address) as provided by Stripe for record-keeping purposes.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-text mb-2">2.3 Setup and Technical Information</p>
              <p>To perform the implementation, we may temporarily access network credentials, account details, API keys, and device information. This access is strictly limited to the duration of the appointment. We do not retain, copy, or store this information after setup is complete. See Section 5 (Data Handling During Setup) for full details.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-text mb-2">2.4 Support Communications</p>
              <p>Messages, emails, or other communications you send to us during the hypercare period or under a Managed Care plan are retained to provide support and resolve issues. These communications are treated as confidential and are not shared externally except as required by law.</p>
            </div>
          </div>
        </Section>

        {/* 3. How We Use Your Information */}
        <Section number="03" title="How We Use Your Information">
          <p>We use the information we collect for the following purposes:</p>
          <Bullet items={[
            "To schedule, coordinate, and perform your implementation appointment.",
            "To process and confirm payments for Services.",
            "To deliver post-setup support during the hypercare period and any active Managed Care engagement.",
            "To communicate with you about your Services, including updates, reminders, and follow-ups.",
            "To comply with applicable legal, tax, and accounting obligations.",
            "To improve the quality and reliability of our website and Services based on anonymized analytics.",
          ]} />
          <p>We do not sell, rent, trade, or share your personal information with third parties for marketing or advertising purposes. We do not use your information to build advertising profiles or engage in behavioral targeting.</p>
        </Section>

        {/* 4. Third-Party Services */}
        <Section number="04" title="Third-Party Services">
          <p>We use a limited set of trusted third-party services to operate our business. Each is subject to its own privacy policy:</p>
          <Bullet items={[
            "Stripe — Payment processing. Your payment data is handled directly by Stripe and subject to Stripe's Privacy Policy (stripe.com/privacy).",
            "Cal.com — Appointment scheduling. Booking data is subject to Cal.com's Privacy Policy (cal.com/privacy).",
          ]} />
          <p>We select third-party providers carefully and limit the data shared with them to only what is necessary for the specific function they perform. We are not responsible for the privacy practices of these third parties and encourage you to review their policies.</p>
        </Section>

        {/* 5. Data Handling During Setup */}
        <Section number="05" title="Data Handling During Setup">
          <p>Our implementation work may require temporary access to your systems, network, and accounts. We take this responsibility seriously and commit to the following:</p>
          <Bullet items={[
            "We will only access information and systems strictly necessary to complete the setup.",
            "We will not copy, download, store, or retain any personal files, passwords, credentials, or data after the appointment is complete.",
            "We will not install any software beyond what is required for OpenClaw and its configured integrations to function.",
            "We will not access any data, accounts, or services not directly required for the scope of work agreed upon.",
          ]} />
          <p>We strongly recommend that you change all passwords, API keys, and credentials shared with us immediately following the completion of your setup. ClawEnabled is not responsible for any unauthorized access resulting from credentials that were not promptly rotated post-setup.</p>
          <p>OpenClaw is designed to operate locally on your own hardware. Your data remains on your infrastructure and is not transmitted to ClawEnabled after setup is complete.</p>
        </Section>

        {/* 6. Data Retention */}
        <Section number="06" title="Data Retention">
          <p>We retain your information only for as long as necessary to fulfill the purposes for which it was collected:</p>
          <Bullet items={[
            "Booking and contact information is retained for the duration of our service relationship and for a reasonable period thereafter for support and record-keeping.",
            "Payment records are retained as required by applicable tax and accounting laws (typically seven years in the United States).",
            "Support communications are retained for the duration of the active support engagement and up to 12 months thereafter, unless you request earlier deletion.",
            "Anonymous analytics data is retained in aggregated form and is not linked to individuals.",
          ]} />
          <p>You may request deletion of your personal data at any time by contacting us using the information in Section 13. We will fulfill deletion requests promptly, except where retention is required by law or legitimate business necessity (such as fraud prevention or legal proceedings).</p>
        </Section>

        {/* 7. Data Security */}
        <Section number="07" title="Data Security">
          <p>We take reasonable and appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include limiting access to personal data to personnel who need it to perform their role and using secure, reputable third-party platforms for payment and scheduling.</p>
          <p>However, no method of data transmission or storage is completely secure. We cannot guarantee the absolute security of information transmitted to or from our website or Services. You use our Services at your own risk, and you are encouraged to take appropriate precautions on your end, such as using strong, unique credentials and maintaining updated security software on your systems.</p>
        </Section>

        {/* 8. Your Privacy Rights */}
        <Section number="08" title="Your Privacy Rights">
          <p>Depending on your jurisdiction, you may have the following rights with respect to your personal data:</p>
          <Bullet items={[
            "Right of Access — Request a copy of the personal information we hold about you.",
            "Right to Rectification — Request correction of inaccurate or incomplete information.",
            "Right to Erasure — Request deletion of your personal data, subject to legal retention requirements.",
            "Right to Restriction — Request that we limit how we process your data in certain circumstances.",
            "Right to Object — Object to the processing of your data for certain purposes.",
            "Right to Data Portability — Request your data in a portable, machine-readable format (where applicable).",
          ]} />
          <p>To exercise any of these rights, please contact us using the information in Section 13. We will respond to verified requests within 30 days.</p>
        </Section>

        {/* 9. Cookies and Tracking */}
        <Section number="09" title="Cookies and Tracking">
          <p>Our website uses only minimal, functional cookies necessary for basic site operation. We do not use advertising cookies, cross-site tracking cookies, or third-party marketing pixels.</p>
        </Section>

        {/* 10. Children's Privacy */}
        <Section number="10" title="Children's Privacy">
          <p>Our Services are intended for business and professional use and are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have inadvertently collected such information, we will promptly delete it. If you believe we may have collected information from a minor, please contact us immediately.</p>
        </Section>

        {/* 11. International Data Transfers */}
        <Section number="11" title="International Data Transfers">
          <p>ClawEnabled is based in the United States. If you access our Services from outside the United States, please be aware that your information may be transferred to and processed in the United States, where data protection laws may differ from those in your country.</p>
          <p>By using our Services, you consent to the transfer of your information to the United States as described in this Policy. If you have questions about cross-border data transfers, please contact us.</p>
        </Section>

        {/* 12. Changes to This Policy */}
        <Section number="12" title="Changes to This Policy">
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices, Services, or applicable law. When we make changes, we will update the "Last Updated" date at the top of this page. For material changes, we will provide advance notice via email or a prominent notice on our website.</p>
          <p>Your continued use of our Services after the effective date of any changes constitutes your acceptance of the updated Policy. If you do not agree to the updated Policy, please discontinue use of our Services and contact us to request deletion of your data.</p>
        </Section>

        {/* 13. Contact Us */}
        <Section number="13" title="Contact Us">
          <p>If you have questions, concerns, or requests relating to this Privacy Policy or your personal data, please reach out to us:</p>
          <Bullet items={[
            "Website: clawenabled.com",
          ]} />
          <p>Email: <a href="mailto:arkadii.ved@gmail.com" className="text-brand-text hover:underline">arkadii.ved@gmail.com</a></p>
          <p>We take privacy inquiries seriously and will respond to all requests within a reasonable timeframe.</p>
        </Section>

        {/* Footer */}
        <footer className="pt-12 border-t border-brand-border">
          <p className="text-[10px] text-brand-muted text-center uppercase tracking-[0.2em]">
            © 2026 ClawEnabled. All rights reserved.
          </p>
        </footer>

      </main>
    </div>
  );
}
