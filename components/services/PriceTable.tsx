import type { PriceLine } from "@/types";

export default function PriceTable({ rows }: { rows: PriceLine[] }) {
  return (
    <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-hairline">
      <table className="w-full min-w-[540px] border-collapse text-left text-[0.95rem]">
        <caption className="sr-only">Indicative rates for this service</caption>
        <thead>
          <tr className="bg-surface text-[0.85rem] font-medium text-muted">
            <th scope="col" className="px-5 py-3.5">
              Work
            </th>
            <th scope="col" className="px-5 py-3.5">
              From
            </th>
            <th scope="col" className="px-5 py-3.5">
              What the rate covers
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-hairline">
          {rows.map((row) => (
            <tr key={row.item}>
              <th scope="row" className="px-5 py-4 font-medium">
                {row.item}
              </th>
              <td className="whitespace-nowrap px-5 py-4">
                <span className="font-display text-[1.15rem] font-semibold text-primary">{row.from}</span>
                <span className="block text-[0.8rem] text-muted">{row.unit}</span>
              </td>
              <td className="px-5 py-4 text-muted">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
