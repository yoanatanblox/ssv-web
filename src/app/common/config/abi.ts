import { API_VERSIONS, NETWORKS } from '~lib/utils/envHelper';

export const ABI_VERSION = {
  setterContract: {
    [`${NETWORKS.MAINNET}_${API_VERSIONS.V4}`]: [
      {
        'inputs': [],
        'name': 'ApprovalNotWithinTimeframe',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'CallerNotOwner',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'CallerNotWhitelisted',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ClusterAlreadyEnabled',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ClusterDoesNotExists',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ClusterIsLiquidated',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ClusterNotLiquidatable',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ExceedValidatorLimit',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'FeeExceedsIncreaseLimit',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'FeeIncreaseNotAllowed',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'FeeTooLow',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'IncorrectClusterState',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'IncorrectValidatorState',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'InsufficientBalance',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'InvalidOperatorIdsLength',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'InvalidPublicKeyLength',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'MaxValueExceeded',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'NewBlockPeriodIsBelowMinimum',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'NoFeeDeclared',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'NotAuthorized',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'OperatorAlreadyExists',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'OperatorDoesNotExist',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'OperatorsListNotUnique',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'SameFeeChangeNotAllowed',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'TargetModuleDoesNotExist',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'TokenTransferFailed',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'UnsortedOperatorsList',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ValidatorAlreadyExists',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ValidatorDoesNotExist',
        'type': 'error',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'previousAdmin',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'newAdmin',
            'type': 'address',
          },
        ],
        'name': 'AdminChanged',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'beacon',
            'type': 'address',
          },
        ],
        'name': 'BeaconUpgraded',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'value',
            'type': 'uint256',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'indexed': false,
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'ClusterDeposited',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'indexed': false,
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'ClusterLiquidated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'indexed': false,
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'ClusterReactivated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'value',
            'type': 'uint256',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'indexed': false,
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'ClusterWithdrawn',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint64',
            'name': 'value',
            'type': 'uint64',
          },
        ],
        'name': 'DeclareOperatorFeePeriodUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint64',
            'name': 'value',
            'type': 'uint64',
          },
        ],
        'name': 'ExecuteOperatorFeePeriodUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'recipientAddress',
            'type': 'address',
          },
        ],
        'name': 'FeeRecipientAddressUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint8',
            'name': 'version',
            'type': 'uint8',
          },
        ],
        'name': 'Initialized',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint64',
            'name': 'value',
            'type': 'uint64',
          },
        ],
        'name': 'LiquidationThresholdPeriodUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'value',
            'type': 'uint256',
          },
        ],
        'name': 'MinimumLiquidationCollateralUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'value',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'recipient',
            'type': 'address',
          },
        ],
        'name': 'NetworkEarningsWithdrawn',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'oldFee',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'newFee',
            'type': 'uint256',
          },
        ],
        'name': 'NetworkFeeUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'bytes',
            'name': 'publicKey',
            'type': 'bytes',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'fee',
            'type': 'uint256',
          },
        ],
        'name': 'OperatorAdded',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': true,
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'OperatorFeeCancellationDeclared',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': true,
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'blockNumber',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'fee',
            'type': 'uint256',
          },
        ],
        'name': 'OperatorFeeDeclared',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': true,
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'blockNumber',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'fee',
            'type': 'uint256',
          },
        ],
        'name': 'OperatorFeeExecuted',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint64',
            'name': 'value',
            'type': 'uint64',
          },
        ],
        'name': 'OperatorFeeIncreaseLimitUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'OperatorRemoved',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'whitelisted',
            'type': 'address',
          },
        ],
        'name': 'OperatorWhitelistUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': true,
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'value',
            'type': 'uint256',
          },
        ],
        'name': 'OperatorWithdrawn',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'previousOwner',
            'type': 'address',
          },
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'newOwner',
            'type': 'address',
          },
        ],
        'name': 'OwnershipTransferStarted',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'previousOwner',
            'type': 'address',
          },
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'newOwner',
            'type': 'address',
          },
        ],
        'name': 'OwnershipTransferred',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'implementation',
            'type': 'address',
          },
        ],
        'name': 'Upgraded',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'indexed': false,
            'internalType': 'bytes',
            'name': 'publicKey',
            'type': 'bytes',
          },
          {
            'indexed': false,
            'internalType': 'bytes',
            'name': 'shares',
            'type': 'bytes',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'indexed': false,
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'ValidatorAdded',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'indexed': false,
            'internalType': 'bytes',
            'name': 'publicKey',
            'type': 'bytes',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'indexed': false,
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'ValidatorRemoved',
        'type': 'event',
      },
      {
        'stateMutability': 'nonpayable',
        'type': 'fallback',
      },
      {
        'inputs': [],
        'name': 'acceptOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'cancelDeclaredOperatorFee',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'internalType': 'uint256',
            'name': 'fee',
            'type': 'uint256',
          },
        ],
        'name': 'declareOperatorFee',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'deposit',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'executeOperatorFee',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'userAddress',
            'type': 'address',
          },
        ],
        'name': 'getRegisterAuth',
        'outputs': [
          {
            'internalType': 'bool',
            'name': 'authOperators',
            'type': 'bool',
          },
          {
            'internalType': 'bool',
            'name': 'authValidators',
            'type': 'bool',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'contract IERC20',
            'name': 'token_',
            'type': 'address',
          },
          {
            'internalType': 'contract ISSVOperators',
            'name': 'ssvOperators_',
            'type': 'address',
          },
          {
            'internalType': 'contract ISSVClusters',
            'name': 'ssvClusters_',
            'type': 'address',
          },
          {
            'internalType': 'contract ISSVDAO',
            'name': 'ssvDAO_',
            'type': 'address',
          },
          {
            'internalType': 'contract ISSVViews',
            'name': 'ssvViews_',
            'type': 'address',
          },
          {
            'internalType': 'uint64',
            'name': 'minimumBlocksBeforeLiquidation_',
            'type': 'uint64',
          },
          {
            'internalType': 'uint256',
            'name': 'minimumLiquidationCollateral_',
            'type': 'uint256',
          },
          {
            'internalType': 'uint32',
            'name': 'validatorsPerOperatorLimit_',
            'type': 'uint32',
          },
          {
            'internalType': 'uint64',
            'name': 'declareOperatorFeePeriod_',
            'type': 'uint64',
          },
          {
            'internalType': 'uint64',
            'name': 'executeOperatorFeePeriod_',
            'type': 'uint64',
          },
          {
            'internalType': 'uint64',
            'name': 'operatorMaxFeeIncrease_',
            'type': 'uint64',
          },
        ],
        'name': 'initialize',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'liquidate',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'owner',
        'outputs': [
          {
            'internalType': 'address',
            'name': '',
            'type': 'address',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'pendingOwner',
        'outputs': [
          {
            'internalType': 'address',
            'name': '',
            'type': 'address',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'proxiableUUID',
        'outputs': [
          {
            'internalType': 'bytes32',
            'name': '',
            'type': 'bytes32',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'reactivate',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'internalType': 'uint256',
            'name': 'fee',
            'type': 'uint256',
          },
        ],
        'name': 'reduceOperatorFee',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'bytes',
            'name': 'publicKey',
            'type': 'bytes',
          },
          {
            'internalType': 'uint256',
            'name': 'fee',
            'type': 'uint256',
          },
        ],
        'name': 'registerOperator',
        'outputs': [
          {
            'internalType': 'uint64',
            'name': 'id',
            'type': 'uint64',
          },
        ],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'bytes',
            'name': 'publicKey',
            'type': 'bytes',
          },
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'internalType': 'bytes',
            'name': 'sharesData',
            'type': 'bytes',
          },
          {
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'registerValidator',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'removeOperator',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'bytes',
            'name': 'publicKey',
            'type': 'bytes',
          },
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'removeValidator',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'recipientAddress',
            'type': 'address',
          },
        ],
        'name': 'setFeeRecipientAddress',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'internalType': 'address',
            'name': 'whitelisted',
            'type': 'address',
          },
        ],
        'name': 'setOperatorWhitelist',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'userAddress',
            'type': 'address',
          },
          {
            'internalType': 'bool',
            'name': 'authOperator',
            'type': 'bool',
          },
          {
            'internalType': 'bool',
            'name': 'authValidator',
            'type': 'bool',
          },
        ],
        'name': 'setRegisterAuth',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'newOwner',
            'type': 'address',
          },
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'timeInSeconds',
            'type': 'uint64',
          },
        ],
        'name': 'updateDeclareOperatorFeePeriod',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'timeInSeconds',
            'type': 'uint64',
          },
        ],
        'name': 'updateExecuteOperatorFeePeriod',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'blocks',
            'type': 'uint64',
          },
        ],
        'name': 'updateLiquidationThresholdPeriod',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256',
          },
        ],
        'name': 'updateMinimumLiquidationCollateral',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'enum SSVModules',
            'name': 'moduleId',
            'type': 'uint8',
          },
          {
            'internalType': 'address',
            'name': 'moduleAddress',
            'type': 'address',
          },
        ],
        'name': 'updateModule',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint256',
            'name': 'fee',
            'type': 'uint256',
          },
        ],
        'name': 'updateNetworkFee',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'percentage',
            'type': 'uint64',
          },
        ],
        'name': 'updateOperatorFeeIncreaseLimit',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'newImplementation',
            'type': 'address',
          },
        ],
        'name': 'upgradeTo',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'newImplementation',
            'type': 'address',
          },
          {
            'internalType': 'bytes',
            'name': 'data',
            'type': 'bytes',
          },
        ],
        'name': 'upgradeToAndCall',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'withdraw',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256',
          },
        ],
        'name': 'withdrawNetworkEarnings',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256',
          },
        ],
        'name': 'withdrawOperatorEarnings',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'withdrawOperatorEarnings',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
    ],
    [`${NETWORKS.GOERLI}_${API_VERSIONS.V4}`]: [
      {
        'inputs': [],
        'name': 'ApprovalNotWithinTimeframe',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'CallerNotOwner',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'CallerNotWhitelisted',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ClusterAlreadyEnabled',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ClusterDoesNotExists',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ClusterIsLiquidated',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ClusterNotLiquidatable',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ExceedValidatorLimit',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'FeeExceedsIncreaseLimit',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'FeeIncreaseNotAllowed',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'FeeTooLow',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'IncorrectClusterState',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'IncorrectValidatorState',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'InsufficientBalance',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'InvalidOperatorIdsLength',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'InvalidPublicKeyLength',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'MaxValueExceeded',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'NewBlockPeriodIsBelowMinimum',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'NoFeeDeclared',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'NotAuthorized',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'OperatorAlreadyExists',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'OperatorDoesNotExist',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'OperatorsListNotUnique',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'SameFeeChangeNotAllowed',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'TargetModuleDoesNotExist',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'TokenTransferFailed',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'UnsortedOperatorsList',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ValidatorAlreadyExists',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ValidatorDoesNotExist',
        'type': 'error',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'previousAdmin',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'newAdmin',
            'type': 'address',
          },
        ],
        'name': 'AdminChanged',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'beacon',
            'type': 'address',
          },
        ],
        'name': 'BeaconUpgraded',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'value',
            'type': 'uint256',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'indexed': false,
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'ClusterDeposited',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'indexed': false,
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'ClusterLiquidated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'indexed': false,
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'ClusterReactivated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'value',
            'type': 'uint256',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'indexed': false,
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'ClusterWithdrawn',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint64',
            'name': 'value',
            'type': 'uint64',
          },
        ],
        'name': 'DeclareOperatorFeePeriodUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint64',
            'name': 'value',
            'type': 'uint64',
          },
        ],
        'name': 'ExecuteOperatorFeePeriodUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'recipientAddress',
            'type': 'address',
          },
        ],
        'name': 'FeeRecipientAddressUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint8',
            'name': 'version',
            'type': 'uint8',
          },
        ],
        'name': 'Initialized',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint64',
            'name': 'value',
            'type': 'uint64',
          },
        ],
        'name': 'LiquidationThresholdPeriodUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'value',
            'type': 'uint256',
          },
        ],
        'name': 'MinimumLiquidationCollateralUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'value',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'recipient',
            'type': 'address',
          },
        ],
        'name': 'NetworkEarningsWithdrawn',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'oldFee',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'newFee',
            'type': 'uint256',
          },
        ],
        'name': 'NetworkFeeUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'bytes',
            'name': 'publicKey',
            'type': 'bytes',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'fee',
            'type': 'uint256',
          },
        ],
        'name': 'OperatorAdded',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': true,
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'OperatorFeeCancellationDeclared',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': true,
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'blockNumber',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'fee',
            'type': 'uint256',
          },
        ],
        'name': 'OperatorFeeDeclared',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': true,
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'blockNumber',
            'type': 'uint256',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'fee',
            'type': 'uint256',
          },
        ],
        'name': 'OperatorFeeExecuted',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint64',
            'name': 'value',
            'type': 'uint64',
          },
        ],
        'name': 'OperatorFeeIncreaseLimitUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'OperatorRemoved',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'whitelisted',
            'type': 'address',
          },
        ],
        'name': 'OperatorWhitelistUpdated',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': true,
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'indexed': false,
            'internalType': 'uint256',
            'name': 'value',
            'type': 'uint256',
          },
        ],
        'name': 'OperatorWithdrawn',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'previousOwner',
            'type': 'address',
          },
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'newOwner',
            'type': 'address',
          },
        ],
        'name': 'OwnershipTransferStarted',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'previousOwner',
            'type': 'address',
          },
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'newOwner',
            'type': 'address',
          },
        ],
        'name': 'OwnershipTransferred',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'implementation',
            'type': 'address',
          },
        ],
        'name': 'Upgraded',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'indexed': false,
            'internalType': 'bytes',
            'name': 'publicKey',
            'type': 'bytes',
          },
          {
            'indexed': false,
            'internalType': 'bytes',
            'name': 'shares',
            'type': 'bytes',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'indexed': false,
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'ValidatorAdded',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'indexed': false,
            'internalType': 'bytes',
            'name': 'publicKey',
            'type': 'bytes',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'indexed': false,
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'ValidatorRemoved',
        'type': 'event',
      },
      {
        'stateMutability': 'nonpayable',
        'type': 'fallback',
      },
      {
        'inputs': [],
        'name': 'acceptOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'cancelDeclaredOperatorFee',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'internalType': 'uint256',
            'name': 'fee',
            'type': 'uint256',
          },
        ],
        'name': 'declareOperatorFee',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'deposit',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'executeOperatorFee',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'userAddress',
            'type': 'address',
          },
        ],
        'name': 'getRegisterAuth',
        'outputs': [
          {
            'internalType': 'bool',
            'name': 'authOperators',
            'type': 'bool',
          },
          {
            'internalType': 'bool',
            'name': 'authValidators',
            'type': 'bool',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'contract IERC20',
            'name': 'token_',
            'type': 'address',
          },
          {
            'internalType': 'contract ISSVOperators',
            'name': 'ssvOperators_',
            'type': 'address',
          },
          {
            'internalType': 'contract ISSVClusters',
            'name': 'ssvClusters_',
            'type': 'address',
          },
          {
            'internalType': 'contract ISSVDAO',
            'name': 'ssvDAO_',
            'type': 'address',
          },
          {
            'internalType': 'contract ISSVViews',
            'name': 'ssvViews_',
            'type': 'address',
          },
          {
            'internalType': 'uint64',
            'name': 'minimumBlocksBeforeLiquidation_',
            'type': 'uint64',
          },
          {
            'internalType': 'uint256',
            'name': 'minimumLiquidationCollateral_',
            'type': 'uint256',
          },
          {
            'internalType': 'uint32',
            'name': 'validatorsPerOperatorLimit_',
            'type': 'uint32',
          },
          {
            'internalType': 'uint64',
            'name': 'declareOperatorFeePeriod_',
            'type': 'uint64',
          },
          {
            'internalType': 'uint64',
            'name': 'executeOperatorFeePeriod_',
            'type': 'uint64',
          },
          {
            'internalType': 'uint64',
            'name': 'operatorMaxFeeIncrease_',
            'type': 'uint64',
          },
        ],
        'name': 'initialize',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'liquidate',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'owner',
        'outputs': [
          {
            'internalType': 'address',
            'name': '',
            'type': 'address',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'pendingOwner',
        'outputs': [
          {
            'internalType': 'address',
            'name': '',
            'type': 'address',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'proxiableUUID',
        'outputs': [
          {
            'internalType': 'bytes32',
            'name': '',
            'type': 'bytes32',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'reactivate',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'internalType': 'uint256',
            'name': 'fee',
            'type': 'uint256',
          },
        ],
        'name': 'reduceOperatorFee',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'bytes',
            'name': 'publicKey',
            'type': 'bytes',
          },
          {
            'internalType': 'uint256',
            'name': 'fee',
            'type': 'uint256',
          },
        ],
        'name': 'registerOperator',
        'outputs': [
          {
            'internalType': 'uint64',
            'name': 'id',
            'type': 'uint64',
          },
        ],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'bytes',
            'name': 'publicKey',
            'type': 'bytes',
          },
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'internalType': 'bytes',
            'name': 'sharesData',
            'type': 'bytes',
          },
          {
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'registerValidator',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'removeOperator',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'bytes',
            'name': 'publicKey',
            'type': 'bytes',
          },
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'removeValidator',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'recipientAddress',
            'type': 'address',
          },
        ],
        'name': 'setFeeRecipientAddress',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'internalType': 'address',
            'name': 'whitelisted',
            'type': 'address',
          },
        ],
        'name': 'setOperatorWhitelist',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'userAddress',
            'type': 'address',
          },
          {
            'internalType': 'bool',
            'name': 'authOperator',
            'type': 'bool',
          },
          {
            'internalType': 'bool',
            'name': 'authValidator',
            'type': 'bool',
          },
        ],
        'name': 'setRegisterAuth',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'newOwner',
            'type': 'address',
          },
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'timeInSeconds',
            'type': 'uint64',
          },
        ],
        'name': 'updateDeclareOperatorFeePeriod',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'timeInSeconds',
            'type': 'uint64',
          },
        ],
        'name': 'updateExecuteOperatorFeePeriod',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'blocks',
            'type': 'uint64',
          },
        ],
        'name': 'updateLiquidationThresholdPeriod',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256',
          },
        ],
        'name': 'updateMinimumLiquidationCollateral',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'enum SSVModules',
            'name': 'moduleId',
            'type': 'uint8',
          },
          {
            'internalType': 'address',
            'name': 'moduleAddress',
            'type': 'address',
          },
        ],
        'name': 'updateModule',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint256',
            'name': 'fee',
            'type': 'uint256',
          },
        ],
        'name': 'updateNetworkFee',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'percentage',
            'type': 'uint64',
          },
        ],
        'name': 'updateOperatorFeeIncreaseLimit',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'newImplementation',
            'type': 'address',
          },
        ],
        'name': 'upgradeTo',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'newImplementation',
            'type': 'address',
          },
          {
            'internalType': 'bytes',
            'name': 'data',
            'type': 'bytes',
          },
        ],
        'name': 'upgradeToAndCall',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'withdraw',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256',
          },
        ],
        'name': 'withdrawNetworkEarnings',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
          {
            'internalType': 'uint256',
            'name': 'amount',
            'type': 'uint256',
          },
        ],
        'name': 'withdrawOperatorEarnings',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'withdrawOperatorEarnings',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
    ],
  },
  getterContract: {
    [`${NETWORKS.MAINNET}_${API_VERSIONS.V4}`]: [
      {
        'inputs': [],
        'stateMutability': 'nonpayable',
        'type': 'constructor',
      },
      {
        'inputs': [],
        'name': 'ApprovalNotWithinTimeframe',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'CallerNotOwner',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'CallerNotWhitelisted',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ClusterAlreadyEnabled',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ClusterDoesNotExists',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ClusterIsLiquidated',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ClusterNotLiquidatable',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ExceedValidatorLimit',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'FeeExceedsIncreaseLimit',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'FeeIncreaseNotAllowed',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'FeeTooLow',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'IncorrectClusterState',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'IncorrectValidatorState',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'InsufficientBalance',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'InvalidOperatorIdsLength',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'InvalidPublicKeyLength',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'MaxValueExceeded',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'NewBlockPeriodIsBelowMinimum',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'NoFeeDeclared',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'NotAuthorized',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'OperatorAlreadyExists',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'OperatorDoesNotExist',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'OperatorsListNotUnique',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'SameFeeChangeNotAllowed',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'TargetModuleDoesNotExist',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'TokenTransferFailed',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'UnsortedOperatorsList',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ValidatorAlreadyExists',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ValidatorDoesNotExist',
        'type': 'error',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'previousAdmin',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'newAdmin',
            'type': 'address',
          },
        ],
        'name': 'AdminChanged',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'beacon',
            'type': 'address',
          },
        ],
        'name': 'BeaconUpgraded',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint8',
            'name': 'version',
            'type': 'uint8',
          },
        ],
        'name': 'Initialized',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'previousOwner',
            'type': 'address',
          },
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'newOwner',
            'type': 'address',
          },
        ],
        'name': 'OwnershipTransferStarted',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'previousOwner',
            'type': 'address',
          },
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'newOwner',
            'type': 'address',
          },
        ],
        'name': 'OwnershipTransferred',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'implementation',
            'type': 'address',
          },
        ],
        'name': 'Upgraded',
        'type': 'event',
      },
      {
        'inputs': [],
        'name': 'acceptOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'getBalance',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'getBurnRate',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getLiquidationThresholdPeriod',
        'outputs': [
          {
            'internalType': 'uint64',
            'name': '',
            'type': 'uint64',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getMinimumLiquidationCollateral',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getNetworkEarnings',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getNetworkFee',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'getOperatorById',
        'outputs': [
          {
            'internalType': 'address',
            'name': '',
            'type': 'address',
          },
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
          {
            'internalType': 'uint32',
            'name': '',
            'type': 'uint32',
          },
          {
            'internalType': 'address',
            'name': '',
            'type': 'address',
          },
          {
            'internalType': 'bool',
            'name': '',
            'type': 'bool',
          },
          {
            'internalType': 'bool',
            'name': '',
            'type': 'bool',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'getOperatorDeclaredFee',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
          {
            'internalType': 'uint64',
            'name': '',
            'type': 'uint64',
          },
          {
            'internalType': 'uint64',
            'name': '',
            'type': 'uint64',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'id',
            'type': 'uint64',
          },
        ],
        'name': 'getOperatorEarnings',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'getOperatorFee',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getOperatorFeeIncreaseLimit',
        'outputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorMaxFeeIncrease',
            'type': 'uint64',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getOperatorFeePeriods',
        'outputs': [
          {
            'internalType': 'uint64',
            'name': 'declareOperatorFeePeriod',
            'type': 'uint64',
          },
          {
            'internalType': 'uint64',
            'name': 'executeOperatorFeePeriod',
            'type': 'uint64',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'internalType': 'bytes',
            'name': 'publicKey',
            'type': 'bytes',
          },
        ],
        'name': 'getValidator',
        'outputs': [
          {
            'internalType': 'bool',
            'name': 'active',
            'type': 'bool',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getValidatorsPerOperatorLimit',
        'outputs': [
          {
            'internalType': 'uint32',
            'name': '',
            'type': 'uint32',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getVersion',
        'outputs': [
          {
            'internalType': 'string',
            'name': 'version',
            'type': 'string',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'contract ISSVViews',
            'name': 'ssvNetwork_',
            'type': 'address',
          },
        ],
        'name': 'initialize',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'isLiquidatable',
        'outputs': [
          {
            'internalType': 'bool',
            'name': '',
            'type': 'bool',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'isLiquidated',
        'outputs': [
          {
            'internalType': 'bool',
            'name': '',
            'type': 'bool',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'owner',
        'outputs': [
          {
            'internalType': 'address',
            'name': '',
            'type': 'address',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'pendingOwner',
        'outputs': [
          {
            'internalType': 'address',
            'name': '',
            'type': 'address',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'proxiableUUID',
        'outputs': [
          {
            'internalType': 'bytes32',
            'name': '',
            'type': 'bytes32',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'ssvNetwork',
        'outputs': [
          {
            'internalType': 'contract ISSVViews',
            'name': '',
            'type': 'address',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'newOwner',
            'type': 'address',
          },
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'newImplementation',
            'type': 'address',
          },
        ],
        'name': 'upgradeTo',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'newImplementation',
            'type': 'address',
          },
          {
            'internalType': 'bytes',
            'name': 'data',
            'type': 'bytes',
          },
        ],
        'name': 'upgradeToAndCall',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function',
      },
    ],
    [`${NETWORKS.GOERLI}_${API_VERSIONS.V4}`]: [
      {
        'inputs': [],
        'stateMutability': 'nonpayable',
        'type': 'constructor',
      },
      {
        'inputs': [],
        'name': 'ApprovalNotWithinTimeframe',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'CallerNotOwner',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'CallerNotWhitelisted',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ClusterAlreadyEnabled',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ClusterDoesNotExists',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ClusterIsLiquidated',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ClusterNotLiquidatable',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ExceedValidatorLimit',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'FeeExceedsIncreaseLimit',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'FeeIncreaseNotAllowed',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'FeeTooLow',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'IncorrectClusterState',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'IncorrectValidatorState',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'InsufficientBalance',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'InvalidOperatorIdsLength',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'InvalidPublicKeyLength',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'MaxValueExceeded',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'NewBlockPeriodIsBelowMinimum',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'NoFeeDeclared',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'NotAuthorized',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'OperatorAlreadyExists',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'OperatorDoesNotExist',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'OperatorsListNotUnique',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'SameFeeChangeNotAllowed',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'TargetModuleDoesNotExist',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'TokenTransferFailed',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'UnsortedOperatorsList',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ValidatorAlreadyExists',
        'type': 'error',
      },
      {
        'inputs': [],
        'name': 'ValidatorDoesNotExist',
        'type': 'error',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'previousAdmin',
            'type': 'address',
          },
          {
            'indexed': false,
            'internalType': 'address',
            'name': 'newAdmin',
            'type': 'address',
          },
        ],
        'name': 'AdminChanged',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'beacon',
            'type': 'address',
          },
        ],
        'name': 'BeaconUpgraded',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': false,
            'internalType': 'uint8',
            'name': 'version',
            'type': 'uint8',
          },
        ],
        'name': 'Initialized',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'previousOwner',
            'type': 'address',
          },
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'newOwner',
            'type': 'address',
          },
        ],
        'name': 'OwnershipTransferStarted',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'previousOwner',
            'type': 'address',
          },
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'newOwner',
            'type': 'address',
          },
        ],
        'name': 'OwnershipTransferred',
        'type': 'event',
      },
      {
        'anonymous': false,
        'inputs': [
          {
            'indexed': true,
            'internalType': 'address',
            'name': 'implementation',
            'type': 'address',
          },
        ],
        'name': 'Upgraded',
        'type': 'event',
      },
      {
        'inputs': [],
        'name': 'acceptOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'getBalance',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'getBurnRate',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getLiquidationThresholdPeriod',
        'outputs': [
          {
            'internalType': 'uint64',
            'name': '',
            'type': 'uint64',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getMinimumLiquidationCollateral',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getNetworkEarnings',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getNetworkFee',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'getOperatorById',
        'outputs': [
          {
            'internalType': 'address',
            'name': '',
            'type': 'address',
          },
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
          {
            'internalType': 'uint32',
            'name': '',
            'type': 'uint32',
          },
          {
            'internalType': 'address',
            'name': '',
            'type': 'address',
          },
          {
            'internalType': 'bool',
            'name': '',
            'type': 'bool',
          },
          {
            'internalType': 'bool',
            'name': '',
            'type': 'bool',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'getOperatorDeclaredFee',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
          {
            'internalType': 'uint64',
            'name': '',
            'type': 'uint64',
          },
          {
            'internalType': 'uint64',
            'name': '',
            'type': 'uint64',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'id',
            'type': 'uint64',
          },
        ],
        'name': 'getOperatorEarnings',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorId',
            'type': 'uint64',
          },
        ],
        'name': 'getOperatorFee',
        'outputs': [
          {
            'internalType': 'uint256',
            'name': '',
            'type': 'uint256',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getOperatorFeeIncreaseLimit',
        'outputs': [
          {
            'internalType': 'uint64',
            'name': 'operatorMaxFeeIncrease',
            'type': 'uint64',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getOperatorFeePeriods',
        'outputs': [
          {
            'internalType': 'uint64',
            'name': 'declareOperatorFeePeriod',
            'type': 'uint64',
          },
          {
            'internalType': 'uint64',
            'name': 'executeOperatorFeePeriod',
            'type': 'uint64',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'internalType': 'bytes',
            'name': 'publicKey',
            'type': 'bytes',
          },
        ],
        'name': 'getValidator',
        'outputs': [
          {
            'internalType': 'bool',
            'name': 'active',
            'type': 'bool',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getValidatorsPerOperatorLimit',
        'outputs': [
          {
            'internalType': 'uint32',
            'name': '',
            'type': 'uint32',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'getVersion',
        'outputs': [
          {
            'internalType': 'string',
            'name': 'version',
            'type': 'string',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'contract ISSVViews',
            'name': 'ssvNetwork_',
            'type': 'address',
          },
        ],
        'name': 'initialize',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'isLiquidatable',
        'outputs': [
          {
            'internalType': 'bool',
            'name': '',
            'type': 'bool',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'owner',
            'type': 'address',
          },
          {
            'internalType': 'uint64[]',
            'name': 'operatorIds',
            'type': 'uint64[]',
          },
          {
            'components': [
              {
                'internalType': 'uint32',
                'name': 'validatorCount',
                'type': 'uint32',
              },
              {
                'internalType': 'uint64',
                'name': 'networkFeeIndex',
                'type': 'uint64',
              },
              {
                'internalType': 'uint64',
                'name': 'index',
                'type': 'uint64',
              },
              {
                'internalType': 'bool',
                'name': 'active',
                'type': 'bool',
              },
              {
                'internalType': 'uint256',
                'name': 'balance',
                'type': 'uint256',
              },
            ],
            'internalType': 'struct ISSVNetworkCore.Cluster',
            'name': 'cluster',
            'type': 'tuple',
          },
        ],
        'name': 'isLiquidated',
        'outputs': [
          {
            'internalType': 'bool',
            'name': '',
            'type': 'bool',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'owner',
        'outputs': [
          {
            'internalType': 'address',
            'name': '',
            'type': 'address',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'pendingOwner',
        'outputs': [
          {
            'internalType': 'address',
            'name': '',
            'type': 'address',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'proxiableUUID',
        'outputs': [
          {
            'internalType': 'bytes32',
            'name': '',
            'type': 'bytes32',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [],
        'name': 'ssvNetwork',
        'outputs': [
          {
            'internalType': 'contract ISSVViews',
            'name': '',
            'type': 'address',
          },
        ],
        'stateMutability': 'view',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'newOwner',
            'type': 'address',
          },
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'newImplementation',
            'type': 'address',
          },
        ],
        'name': 'upgradeTo',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function',
      },
      {
        'inputs': [
          {
            'internalType': 'address',
            'name': 'newImplementation',
            'type': 'address',
          },
          {
            'internalType': 'bytes',
            'name': 'data',
            'type': 'bytes',
          },
        ],
        'name': 'upgradeToAndCall',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function',
      },
    ],
  },
};
