#Import vuex store

####import state from 'admin/store';

```---
import vuex from 'vuex-magic-class';
```

```
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



# Initiate Multiple module Function
export default class Note {

    constructor(instance) {
        
        vuex(this, {
           state : vuexStore
           modules : [
               {
                   name: 'website',
                   dispatch: [
                       'createNote'
                   ]
               },
               {
                   name: 'loading',
                   dispatch: [
                       'loading',
                       'loadingComplete',
                   ],
               }
           ]
        });
    }

    create(data) {
        this.loading();
        this.createNote(data);
        this.loadingComplete();
    }

    update(data) {
        this.dispatch('note/updateNote', data);
        this.commit('note/updateState', data);
    }
}

# Without namespace Just remove name if you dont need namespace
export default class Note {

    constructor(instance) {
        
        vuex(this, {
           state : vuexStore
           modules : [
               {
                  dispatch: [
                       'createNote',
                   ],
                   commit: [
                       'RESET_FORM'
                   ]
               }
           ]
        });
    }

    create(data) {
        this.createNote(data);
    }

    update(data) {
        this.dispatch('note/updateNote', data);
        this.commit('note/updateState', data);
    }
}

```