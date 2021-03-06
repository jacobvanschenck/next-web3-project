export const WEB3_CONNECTION_LOADED = 'WEB3_CONNECTION_LOADED'
export function web3loaded(connection) {
    return {
        type: WEB3_CONNECTION_LOADED,
        connection: connection,
    }
}

export const WEB3_ACCOUNT_LOADED = 'WEB3_ACCOUNT_LOADED'
export function web3AccountLoaded(account) {
    return {
        type: WEB3_ACCOUNT_LOADED,
        account: account,
    }
}

export const WEB3_CONTRACTS_LOADED = 'WEB3_CONTRACTS_LOADED'
export function web3ContractsLoaded(contracts) {
    return {
        type: WEB3_CONTRACTS_LOADED,
        contracts: contracts,
    }
}
