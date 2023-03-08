import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to SFSymbol.web.ts
// and on native platforms to SFSymbol.ts
import SFSymbolModule from './SFSymbolModule';
import SFSymbolView from './SFSymbolView';
import { ChangeEventPayload, SFSymbolViewProps } from './SFSymbol.types';

// Get the native constant value.
export const PI = SFSymbolModule.PI;

export function hello(): string {
  return SFSymbolModule.hello();
}

export async function setValueAsync(value: string) {
  return await SFSymbolModule.setValueAsync(value);
}

const emitter = new EventEmitter(SFSymbolModule ?? NativeModulesProxy.SFSymbol);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { SFSymbolView, SFSymbolViewProps, ChangeEventPayload };
