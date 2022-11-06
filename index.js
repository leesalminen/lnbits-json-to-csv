const axios = require('axios')
const converter = require('json-2-csv')

const LNBITS_DOMAIN = process.env.LNBITS_DOMAIN
const LNBITS_ADMIN_KEY = process.env.LNBITS_ADMIN_KEY

exports.convertCsv = async (req, res) => {
  let url = LNBITS_DOMAIN
  let key = LNBITS_ADMIN_KEY

  if(!LNBITS_DOMAIN && req.query.lnbits_domain) {
    url = req.query.lnbits_domain
  }

  if(!LNBITS_ADMIN_KEY && req.query.admin_key) {
    key = req.query.admin_key
  }

  const response = await axios({
    url: `${url}/api/v1/payments`,
    method: "GET",
    headers: {
      "X-Api-Key": key,
    }
  })

  const csv = await converter.json2csvAsync(response.data)

  res.attachment('payments.csv').send(csv)
}