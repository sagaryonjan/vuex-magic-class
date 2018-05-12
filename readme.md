#Import vuex store

####import state from 'admin/store';

```---
import vuex from 'vuex-magic-class';
```

```
vuex(this, 
Object.assign({ state }, {
    name: 'note',
    dispatch: [
        'createNote',
        'updateNote',
    ],
}));
```

#Example
```
import vuex from 'vuex-magic-class';
import state from 'admin/store';

export default class Note {

    constructor(instance) {
        
        vuex(this, {
            name: 'note', //namespace
            state,
            dispatch: [
                'createNote',
                'updateNote'
            ],
            commit: [
                'updateState'
            ],
        });
    }

    create() {
        this.createNote(data);
    }

    update() {
        this.dispatch('note/updateNote', data);
        this.commit('note/updateState', data);
    }
}

```