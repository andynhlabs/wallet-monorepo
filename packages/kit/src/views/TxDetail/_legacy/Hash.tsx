import type { FC } from 'react';
import { useCallback } from 'react';

import { useIntl } from 'react-intl';

import { Container, ToastManager } from '@mywallet/components';
import type { ContentItemProps } from '@mywallet/components/src/Container/ContentBasisItem';
import { shortenAddress } from '@mywallet/components/src/utils';
import { copyToClipboard } from '@mywallet/components/src/utils/ClipboardUtils';

export type HashProps = {
  hash: string; // tx hash
} & ContentItemProps;

const Hash: FC<HashProps> = (props) => {
  const { hash } = props;
  const intl = useIntl();

  const copyHashToClipboard = useCallback(() => {
    copyToClipboard(hash ?? '');
    ToastManager.show({ title: intl.formatMessage({ id: 'msg__copied' }) });
  }, [hash, intl]);

  return (
    <Container.Item
      {...props}
      title={intl.formatMessage({ id: 'content__hash' })}
      describe={shortenAddress(hash ?? '', 8)}
      customArrowIconName="Square2StackMini"
      onArrowIconPress={copyHashToClipboard}
    />
  );
};

export default Hash;
