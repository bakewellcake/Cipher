# Cipher

Encrypt/decrypt data with a key using XOR bitwise operator.

##### Accepted arguments

| Value | Description |
| :---- | :---------- |
| `-e` | Encrypt message |
| `-d` | Decrypt message |
| `-k` | Key |

##### Example

```sh
$ node index.js -e "Hello World!" -k "my private key"
$ bibSbJbJbIaTbAbIcabJbRaU

$ node index.js -d "bibSbJbJbIaTbAbIcabJbRaU" -k "my private key"
$ Hello World!
```