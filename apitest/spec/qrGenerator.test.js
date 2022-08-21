const axios = require('axios');
const { Validator } = require('jsonschema');
const qrGeneratorScheme = require('../data/qr-generator.api-v-1.json')


const validator = new Validator();


describe(`API  tests`, function() {
    test(`should status code equal 200`, async () => {
        const response = await axios( {
            method: 'POST',
            url: 'https://qr-code-generator-for-saudi-zatca-invoice1.p.rapidapi.com/generateQR',
            headers: {
              'content-type': 'application/json',
              'Content-Type': 'application/json',
              'X-RapidAPI-Key': '2c6bc9206fmshfb822495e9b307cp16dc8ejsn2bdb58912823',
              'X-RapidAPI-Host': 'qr-code-generator-for-saudi-zatca-invoice1.p.rapidapi.com'
            }
        })
        await expect(response.status).toEqual(200)
    })

    test(`should be apropriate json schema`, async () => {
        const response = await axios( {
            method: 'POST',
            url: 'https://qr-code-generator-for-saudi-zatca-invoice1.p.rapidapi.com/generateQR',
            headers: {
              'content-type': 'application/json',
              'Content-Type': 'application/json',
              'X-RapidAPI-Key': '2c6bc9206fmshfb822495e9b307cp16dc8ejsn2bdb58912823',
              'X-RapidAPI-Host': 'qr-code-generator-for-saudi-zatca-invoice1.p.rapidapi.com'
            },
        })
        let validationResult = await validator.validate(response.data, qrGeneratorScheme);
        await expect(validationResult.errors.length).toEqual(0);
        
        
    })

})