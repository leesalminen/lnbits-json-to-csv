This is a node.js script meant to run on Google Cloud Functions. 

It will fetch all payments for a LNBits wallet, convert it to csv, and output that.

You can either hardcode the LNBits domain/wallet you want to fetch through environment variables `LNBITS_DOMAIN` and `LNBITS_ADMIN_KEY`.

If these environment variables are not set, then you can pass them in at runtime as URL query parameters. Example:

```
curl -X "POST" "https://REPLACE_ME.cloudfunctions.net/lnbits-json-to-csv?lnbits_domain=https%3A%2F%2Flegend.lnbits.com&admin_key=69430ae9e6463ca6e6586612365e0d42"
```
