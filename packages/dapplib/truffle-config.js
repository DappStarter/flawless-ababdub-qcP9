require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remain clump gesture basket bubble service'; 
let testAccounts = [
"0x43b075f0f895fba9d64eab56aa0426a4d10cf432e6bf7bd0bc861440dd53a712",
"0xfce7a480f73d1ef4ad3e6ebae71a166a1889ea7b5aaa2d7b035cd1eee157524f",
"0x5a9e58b6cd4bb6bc72bb9a5e09e785c9647dc82a2cffdf11b9518508289d04b7",
"0x8a077d67a53fbccf7703b822db387d017ea4310ccdf096b72986ac2e77a4620f",
"0xe2f97581cf1a13f120e094a64ebe6ee13de9d8b26b161cd1df66dd5635e05950",
"0x8ac003bfa55d6b75b8020a1247398eb7dc9a0330da80c097b989bd176e3da4a3",
"0x81ec1ad1a5352b07469e19f32b5d2f4460bf8f97944948021d4f5b75b214706d",
"0x1a258a5dbaf9997bdd3e22a00025f3110a1ced13de148ed7b55a1a934eb998f8",
"0x96024950a692461c1292f5544f2a8277464496e5ddb920931c182c63effa022d",
"0x518c9e15b465e7b20e92a38c35cf64bae24e7405e834c29372eb9a047879e5a5"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

