// This is for getting all commands
module.exports = () => {
    let res = [];
    require(require('path').normalize(require('../config.json').botDir+'\\data\\commands.json')).forEach((item) => {
        if(item === null) return;
        if(Array.isArray(item.permissions)) {
            let perms = [];
            item.permissions.forEach((item) => {
                perms.push(item);
            });
            res.push({name:item.name,perms:perms});
        } else {
            res.push({name:item.name,perms:item.permissions});
        }
    });
    return res;
}