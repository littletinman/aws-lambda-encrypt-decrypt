# aws-lambda-encrypt-decrypt
A simple use case for lambda 

## Encrypt
Simply takes in two params: the encryption key and the text to be encrypted

### Deploy
run *npm install* in the *encrypt* directory and then zip up the contents (including *node_modules*) and upload to Lambda function. 

### Encrypt Test

input 

```
{
  "body": {
     "key": "a simple over 16 character test key",
     "message": "this is a test message"
  }
}
```

output

```
{
  "statusCode": 200,
  "body": *encrypted message*
}
```

## Decrypt
Simple takes in two params: the decryption key and the text to be decrypted

### Deploy
run *npm install* in the *decrypt* directory and then zip up the contents (including *node_modules*) and upload to Lambda function. 

### Decrypt Test

input 

```
{
  "body": {
     "key": "a simple over 16 character test key",
     "message": *encrypted message from above*
  }
}
```

output

```
{
  "statusCode": 200,
  "body": "this is a test message"
}
```