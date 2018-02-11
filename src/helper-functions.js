const utils = {
    shortenDate: (date) => {
        let shortDate = '';
        for (let i = 0; i < date.length; i++) {
            shortDate += date[i];
            if (shortDate.length === 4) {
                return shortDate;
            }
        }
    },
}

module.exports = utils;
