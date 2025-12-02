import { TokenETH } from '@web3icons/react'
import { LiveExample } from './live-example'

export const SizeExample = () => {
  return (
    <LiveExample
      tabs={[
        {
          label: 'Numeric',
          preview: (
            <div className="flex items-end gap-4">
              {[16, 24, 32, 48, 64].map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <TokenETH size={size} variant="branded" />
                  <span className="text-xs text-gray-500">{size}px</span>
                </div>
              ))}
            </div>
          ),
          content: `import { TokenETH } from "@web3icons/react";

export function NumericSizes() {
  return (
    <>
      <TokenETH size={16} variant="branded" />
      <TokenETH size={24} variant="branded" />
      <TokenETH size={32} variant="branded" />
      <TokenETH size={48} variant="branded" />
      <TokenETH size={64} variant="branded" />
    </>
  );
}`,
        },
        {
          label: 'Relative',
          preview: (
            <div className="flex items-end gap-4">
              {['1rem', '1.5rem', '2rem', '2.5rem', '3rem'].map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <TokenETH size={size} variant="branded" />
                  <span className="text-xs text-gray-500">{size}</span>
                </div>
              ))}
            </div>
          ),
          content: `import { TokenETH } from "@web3icons/react";

export function RelativeSizes() {
  return (
    <>
      <TokenETH size="1rem" variant="branded" />
      <TokenETH size="1.5rem" variant="branded" />
      <TokenETH size="2rem" variant="branded" />
      <TokenETH size="2.5rem" variant="branded" />
      <TokenETH size="3rem" variant="branded" />
    </>
  );
}`,
        },
        {
          label: 'Responsive',
          preview: (
            <div className="flex items-end gap-4">
              <TokenETH size="20%" variant="branded" />
              <TokenETH size="50%" variant="branded" />
              <TokenETH size="100%" variant="branded" />
            </div>
          ),
          content: `import { TokenETH } from "@web3icons/react";

export function ResponsiveSize() {
  return (
    <>
      <TokenETH size="20%" variant="branded" />
      <TokenETH size="50%" variant="branded" />
      <TokenETH size="100%" variant="branded" />
    </>
  );
}`,
        },
      ]}
    />
  )
}
