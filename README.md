```typescript

const mnemonics = '<your mnemonics here>';
const suiKit = new SuiKit({ mnemonics });

// DerivePathPrams for path m/44'/784'/2'/0'/8'
const derivePathParams = { accountIndex: 2, change: false, addressIndex: 8 };

const accountAddr = suiKit.getAddress(derivePathParams);
const balance = await suiKit.getBalance('0x2::sui::SUI', derivePathParams);

// make move call with account at path m/44'/784'/2'/0'/8'
const callResult = await suiKit.moveCall({
  target: '<pkgId>::<module>::<method>',
  arguments: ['arg1', 'arg2'],
  derivePathParams
});

```
