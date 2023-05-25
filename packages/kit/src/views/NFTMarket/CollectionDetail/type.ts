import type { ComponentProps } from 'react';

import type { List } from '@mywallet/components';

export enum TabEnum {
  Items = 'items',
  Sales = 'sales',
}

export type ListProps = {
  contractAddress: string;
  networkId: string;
} & Pick<ComponentProps<typeof List>, 'ListHeaderComponent'>;
