const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
console.log(withBundleAnalyzer());
module.exports = {
  ...withBundleAnalyzer(),
  publicRuntimeConfig: {
    RATE_API_KEY: '89c0820d64e43f1614fb102c92c8472f',
    RATE_API_URL: 'http://apilayer.net/api/live'
  }
}
