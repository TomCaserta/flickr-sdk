/**
 * GET /services/rest?text=puppies&oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=DkKIZBoH0t9S0BeatSWVXGrx6A0=&method=flickr.photos.search
 *
 * host: fts.flickr.vip.bf1.yahoo.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.8.3
 * cookie:
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 22 Apr 2016 19:05:31 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("content-length", "3050");
  res.setHeader("p3p", "policyref=\"https://policies.yahoo.com/w3c/p3p.xml\", CP=\"CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV\"");
  res.setHeader("x-account-nsid", "95431477@N05");
  res.setHeader("cache-control", "private");
  res.setHeader("x-served-by", "www-bm021.flickr.bf1.yahoo.com");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("age", "1");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 fts113.flickr.bf1.yahoo.com (ApacheTrafficServer [cMsSf ])");
  res.setHeader("server", "ATS");

  res.write(new Buffer("H4sIAAAAAAAAA91cWXMbxxH+KyPyIUmVpJr70JMtyVWxy45VpvIUpVQ9F7kWuIvsAqIRl/97ekHKxo4W9qRAgExeQGAXx9fT19c9Pfz5bHnVrbrh7MXPZ0u4TGcv2NPtE7zCueb4IvV3Nyh9erbqVrA4e3GG95jRZ09vP3724h8/nzVxvK4FNcZIoSje7G7a1ONVpa2hyuov/kYNXh5S6NMKrwNzPjrmud9e7T9u382kFfg6Q3+NIPA3m9UCf//sekPadEOW6+Vyg/ebYbn2iyZsITdD7pvUIgS6fQHXzWKzfTFAHsH/8vRXhMpSJ4UTagch41Iz55hAiHYXYk5eCOt4DlOI0s1BfH3x6r2U0jz/cXl5MEQuTRVEBSIIA5npCUSl1e9AFPcCkbE6iNFTA+CoyxOIhvL9EIW8F4iU6iqIQWnHwIrEJxC1YPshcnsfEIUVtgqizEo5jo9xClH9HsR7sUWhLa2CaJzLVsTMzdQWjf0diOpAiMoZI6QySuxA5IYxgdjLmJN1AoSXzNShFddzCL+B5jqRtyktmvagVZTWaMYk47urKKSxTlmGGOVE0T7y8c1GTjG6WYzv/1tcdLJ0iqKXSLmDy3FFJRMOYfFJuNbOBkHTNvbterGcg/UG43STBpIhYDY5SLtbiLQGYlbBypBNtEW4ng00b/7+5s3XX10c6B2UOzuNMYJZhhnSlHr1PgkKzMA0xkg9i+5VWiTfwwotj3zRQ7hKC5/6CO2fBnLT9R8ItG2DXzFAvyGrq0Suu2FFYLnsu2XfwCqRG9iQZTcMjV8k8owA8es2XJEub5MoKufJkyfkPHaXQ5ebdljBZQ/X2wvk/NA0i2qTSlNhdtUmNWrScfY5EVASI68U0/yAqzu3MAfpSwlNtRZ6B5XmevQAW6JCapJSMgzS1A3FrBtepP4yQbsiF7AekDE9u2i79epgrFLRGqwsm8whQIapac3nhnvHutW2xEwkK7CGRDMFoHEagg2bpX1HWVflMCXVrKtOUYlEfZjagOazLnsUrNJh8t3F6jTTljmFWOkuVkzKippIIRRYZ73orwmDRtN+GEizwogCBANMGpJfowg9+n+z8uvFYvjt2SRG3F3cRgly7hOsV01eL8j5ZYef79b4uUX3Me0Gk9lI026/ZnO98X1KET/UfEjXm2VakfPhqru5Tptu3eOPrcZU8ulXIX7swhjgzrflR5cx+kWMdZ/u3/7y7QfH4gVv9N06bl/1CdVzvuwOVYrFaFWjFGlddtEwO81ISJ/mlPJDB5G87Zvl/78ChtX2m9fL4bdXBynFOM1VUZCMeUWJkQSKSSK2kkOOoKZMRurZyP4SVtfQMr7pD+ExI0AhkSzUAFQ0AiRmsip49DyPYVRQrtRhBFVrTBd6SlA5o8hSaUnzuUDC7DyI6fohP5yNimNE/KbrY/PkyYEQ1ZgOJxCRF0rl6FiJqF2IVjBBPdYt04SotJmDyCnTXyJrWiDODXl7BZvUY1B8u74kP5HXL7/9jlys23ZDFugI6RAzHRMl5dRMEuVeIZTVkcWkgU2FoLNZ/dRCaFslRAwjMMCMX1RcsxHwZEKM/ogPekrd9wkhck6cKlBTIterms of the MIT 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", "base64"));
  res.end();
};
