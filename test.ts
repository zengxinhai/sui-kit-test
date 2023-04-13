import { SuiKit, SuiTxBlock } from '@scallop-dao/sui-kit'
import { Ed25519Keypair, RawSigner } from '@mysten/sui.js'

;(async () => {
  const transferAllFromSecretKey = async (secretKey: string, recipient: string) => {
    const suiKit = new SuiKit({ secretKey, networkType: 'testnet' });
    const balance = (await suiKit.getBalance()).totalBalance;
    const gasBudget = 10 ** 9;
    const transferValue = balance - gasBudget;
    const currentAddr = suiKit.currentAddress();
    console.log(`Transfering ${transferValue} SUI from ${currentAddr} to ${recipient}...`);
    const res = await suiKit.transferSui(recipient, transferValue);
    console.log(`Transfered ${transferValue} SUI from ${currentAddr} to ${recipient}.`);
    return res;
  }
  const secretKey1 = '0x282da22657781a190bd0e52d52ee58f5f742514d6dc8018cd2bc37c179e1c001';
  const secretKey2 = '0x150ad25771be385dd049b1cbafeab67d0b8487bc7862badbc8317cccdcc840af';
  
  const recipient = '0x603b3818bc573f7a56d248aac38baa19bad9cd29a44a58711fa7fa3cddf0bd0a';
  await transferAllFromSecretKey(secretKey1, recipient);
})();
