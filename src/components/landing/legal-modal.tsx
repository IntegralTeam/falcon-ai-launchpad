import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  PRIVACY_POLICY_SECTIONS,
  REFUND_POLICY_SECTIONS,
  TERMS_OF_USE_SECTIONS,
} from "./landing-data";

export function LegalModal({
  type,
  open,
  onOpenChange,
}: {
  type: "privacy" | "terms" | "refund" | null;
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
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-none">
        <DialogHeader>
          <DialogTitle>{type ? titles[type] : ""}</DialogTitle>
          <DialogDescription>
            Falcon Expert Institute FZ-LLC · Effective {new Date().getFullYear()}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-5 pr-1 text-sm text-foreground">
          {sections.map((section) => (
            <section key={section.title}>
              <h3 className="font-semibold">{section.title}</h3>
              <p className="mt-1.5 leading-relaxed text-muted-foreground">{section.body}</p>
            </section>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function useLegalModal() {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | "refund" | null>(null);
  return { legalModal, setLegalModal };
}
