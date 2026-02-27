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

export default function Terms() {
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
          <h1 className="text-4xl font-bold tracking-tight text-brand-text mb-4 font-display">Terms of Service</h1>
          <p className="text-sm text-brand-muted">Last Updated: February 26, 2026</p>
        </header>

        {/* 1. Overview */}
        <Section number="01" title="Overview">
          <p>
            These Terms of Service ("Terms") govern your use of all services provided by ClawEnabled ("we," "us," or "our"), including OpenClaw AI agent implementation, configuration, integration, and post-setup support (collectively, the "Services"). By purchasing or using our Services, you ("Customer" or "you") agree to be bound by these Terms. Please read them carefully before proceeding.
          </p>
        </Section>

        {/* 2. Services Provided */}
        <Section number="02" title="Services Provided">
          <p>ClawEnabled provides OpenClaw AI agent implementation and related services, including:</p>
          <ul className="space-y-2 list-none">
            {[
              "In-person installation and configuration of OpenClaw on Customer-provided or ClawEnabled-procured hardware (currently available in the Minneapolis Area only).",
              "Remote implementation services, available worldwide.",
              "Security hardening, third-party integration setup, and workflow configuration tailored to your business needs.",
              "14 days support period following the completion of implementation, covering issues directly attributable to the work performed.",
              "Optional ongoing Managed Care plans for continued monitoring, updates, and support (billed monthly under separate terms).",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-brand-border shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>We reserve the right to modify the scope, pricing, and availability of our Services at any time with reasonable notice.</p>
        </Section>

        {/* 3. Payment and Refunds */}
        <Section number="03" title="Payment and Refunds">
          <p>Implementation fees are one-time charges. Managed Care fees are recurring monthly charges. All prices are listed on our website and are subject to change with notice.</p>
          <p>Implementation fees are non-refundable once the setup appointment has been completed and work has begun. If you cancel before your scheduled appointment, a full refund will be issued. If ClawEnabled is unable to complete the setup due to circumstances within our control, we will reschedule at no additional cost or issue a full refund at your request.</p>
          <p>Managed Care plans may be cancelled with 30 days' written notice. You will continue to have access to Managed Care services through the end of your current billing cycle.</p>
        </Section>

        {/* 4. Customer Responsibilities */}
        <Section number="04" title="Customer Responsibilities">
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-brand-text mb-2">4.1 Data Backups</p>
              <p>You are solely responsible for backing up all data, files, and configurations on your devices and systems before any setup appointment. ClawEnabled is not responsible for any data loss that occurs during or after the setup process. We strongly recommend verified, tested backups prior to any scheduled work.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-text mb-2">4.2 Access and Cooperation</p>
              <p>You must provide timely physical access to the setup location (for in-person services), necessary credentials, network access, and any hardware required to perform the Services. Delays caused by your failure to provide timely access may result in rescheduling and additional fees.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-text mb-2">4.3 Accuracy of Information</p>
              <p>You are responsible for ensuring that all information you provide — including hardware specifications, network configurations, and third-party account details — is accurate and complete. ClawEnabled is not liable for issues arising from inaccurate or incomplete information you provide.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-text mb-2">4.4 Legal Compliance</p>
              <p>You are responsible for ensuring that your use of OpenClaw and any connected or integrated services complies with all applicable laws, regulations, and third-party terms of service. ClawEnabled does not provide legal advice and makes no representations regarding the legal suitability of OpenClaw for your specific use case.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-text mb-2">4.5 Credential Security</p>
              <p>You are responsible for changing any credentials, API keys, or access tokens shared with ClawEnabled immediately following the completion of your setup. ClawEnabled is not responsible for any unauthorized access resulting from credentials that were not rotated after setup.</p>
            </div>
          </div>
        </Section>

        {/* 5. Third-Party Software Disclaimer */}
        <Section number="05" title="Third-Party Software Disclaimer">
          <p>OpenClaw is open-source software developed and maintained by independent third parties. ClawEnabled is not the developer, owner, or maintainer of OpenClaw and has no control over its ongoing development, security patches, or availability. We do not guarantee the functionality, reliability, security, or continued development of OpenClaw or any third-party integrations used in connection with it.</p>
          <p>Any issues arising from the OpenClaw software itself, its updates, its dependencies, or its third-party integrations are outside the scope of our Services. Use of third-party software is at your own risk and is subject to the applicable third-party licenses and terms. ClawEnabled's implementation services do not constitute an endorsement or warranty of OpenClaw or any related software.</p>
        </Section>

        {/* 6. Hardware */}
        <Section number="06" title="Hardware">
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-brand-text mb-2">6.1 ClawEnabled-Procured Hardware</p>
              <p>If ClawEnabled procures hardware on your behalf (such as a Mac Mini or other device), it is provided as-is with the manufacturer's standard warranty only. ClawEnabled is not responsible for hardware defects, failures, or damage occurring after delivery. Hardware procurement fees are non-refundable once the order has been placed.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-text mb-2">6.2 Customer-Provided Hardware</p>
              <p>If you provide your own hardware, you are responsible for ensuring it meets the minimum system requirements for running OpenClaw. ClawEnabled is not liable for any damage to Customer-provided hardware during or after setup, except in cases of gross negligence by ClawEnabled personnel.</p>
            </div>
          </div>
        </Section>

        {/* 7. Post-Setup Support and Hypercare */}
        <Section number="07" title="Post-Setup Support and Hypercare">
          <p>ClawEnabled's 14-day support period begins on the date the setup appointment is completed and covers issues directly and demonstrably caused by the initial implementation work performed by ClawEnabled.</p>
          <p>The hypercare period does not cover:</p>
          <ul className="space-y-2 list-none">
            {[
              "Software updates, upgrades, or patches to OpenClaw or its dependencies.",
              "New feature requests or scope additions.",
              "Issues caused by changes you or a third party make to the system after setup.",
              "Third-party service outages, API changes, or deprecations.",
              "Hardware failures or network changes at your location.",
              "Issues arising from inaccurate information provided during the setup process.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-brand-border shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>Ongoing monitoring, maintenance, and support beyond the 14-day period require a Managed Care plan. Managed Care terms are provided separately at the time of enrollment.</p>
        </Section>

        {/* 8. Confidentiality and Data Access */}
        <Section number="08" title="Confidentiality and Data Access">
          <p>During the setup process, our team may require temporary access to your network, accounts, or devices to perform the Services. We will not intentionally access, copy, store, or use any personal or business data beyond what is strictly necessary to complete the setup. All personnel are expected to treat Customer information as confidential.</p>
          <p>We cannot, however, guarantee the absolute security of data on your devices or network. You should limit access permissions to only what is necessary for setup, and revoke all access promptly upon completion.</p>
        </Section>

        {/* 9. Limitation of Liability */}
        <Section number="09" title="Limitation of Liability">
          <p className="uppercase text-xs tracking-wide leading-relaxed">
            To the maximum extent permitted by applicable law, ClawEnabled and its owners, employees, and contractors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation: loss of data, loss of revenue or profits, business interruption, unauthorized system access, security incidents, or damages arising from third-party software or hardware failures, regardless of the legal theory under which such damages are claimed.
          </p>
          <p className="uppercase text-xs tracking-wide leading-relaxed">
            In all cases, ClawEnabled's total aggregate liability arising out of or related to these Terms or the Services shall not exceed the total fees paid by you to ClawEnabled for the specific service giving rise to the claim in the 12 months preceding the claim.
          </p>
          <p>Some jurisdictions do not allow the exclusion or limitation of certain damages. If you are in such a jurisdiction, some of the above limitations may not apply to you.</p>
        </Section>

        {/* 10. Disclaimer of Warranties */}
        <Section number="10" title="Disclaimer of Warranties">
          <p className="uppercase text-xs tracking-wide leading-relaxed">
            The Services are provided "as is" and "as available" without warranties of any kind, whether express, implied, or statutory, including without limitation: implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the implementation will be error-free, that OpenClaw will operate without interruption, or that the Services will meet your specific business requirements.
          </p>
        </Section>

        {/* 11. Indemnification */}
        <Section number="11" title="Indemnification">
          <p>You agree to indemnify, defend, and hold harmless ClawEnabled and its owners, employees, and contractors from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to:</p>
          <ul className="space-y-2 list-none">
            {[
              "(a) your use of the Services or the OpenClaw software following setup;",
              "(b) your violation of these Terms;",
              "(c) your violation of any applicable law, regulation, or third-party terms of service; or",
              "(d) any claim by a third party related to your deployment or use of OpenClaw or connected services.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-brand-border shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* 12. Intellectual Property */}
        <Section number="12" title="Intellectual Property">
          <p>ClawEnabled does not claim ownership over any Customer data, configurations, or workflows created during the setup process. All work product delivered to you as part of the Services is provided for your use. OpenClaw is open-source software subject to its own license terms, which you are responsible for reviewing and complying with.</p>
          <p>ClawEnabled retains ownership of any proprietary implementation methodologies, tooling, or processes used in delivering the Services. Nothing in these Terms grants you a license to use ClawEnabled's proprietary materials outside the scope of the Services.</p>
        </Section>

        {/* 13. Dispute Resolution */}
        <Section number="13" title="Dispute Resolution">
          <p>In the event of a dispute, both parties agree to first attempt resolution through good-faith negotiation. Either party may initiate this process by providing written notice describing the nature and basis of the claim.</p>
          <p>If the dispute is not resolved within 30 days of written notice, it shall be submitted to binding arbitration administered in Minneapolis, Minnesota, in accordance with the rules of the American Arbitration Association (AAA). The arbitration shall be conducted in English, and the arbitrator's decision shall be final and binding. Each party shall bear its own legal costs.</p>
          <p>You agree that any disputes will be resolved on an individual basis. You waive any right to bring or participate in a class action, collective arbitration, or representative proceeding related to these Terms or the Services.</p>
        </Section>

        {/* 14. Governing Law */}
        <Section number="14" title="Governing Law">
          <p>These Terms are governed by and construed in accordance with the laws of the State of Minnesota, without regard to its conflict of law provisions. Any disputes not subject to arbitration shall be resolved exclusively in the state or federal courts located in Minneapolis, Minnesota, and you consent to personal jurisdiction in those courts.</p>
        </Section>

        {/* 15. Changes to These Terms */}
        <Section number="15" title="Changes to These Terms">
          <p>We reserve the right to update or modify these Terms at any time. We will post the revised Terms on our website with an updated "Last Updated" date and, for material changes, will provide reasonable advance notice via email or a prominent notice on our website. Your continued use of the Services after the effective date of any changes constitutes your acceptance of the revised Terms.</p>
          <p>If you do not agree to updated Terms, you may cancel your Services by providing written notice before the changes take effect.</p>
        </Section>

        {/* 16. Severability and Entire Agreement */}
        <Section number="16" title="Severability and Entire Agreement">
          <p>If any provision of these Terms is found to be unenforceable or invalid under applicable law, that provision shall be modified to the minimum extent necessary to make it enforceable, and all other provisions shall remain in full force and effect.</p>
          <p>These Terms, together with any executed Service Agreements and our Privacy Policy, constitute the entire agreement between you and ClawEnabled with respect to the Services and supersede all prior agreements, representations, and understandings.</p>
        </Section>

        {/* 17. Contact */}
        <Section number="17" title="Contact">
          <p>If you have any questions or concerns about these Terms, please contact us:</p>
          <ul className="space-y-1 list-none">
            <li className="flex gap-3"><span className="text-brand-border shrink-0">—</span><span>Website: clawenabled.com</span></li>
            <li className="flex gap-3"><span className="text-brand-border shrink-0">—</span><span>Email: <a href="mailto:arkadii.ved@gmail.com" className="text-brand-text hover:underline">arkadii.ved@gmail.com</a></span></li>
          </ul>
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
