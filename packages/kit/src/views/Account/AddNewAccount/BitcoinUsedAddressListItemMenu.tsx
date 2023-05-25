import type { FC } from 'react';
import { useCallback, useMemo } from 'react';

import { Divider } from '@mywallet/components';
import type { BtcForkChainUsedAccount } from '@mywallet/engine/src/types/account';
import type { Network } from '@mywallet/engine/src/types/network';
import BaseMenu from '@mywallet/kit/src/views/Overlay/BaseMenu';
import type {
  IBaseMenuOptions,
  IMenu,
} from '@mywallet/kit/src/views/Overlay/BaseMenu';

import useOpenBlockBrowser from '../../../hooks/useOpenBlockBrowser';

import type { ICopyAddress } from './BitcoinUsedAddressList';

const BitcoinUsedAddressListItemMenu: FC<
  IMenu & {
    item: BtcForkChainUsedAccount & { suffixPath?: string };
    network: Network;
    showRemoveOption: boolean;
    onRemoveAddress?: (
      item: BtcForkChainUsedAccount & { suffixPath?: string },
    ) => void;
    onCopyAddress: ICopyAddress;
  }
> = ({
  item,
  network,
  showRemoveOption,
  onRemoveAddress,
  onCopyAddress,
  ...props
}) => {
  const { openAddressDetails } = useOpenBlockBrowser(network);
  const onOpenBlockChainBrowser = useCallback(() => {
    openAddressDetails(item.name);
  }, [item, openAddressDetails]);

  const onPressCopyAddress = useCallback(() => {
    setTimeout(() => {
      onCopyAddress({ address: item.name, path: item.path });
    }, 200);
  }, [item, onCopyAddress]);

  const options = useMemo<IBaseMenuOptions>(
    () => [
      {
        id: 'action__copy_address',
        onPress: onPressCopyAddress,
        icon: 'Square2StackOutline',
      },
      {
        id: 'action__view_in_browser',
        onPress: onOpenBlockChainBrowser,
        icon: 'GlobeAltOutline',
      },
      showRemoveOption && (() => <Divider my={1} />),
      showRemoveOption && {
        id: 'action__remove_address',
        onPress: () => onRemoveAddress?.(item),
        icon: 'TrashOutline',
        variant: 'desctructive',
      },
    ],
    [
      onPressCopyAddress,
      onOpenBlockChainBrowser,
      onRemoveAddress,
      showRemoveOption,
      item,
    ],
  );

  return <BaseMenu options={options} {...props} />;
};

export default BitcoinUsedAddressListItemMenu;
