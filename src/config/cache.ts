import "@lib/VariableManager";

export default {
    milliseconds: parseInt(process.env.CACHE_EXPIRETIMEINSECONDS),
    highMilliseconds: parseInt(process.env.CACHE_EXPIREHIGHTIMEINSECONDS),    
    connectionString: process.env.CACHE_CONNECTIONSTRING,
    expireTimeInSeconds: process.env.CACHE_EXPIRETIMEINSECONDS,
    hashKey: process.env.CACHE_HASHKEY,
    mailKey: process.env.CACHE_MAILKEY
}