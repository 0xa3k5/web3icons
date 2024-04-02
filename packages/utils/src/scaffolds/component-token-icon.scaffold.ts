export const componentTokenIconScaffold = `import React, { forwardRef } from 'react';
import { tokens, networks } from '@token-icons/core/metadata';
import * as TokenComponents from './icons/tokens';
import * as NetworkComponents from './icons/networks';
import { IconComponentProps, TokenIconProps } from './types';

type TokenComponentNames = keyof typeof TokenComponents;
type NetworkComponentNames = keyof typeof NetworkComponents;

type IconComponentType = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<IconComponentProps> & React.RefAttributes<SVGSVGElement>
>;

export const TokenIcon = forwardRef<SVGSVGElement, TokenIconProps>(
  ({ symbol, address, chain, size, className, variant = 'mono', color }, ref) => {
    const iconName = resolveIconName(symbol, address, chain);

    const IconComponent = (symbol || address) 
      ? (TokenComponents[iconName as TokenComponentNames] as IconComponentType) 
      : (NetworkComponents[iconName as NetworkComponentNames] as IconComponentType);

    if (!IconComponent) {
      return null;
    }

    return (
      <IconComponent
        size={size}
        color={color}
        className={className}
        variant={variant}
        ref={ref}
      />
    );
  },
);

function normalizeIconName(iconName: string) {
  return iconName.replace(/[- ]+/g, '_').toLocaleUpperCase();
}

function resolveIconName(
  symbol?: string,
  address?: string,
  chain?: string,
): TokenComponentNames | NetworkComponentNames {
  let resolvedName: TokenComponentNames | NetworkComponentNames = 'TokenETH';

  if (symbol) {
    const tokenData = tokens.find(token => token.symbol === symbol);
    if (tokenData) {
      resolvedName = \`Token\${normalizeIconName(tokenData.symbol)}\` as TokenComponentNames;
    }
  } else if (address) {
    const tokenData = tokens.find(token => 
      Object.values(token.addresses).includes(address)
    );
    if (tokenData) {
      resolvedName = \`Token\${normalizeIconName(tokenData.symbol)}\` as TokenComponentNames;
    }
  } else if (chain) {
    const networkData = networks.find(network => network.id === chain);
    if (networkData) {
      resolvedName = \`Network\${normalizeIconName(networkData.name)}\` as NetworkComponentNames;
    } else {
      resolvedName = 'NetworkETH' as NetworkComponentNames;
    }
  }

  return resolvedName;
}
`;
