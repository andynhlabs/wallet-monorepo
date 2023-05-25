import { useIntl } from 'react-intl';

import { Center, Icon, Typography } from '@mywallet/components';
import type { IDecodedTx } from '@mywallet/engine/src/vaults/types';

import { getTxStatusInfo } from '../utils/utilsTxDetail';

function TxDetailStatusIcon({ decodedTx }: { decodedTx: IDecodedTx }) {
  const intl = useIntl();

  const { iconContainerColor, iconColor, iconName, textColor, text } =
    getTxStatusInfo({ decodedTx });

  return (
    <Center>
      <Center rounded="full" size="56px" bgColor={iconContainerColor}>
        <Icon color={iconColor} name={iconName} size={56} />
      </Center>
      <Typography.Heading mt={2} color={textColor}>
        {intl.formatMessage({ id: text })}
      </Typography.Heading>
    </Center>
  );
}

export { TxDetailStatusIcon };
