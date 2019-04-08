#! /usr/bin/node

const Sentry = require('@sentry/node')

if (!process) {
    return
}

const arg = process.argv[2]
const dsn = process.argv[3]

if (arg != '-d' || !dsn) {
    console.warn('You must provide DSN with -d option!')
    return
}

try {
    console.log('Init sentry...')
    Sentry.init({
        dsn
    })

    console.log('Sending events...')
    Sentry.captureMessage('Hi, your sentry messages are working!')
    Sentry.captureException(new Error('Hi, your sentry errors are working!'))

    console.log('Test done, check your sentry dashboard!')
} catch (error) {
    console.error(error.message)
}
