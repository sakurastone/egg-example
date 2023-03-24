/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1679396734959_8412";

    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true,
        },
        domainWhiteList: ["*"],
    };

    config.view = {
        mapping: {
            ".html": "ejs",
        },
    };
    config.mysql = {
        client: {
            host: "localhost",
            port: "3306",
            user: "root",
            password: "Sakurastone970202z.L",
            database: "test",
        },
        app: true,
        agent: false,
    };

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};
