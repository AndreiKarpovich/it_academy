const axios = require('axios');
const { Validator } = require('jsonschema');
const bookingComScheme = require('../data/booking.com.api-v-1.json')


const validator = new Validator();


describe(`API  tests`, function() {
    test(`should status code equal 200`, async () => {
        const response = await axios( {
            method: 'get',
            url: 'https://booking-com.p.rapidapi.com/v1/metadata/exchange-rates',
            params: {
                'currency': 'AED', 'locale': 'en-gb'
            },
            headers: {
                'X-RapidAPI-Key': '2c6bc9206fmshfb822495e9b307cp16dc8ejsn2bdb58912823',
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
            }
        })
        await expect(response.status).toEqual(200)
    })

    test(`should be apropriate json schema`, async () => {
        const response = await axios( {
            method: 'get',
            url: 'https://booking-com.p.rapidapi.com/v1/metadata/exchange-rates',
            params: {
                'currency': 'AED', 'locale': 'en-gb'
            },
            headers: {
                'X-RapidAPI-Key': '2c6bc9206fmshfb822495e9b307cp16dc8ejsn2bdb58912823',
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
            }
        })
        let validationResult = await validator.validate(response.data, bookingComScheme);
        await expect(validationResult.errors.length).toEqual(0);
        
        
    })

})