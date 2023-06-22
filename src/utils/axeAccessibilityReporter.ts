export async function axeAccessabilityReporter() {
  if (process.env.NODE_ENV === 'development') {
    const axe = require('@axe-core/react')
    const React = require('react')
    const ReactDom = require('react-dom')
    axe(React, ReactDom, 1000)
  }
}
