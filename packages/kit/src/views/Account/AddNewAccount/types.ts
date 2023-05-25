import type { ImportableHDAccount } from '@mywallet/engine/src/types/account';

export type RecoverAccountType = ImportableHDAccount & {
  selected: boolean;
  isDisabled: boolean;
};

export type AdvancedValues = {
  fromIndex: number;
  generateCount?: number;
  showPathAndLink: boolean;
};
