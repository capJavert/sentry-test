#! /usr/bin/node

const Sentry = require('@sentry/node')

if (!process) {
    return
}

const dsn = process.argv[2]

if (!dsn) {
    console.warn('You must provide DSN with -d option!')
}

try {
    Sentry.init({
        dsn
    })

    Sentry.captureMessage('Hi, your sentry messages are working!')
    Sentry.captureException(new Error('Hi, your sentry errors are working!'))
} catch (error) {
    console.error(error.message)
}
