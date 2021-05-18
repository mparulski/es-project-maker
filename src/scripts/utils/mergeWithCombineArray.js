const deepmerge = require('deepmerge')

function combineMerge(target, source, options) {
  const destination = target.slice()

  source.forEach((item, index) => {
    if (typeof destination[index] === 'undefined') {
      destination[index] = options.cloneUnlessOtherwiseSpecified(item, options)
    } else if (options.isMergeableObject(item)) {
      destination[index] = merge(target[index], item, options)
    } else if (target.indexOf(item) === -1) {
      destination.push(item)
    }
  })
  return destination
}

function mergeWithCombineArray(x, y) {
  return deepmerge(x, y, {arrayMerge: combineMerge})
}

module.exports = mergeWithCombineArray
