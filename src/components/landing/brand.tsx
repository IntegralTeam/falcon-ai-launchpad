import falconNavbarLogo from "@/assets/falcon-navbar-logo.png";

export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <img src={falconNavbarLogo} alt="Falcon Innovation Academy" className="h-8 w-auto" />
    </div>
  );
}
