export const ENS_REGEX = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/g
export const ADDRESS_REGEX = /(0x)?[a-fA-F0-9]{40}/g


export const extractEnsDomains = content => content.match(ENS_REGEX)
export const extractAddresses = content => content.match(ADDRESS_REGEX)
