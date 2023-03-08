import * as React from 'react';

import { SFSymbolViewProps } from './SFSymbol.types';

export default function SFSymbolView(props: SFSymbolViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
