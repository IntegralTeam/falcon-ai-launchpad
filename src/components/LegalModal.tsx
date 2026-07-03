import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type LegalModalType = "privacy" | "terms" | "refund" | null;

const PRIVACY_POLICY_SECTIONS = [
  {
    title: "Who we are",
    body: "Falcon Expert Institute FZ-LLC (“Falcon Innovation Academy”, “we”, “us”) operates online business education programs from Ras Al Khaimah Economic Zone (RAKEZ), United Arab Emirates. Educational Licence No. 52001001.",
  },
  {
    title: "Information we collect",
    body: "When you enroll, contact us, or use our website, we may collect your name, email address, company details, billing information, course progress, and communications you send to us. We also collect limited technical data such as IP address, browser type, and usage analytics to keep the platform secure and improve our services.",
  },
  {
    title: "How we use your information",
    body: "We use personal data to provide access to courses, process enrollments, respond to inquiries, issue certificates or records of completion, improve program content, and comply with applicable law. We do not sell your personal information to third parties.",
  },
  {
    title: "Sharing and processors",
    body: "We may share data with trusted service providers that help us deliver our programs—such as learning platforms, payment processors, email tools, and hosting providers—only as needed to operate Falcon Innovation Academy. These providers are required to protect your data and use it solely for the services they provide to us.",
  },
  {
    title: "Data retention",
    body: "We retain personal information for as long as needed to deliver courses, maintain business records, resolve disputes, and meet legal obligations. When data is no longer required, we delete or anonymize it where reasonably possible.",
  },
  {
    title: "Your rights",
    body: "Depending on applicable law, you may request access to, correction of, or deletion of your personal data, or object to certain processing. To exercise these rights, contact us at info@falcon.academy. We will respond within a reasonable timeframe.",
  },
  {
    title: "Security",
    body: "We apply administrative, technical, and organizational measures designed to protect personal data against unauthorized access, loss, or misuse. No online system is completely secure, so please use strong passwords and protect your account credentials.",
  },
  {
    title: "Updates",
    body: "We may update this Privacy Policy from time to time. The latest version will always be available on falcon.academy. Material changes will be reflected by updating the effective date below.",
  },
] as const;

const TERMS_OF_USE_SECTIONS = [
  {
    title: "Agreement",
    body: "By accessing falcon.academy or enrolling in our programs, you agree to these Terms of Use. If you do not agree, please do not use the site or purchase courses.",
  },
  {
    title: "Educational services",
    body: "Falcon Innovation Academy provides online business education in artificial intelligence and related topics. Course materials are for learning and professional development. They do not constitute legal, financial, tax, or regulated professional advice.",
  },
  {
    title: "Accounts and enrollment",
    body: "You are responsible for the accuracy of information you provide and for maintaining the confidentiality of your account credentials. Access to paid content is granted for the period stated at purchase unless otherwise specified.",
  },
  {
    title: "Acceptable use",
    body: "You may not misuse the platform, attempt unauthorized access, copy or redistribute course materials except as permitted, use content to build competing products, or upload unlawful, harmful, or infringing material.",
  },
  {
    title: "Intellectual property",
    body: "All course content, branding, graphics, and materials on this site are owned by Falcon Expert Institute FZ-LLC or its licensors and are protected by intellectual property laws. You receive a limited, non-transferable license to use materials for personal or internal business learning only.",
  },
  {
    title: "Payments and refunds",
    body: "Fees, billing terms, and any refund eligibility are disclosed at the point of purchase on our learning platform. Unless required by applicable consumer law, fees for digital educational content may be non-refundable once access is granted.",
  },
  {
    title: "Disclaimer",
    body: "Programs are provided on an “as is” basis. We do not guarantee specific business outcomes, job placement, revenue increases, or error-free operation of third-party AI tools discussed in our courses.",
  },
  {
    title: "Limitation of liability",
    body: "To the fullest extent permitted by law, Falcon Expert Institute FZ-LLC is not liable for indirect, incidental, or consequential damages arising from your use of the site or courses. Our total liability for any claim shall not exceed the amount you paid for the relevant course in the twelve months preceding the claim.",
  },
  {
    title: "Governing law",
    body: "These Terms are governed by the laws of the United Arab Emirates. Disputes shall be subject to the exclusive jurisdiction of the courts of the UAE, unless mandatory consumer protections in your country provide otherwise.",
  },
  {
    title: "Contact",
    body: "Questions about these Terms may be sent to info@falcon.academy.",
  },
] as const;

const REFUND_POLICY_SECTIONS = [
  {
    title: "Scope",
    body: "This Refund & Cancellation Policy applies to purchases of online courses, bundles, subscriptions, and related digital educational products sold by Falcon Expert Institute FZ-LLC (“Falcon Innovation Academy”, “we”, “us”) through our LearnWorlds learning platform at learn.falcon.academy. By completing a purchase, you acknowledge that you have read and agree to this Policy.",
  },
  {
    title: "Payment processing",
    body: "Payments are processed through LearnWorlds using supported payment gateways, including Stripe (card payments, Apple Pay, Google Pay, and selected local methods) and, where offered, PayPal. We do not store full card details on our servers. All transactions are subject to the applicable terms of LearnWorlds and the relevant payment processor.",
  },
  {
    title: "Digital products and immediate access",
    body: "Our products are digital educational services. Upon successful payment, access to course materials is typically granted immediately or shortly thereafter. Because content is delivered electronically, refund eligibility may be limited once you have accessed, downloaded, or substantially used course materials.",
  },
  {
    title: "Refunds we may grant",
    body: "We may approve a full or partial refund, at our reasonable discretion, where: (a) you request a refund within fourteen (14) days of purchase and have not completed more than twenty percent (20%) of the purchased course or program; (b) you were charged in error or charged twice for the same product; (c) technical issues on our platform prevented reasonable access and we cannot resolve them within a reasonable time; or (d) applicable consumer protection law in your jurisdiction requires a refund.",
  },
  {
    title: "When refunds are not available",
    body: "Except where required by law, we do not grant refunds if: (a) the refund request is made after the eligibility period above; (b) you have substantially accessed, completed, or downloaded course content; (c) you purchased during a clearly marked non-refundable promotion; (d) the request relates to change of mind after meaningful use of the product; or (e) the payment method or processor no longer supports automated refunds (for example, certain bank-transfer methods).",
  },
  {
    title: "How refunds are processed (LearnWorlds & Stripe)",
    body: "Approved refunds are issued through LearnWorlds to the original payment method used at checkout. For Stripe card payments, refunds are normally processed to the same card; Stripe does not return its original processing fees to merchants, and that limitation may affect the net amount recoverable in partial-refund scenarios. Refunds via supported processors are generally available within one hundred eighty (180) days of the original payment. Processing may take up to seven (7) business days to appear, depending on your bank or card issuer.",
  },
  {
    title: "Credit notes and access after refund",
    body: "When a refund is issued through LearnWorlds, a refund record and, where invoicing is enabled, a credit note may be generated for accounting purposes. We may revoke or restrict course access upon a full refund. Refund and unenrollment are separate actions; where appropriate, we may unenroll you from the refunded product.",
  },
  {
    title: "Subscriptions and instalment plans",
    body: "If you purchase a subscription or instalment plan, you may cancel future renewals through your LearnWorlds account or by contacting us before the next billing date. Cancellation stops future charges but does not automatically refund fees already paid for the current billing period unless required by law or expressly stated at purchase. Trial periods, if offered, must be cancelled before renewal to avoid charge.",
  },
  {
    title: "How to request a refund or cancellation",
    body: "To request a refund or cancel a subscription, email info@falcon.academy from the email address used at purchase. Include your full name, order date, product name, and reason for the request. We may ask for additional information to verify the purchase and review usage records maintained by LearnWorlds.",
  },
  {
    title: "Response times",
    body: "We aim to acknowledge refund requests within three (3) business days and to complete approved refunds within fourteen (14) calendar days of confirming eligibility, in line with common e-commerce practice and our payment platform capabilities. If additional review is required, we will notify you of the delay.",
  },
  {
    title: "Chargebacks and disputes",
    body: "If you initiate a chargeback or payment dispute with your bank or card issuer before contacting us, we may suspend account access while the dispute is investigated. We encourage you to contact us first so we can resolve legitimate concerns promptly. For digital products, payment processors such as Stripe may require evidence of account access and policy acceptance when reviewing disputes.",
  },
  {
    title: "Changes and contact",
    body: "We may update this Policy from time to time. The version published on falcon.academy at the time of your request applies unless mandatory law provides otherwise. Questions: info@falcon.academy.",
  },
] as const;

export function LegalModal({
  type,
  open,
  onOpenChange,
}: {
  type: LegalModalType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const titles = {
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    refund: "Refund & Cancellation Policy",
  } as const;

  const sections =
    type === "privacy"
      ? PRIVACY_POLICY_SECTIONS
      : type === "terms"
        ? TERMS_OF_USE_SECTIONS
        : type === "refund"
          ? REFUND_POLICY_SECTIONS
          : [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-sm border-black/10 bg-offwhite text-ink">
        <DialogHeader>
          <DialogTitle className="text-xl font-extrabold tracking-tight">
            {type ? titles[type] : ""}
          </DialogTitle>
          <DialogDescription className="text-black/50">
            Falcon Expert Institute FZ-LLC · Effective {new Date().getFullYear()}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-5 pr-1 text-sm">
          {sections.map((section) => (
            <section key={section.title}>
              <h3 className="font-bold text-ink">{section.title}</h3>
              <p className="mt-1.5 leading-relaxed text-black/65">{section.body}</p>
            </section>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export type { LegalModalType };
