import { Users } from "lucide-react";

// Stable per-provider "visitors this month" number (deterministic from the id,
// so it doesn't jump between renders). Used for provider-specific social proof.
export function providerVisitStat(id: string): string {
  // Hand-picked, non-round numbers for specific providers so they read as real
  // traffic rather than a rounded estimate. Others fall back to the hash below.
  const OVERRIDES: Record<string, number> = {
    winona: 1843,
  };
  if (OVERRIDES[id] != null) return OVERRIDES[id].toLocaleString("en-US");
  let h = 5381;
  for (let i = 0; i < id.length; i++) h = ((h << 5) + h + id.charCodeAt(i)) >>> 0;
  // Bias toward non-round values (avoid clean hundreds) so it looks organic.
  const n = 1211 + (h % 1589); // ~1,211-2,799
  return n.toLocaleString("en-US");
}

// Desktop-only speech bubble anchored to the #1 card's CTA. Its tail kisses the
// CTA's top-left corner and it animates in ~2.6s after load (pure CSS delay, so
// it works without client JS). Number + text come from config.cardSocialProof.
export function SocialProofBubble({ number, text }: { number: string; text: string }) {
  return (
    <div className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block">
      <div
        className="absolute bottom-0.5 right-[-6px] w-[168px] origin-bottom-right opacity-0"
        style={{ animation: "socialProofPop 0.5s cubic-bezier(0.18,0.89,0.32,1.28) 2.6s forwards" }}
      >
        <div className="relative rounded-2xl bg-white px-2.5 py-2 shadow-[0_12px_34px_-8px_rgba(16,24,40,0.28)] ring-1 ring-black/[0.06]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
              <span className="absolute inset-0 rounded-full ring-2 ring-[#C2366E]/30" />
              <Users className="h-4 w-4 text-[#A8285E]" strokeWidth={2} />
            </span>
            <p className="text-[12px] leading-[1.3] text-gray-600">
              <span className="font-extrabold text-[#191919]">{number}</span> {text}
            </p>
          </div>
          {/* Speech tail - points down to the CTA's top-left corner */}
          <span className="absolute -bottom-[6px] right-6 h-3.5 w-3.5 rotate-45 rounded-[3px] bg-white shadow-[3px_3px_6px_-3px_rgba(16,24,40,0.28)]" />
        </div>
      </div>
    </div>
  );
}

// Mobile-only social-proof band that tucks under the #1 card as a connected
// layer (peeks out slightly inset), revealing ~2.6s after load via pure CSS.
export function SocialProofBand({ number, text }: { number: string; text: string }) {
  return (
    <div
      className="overflow-hidden sm:hidden"
      style={{ animation: "socialProofReveal 0.5s ease-out 2.6s both" }}
    >
      <div className="mx-auto w-[92%] rounded-b-xl border border-t-0 border-gray-200 bg-white px-2 pb-2 pt-2.5 text-center shadow-[0_2px_5px_rgba(16,24,40,0.05)]">
        <p className="whitespace-nowrap text-[11.5px] font-semibold text-gray-600">
          <span className="font-extrabold text-[#191919]">{number}</span> {text}
        </p>
      </div>
    </div>
  );
}
