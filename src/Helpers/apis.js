import axios from "axios"

//axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL
axios.defaults.baseURL = 'https://hgfapi.xyz'
//axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://hgfapi.xyz'

//MASS REQUEST
export async function register(formData) {
    try {
        const res = await axios.post('/membership/register/', formData )
        return res
    } catch (error) {
        const res = error.response || 'Unable to register new user'
        return res?.data
    }
}

//MASS REQUEST
export async function login(formData) {
    try {
        const res = await axios.post('/membership/login/', formData )
        return res
    } catch (error) {
        const res = error.response || 'Unable to login user'
        return res?.data
    }
}

//NEWSLETTER SUBSCRIBPTION
export async function newsletterSubscription(formData) {
    try {
        const res = await axios.post('/about_us/newsletter/', formData )
        return res
    } catch (error) {
        const res = error.response || 'Unable to subscribe user'
        return res?.data
    }
}


//SUBMIT PRAYER REQUEST
export async function prayerRequest(formData) {
    try {
        const res = await axios.post('/consultation/prayer_request/', formData )
        return res
    } catch (error) {
        const res = error.response || 'Unable to submit prayer request'
        return res?.data
    }
}

//MASS REQUEST
export async function massRequest(formData) {
    try {
        const res = await axios.post('/consultation/mass-request/', formData )
        return res
    } catch (error) {
        const res = error.response || 'Unable to submit mass request'
        return res?.data
    }
}

//SUBMIT HOLYGHOST CONVENTION FORM
export async function conventionRequest(formData) {
    try {
        const res = await axios.post('/resources/hgfpmi-convention', formData )
        console.log('CONVENTIION REs', res)
        return res
    } catch (error) {
        console.log('CONVENTION ERROR', error)
        const res = error.response || 'Unable to submit convention request'
        return res?.data
    }
}

//MAKE DONATION

export async function donation(formData) {

    try {

        const res = await axios.post('/donate/create-payment-intent', 

            formData,

            // Include the token in the headers if available

            {

                'Content-Type': 'application/json',

                Authorization: `Bearer ${token}`,

                'X-Refresh-Token': refreshToken

            },

        )

        return res

    } catch (error) {

        console.log('DONATION ERROR', error)

        const res = error.response || 'Unable to login user'

        return res?.data

    }

}

export async function checkout(formData) {


    try {

        const res = await axios.post('/store/checkout/', 

            formData,

            // Include the token in the headers if available

            {

                'Content-Type': 'application/json',

                Authorization: `Bearer ${token}`,

                'X-Refresh-Token': refreshToken

            },

        )

        return res

    } catch (error) {

        console.log('CHECKOUT ERROR', error)

        const res = error.response || 'Unable to process checkout'

        return res?.data

    }

}

//HANDLE FEEDBACK API
export async function feedback(formData) {
    try {
        const res = await axios.post('/feedback/', 
            formData,
            // Include the token in the headers if available
            {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                'X-Refresh-Token': refreshToken
            },
        )
        return res
    } catch (error) {
        console.log('ERROR SUBMITTING FEED BACK', error)
        const res = error.response || 'Unable to submit feedback'
        return res?.data
    }
}