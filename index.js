'use strict';
module.exports = (self, options) => {

    const vuex = [
        'dispatch',
        'commit'
    ];

    for (let vuex_method of vuex) {

        if(typeof options === 'object') {
            if(options.hasOwnProperty('modules')) {
                for (let module of options.modules) {
                    if(module.hasOwnProperty(vuex_method)) {
                        for (let [key, dynamic_method] of Object.entries(module[vuex_method])) {
                            if(module.hasOwnProperty('name')) {
                                self[dynamic_method] = (data = null) => options.state[vuex_method](module.name + '/' + dynamic_method, data)
                            } else {
                                self[dynamic_method] = (data = null) => options.state[vuex_method](dynamic_method, data)
                            }
                        }
                    }
                }
            } else {
                if(options.hasOwnProperty(vuex_method)) {
                    for (let [key, dynamic_method] of Object.entries(options[vuex_method])) {
                        if(options.hasOwnProperty('name')) {
                            self[dynamic_method] = (data = null) => options.state[vuex_method](options.name + '/' + dynamic_method, data)
                        } else {
                            self[dynamic_method] = (data = null) => options.state[vuex_method](dynamic_method, data)
                        }
                    }
                }
            }

        }

        self[vuex_method] = (method_name, data = null) => options.state[vuex_method](method_name, data);

    }

    return self;
};