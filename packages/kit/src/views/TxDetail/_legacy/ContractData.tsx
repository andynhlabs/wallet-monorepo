import type { FC } from 'react';

import { useIntl } from 'react-intl';

import { Container } from '@mywallet/components';
import type { ContentItemProps } from '@mywallet/components/src/Container/ContentBasisItem';
import type { EVMDecodedItem } from '@mywallet/engine/src/vaults/impl/evm/decoder/types';

export type HashProps = {
  tx: EVMDecodedItem;
} & ContentItemProps;

const ContractData: FC<HashProps> = (props) => {
  const { tx } = props;
  const intl = useIntl();

  return (
    <Container.Item
      {...props}
      title={intl.formatMessage({ id: 'form__contract_data' })}
      describe={tx.data.slice(0, 200)}
    />
  );
};

export default ContractData;
