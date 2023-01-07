require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note mad protect guess entire slot general'; 
let testAccounts = [
"0x387ae8a49992bebc5c41e607cddbf49d99d77a4d069bd1f3d2e510630bea02a9",
"0xb5c4b1d115eaa62bf3865596340acf1e099fdad16e3755f73af45e33faf9ff86",
"0xf0c556b26bc5b5dc1a0a161bedde96cf4ce0234890b2e5037d352ab091960502",
"0xa0c45550ca0d578afe222c12d9378da38ba02e1050f85d40ba70ef56d76d4536",
"0xb242f20f62100e278b36e9dc3deb17f79e226a6083cbe207ddea6fc9addbbb39",
"0x7623c1322dd01b49e6f2f0e6d82a45f9a3808e13fb3b85a762e03ad045bcfc8d",
"0x637568b24bee05f6da4ec25e0de0e57b0c137aac79179985ff77418a3d30050e",
"0xa4a2faf96abe748497eb4adedc13fdd9d804bbf9b2b5b7e6128dfeb30446ee9c",
"0x20b3eee84ff9cffacfa593838ad189a00501363fcaa96c05ae818f3707bfabf7",
"0x1626da2bdda3c07b695c84c8baf55ae1f9c81d24ab1329853484c70e999c905e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

