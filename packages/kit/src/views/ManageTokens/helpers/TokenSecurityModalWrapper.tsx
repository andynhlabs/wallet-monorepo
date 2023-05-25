import { ToastManager } from '@mywallet/components';
import { formatMessage } from '@mywallet/components/src/Provider';
import { generateNetworkIdByChainId } from '@mywallet/engine/src/managers/network';
import { GoPlusSupportApis } from '@mywallet/engine/src/types/goplus';
import type { Token } from '@mywallet/engine/src/types/token';
import { TokenRiskLevel } from '@mywallet/engine/src/types/token';

import backgroundApiProxy from '../../../background/instance/backgroundApiProxy';

export const notifyIfRiskToken = (token: Partial<Token>) => {
  if (!token.riskLevel || token.riskLevel <= TokenRiskLevel.VERIFIED) {
    return;
  }
  let networkId = token?.networkId;
  if (!networkId) {
    networkId = generateNetworkIdByChainId({
      impl: token?.impl ?? '',
      chainId: token?.chainId ?? '',
    });
  }
  backgroundApiProxy.serviceToken
    .getTokenRiskyItems({
      address: token?.tokenIdOnNetwork ?? (token?.address || ''),
      networkId,
      apiName: GoPlusSupportApis.token_security,
    })
    .then((info) => {
      if (!info.hasSecurity) {
        return;
      }
      ToastManager.show(
        {
          title: formatMessage(
            {
              id: info?.danger?.length
                ? 'msg__str_is_a_risky_token_be_careful'
                : 'msg__str_is_an_attention_token_be_careful',
            },
            { 0: token?.symbol ?? '' },
          ),
        },
        {
          type: 'default',
        },
      );
    })
    .catch(() => {
      // pass
    });
};
