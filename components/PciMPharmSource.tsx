import { PCI_MPHARM_REGS, PCI_MPHARM_AMEND_2020 } from '@/lib/pci-mpharm'

// One source line under every M.Pharm eligibility block, so the 55% / 50% figures always link to PCI's own PDFs.
export default function PciMPharmSource({ className = '' }: { className?: string }) {
  const a = 'text-[#0b6d41] underline underline-offset-2 hover:text-[#085a35]'
  return (
    <p className={`text-[11px] sm:text-xs text-gray-600 leading-relaxed ${className}`}>
      Source: Pharmacy Council of India,{' '}
      <a href={PCI_MPHARM_REGS} target="_blank" rel="noopener noreferrer" className={a}>M.Pharm Regulations, 2014</a>{' '}
      and its{' '}
      <a href={PCI_MPHARM_AMEND_2020} target="_blank" rel="noopener noreferrer" className={a}>2020 amendment</a>.
    </p>
  )
}
