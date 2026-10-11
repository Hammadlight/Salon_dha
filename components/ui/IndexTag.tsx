/**
 * The signature visual device of this template: instead of generic 01 / 02 / 03
 * numbering, every category is tagged with a short editorial code derived from
 * its own name (Hair -> HR, Bridal -> BR), the way a magazine contents page
 * indexes its features. The code is meaningful, not decorative — it's how a
 * client would abbreviate the category on a service ticket.
 */
export default function IndexTag({ code, label }: { code: string; label?: string }) {
  return (
    <span className="index-tag">
      <span>{code}</span>
      {label && <span className="font-body not-italic text-[0.65rem] uppercase tracking-eyebrow text-ink/70">{label}</span>}
    </span>
  );
}
