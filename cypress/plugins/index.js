/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
const istanbul = require('istanbul-lib-coverage')
const { join } = require('path')
const { existsSync, mkdirSync, writeFileSync } = require('fs')
const execa = require('execa')

module.exports = (on, config) => {
  let coverageMap = istanbul.createCoverageMap({})
  const outputFolder = '.nyc_output'
  const nycFilename = join(outputFolder, 'out.json')

  if (!existsSync(outputFolder)) {
    mkdirSync(outputFolder)
    console.log('created folder %s for output coverage', outputFolder)
  }

  on('task', {
    /**
     * Clears accumulated code coverage information
     */
    resetCoverage () {
      coverageMap = istanbul.createCoverageMap({})
      console.log('reset code coverage')
      return null
    },

    /**
     * Combines coverage information from single test
     * with previously collected coverage.
     */
    combineCoverage (coverage) {
      coverageMap.merge(coverage)
      return null
    },

    /**
     * Saves coverage information as a JSON file and calls
     * NPM script to generate HTML report
     */
    coverageReport () {
      writeFileSync(nycFilename, JSON.stringify(coverageMap, null, 2))
      console.log('wrote coverage file %s', nycFilename)
      console.log('saving coverage report')
      return execa('npm', ['run', 'report:coverage'], { stdio: 'inherit' })
    }
  })
}