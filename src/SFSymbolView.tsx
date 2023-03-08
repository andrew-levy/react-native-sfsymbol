import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { SFSymbolViewProps } from './SFSymbol.types';

const NativeView: React.ComponentType<SFSymbolViewProps> =
  requireNativeViewManager('SFSymbol');

export default function SFSymbolView(props: SFSymbolViewProps) {
  return <NativeView {...props} />;
}
