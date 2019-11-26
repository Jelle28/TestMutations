console.log(require.resolve('../StrykerStatistics/stryker/packages/javascript-mutator'))
module.exports = function(config) {
    config.set({
        plugins: [
            require.resolve('../StrykerStatistics/stryker/packages/javascript-mutator')
        ],
    })
}