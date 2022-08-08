'use strict';

const _ = require('lodash');

const { name, version } = require('./package');

module.exports = {
  name,
  version,

  locals(options) {
    let name = _.kebabCase(options.entity.name);

    return {
      projectName: name,
      vitestBlueprintVersion: version,
    };
  },

  // This doesn't work.
  // addPackagesToProject is for a host project
  //
  // afterInstall() {
  //   this.addPackagesToProject([
  //     {
  //       name: 'vitest',
  //       target: 'latest',
  //     },
  //     {
  //       name: 'typescript',
  //       target: 'latest',

  //     }
  //   ])
  // }


};
