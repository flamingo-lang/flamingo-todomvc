export const logic = [
// The ALM is interspersed with comments which are
// excluded to make them more visible (syntax highlighting
// coming soon!).
`
module todo
sorts`,
    // Unlike apples and oranges, todo items are _virtual_ - users
    // can make them out of nothing. To represent this, we'll use integers.
    // (With specialization, our type system will prevent us from using
    // other integers in place of todos).
    // Note that we don't "creating" new todo's - like the integers,
    // they already exist (sort of - the semantics here are fuzzy,
    // and clarifying best practices for Flamingo in situations like
    // this is a big goal on the roadmap).
    `
    todos :: integers
    todo_state :: { complete, incomplete }
    `,
    // There are three filter states: All, Active, and Completed.
    `
    filters :: { all, active, completed }
    `,
    // The new todo action will imbue a todo with text.
    // Again, we aren't creating them - more like "activating" todos
    // that already "exist" (note the scare quotes).
    `
    new_todo :: actions
        attributes
            text : string
    `,
    // Several of our actions will target some particular
    // todo, so we can create an action that captures this
    // notion and extend from that.
    // Woot! Modularity!
    `
    todo_action :: actions
        attributes
            target : todos
    toggle_todo :: todo_action
    destroy_todo :: todo_action
    edit_todo :: todo_action
        attributes
            text : string
    `,
    // There's a button that sets all the todos to completed
    // if any are incomplete and sets them all to incomplete
    // otherwise. This action captures that. It takes a state
    // (complete or incomplete), and makes all the todos that
    // state. From a domain-modeling perspective, this is a
    // little wrong: the _action_ is the same every time - the
    // user clicks a paritcular button. It's the _effect_ that
    // changes, and that should usually be captured in the logic
    // as axioms, where you have the benefit of an expressive
    // language and automatic verification. However, expressing
    // the logic in the requirement (https://github.com/tastejs/todomvc/blob/master/app-spec.md#mark-all-as-complete)
    // is tricky to express using the constructs we've learned so
    // far - it requires adding a bunch of extra defined fluents.
    // Soon, we'll add a construct called _aggregates_ that handle
    // this case in a natural, compact way, but for now, we'll
    // just implement the logic in the calling Javascript code.
    `
    set_all :: actions
        attributes
            state: todo_state
    clear_completed :: actions
    set_active_filter :: actions
        attributes
            filter : filters
statics
`,
    // We'll need a funciton like "not" or the "!" operator 
    // in Javascript. Since the outputs of this
    // function never vary, we can define it as a static.
    `
    complement : booleans -> booleans
fluents
    basic 
    `,
        // Since we're using integers to represent todos,
        // we need to know what the next todo is when
        // activating new ones. (I.e, if todos 1, 2, and 3
        // were created already, we want next_todo to equal 4).
        `
        next_todo : todos
        `,
        
        // Since we can't create or destroy integers, instead
        // we'll mark them with a special function to indicate
        // they've been destroyed.
        `
        destroyed : todos -> booleans
        `,
        
        // This function gives the actual text of a todo.
        // Remember, it changes as users edit them.
        `
        text : todos -> strings
        `,

        // Active is in the inverse of destroyed, and
        // indicates which todos exist in the list.
        `
        active : todos -> booleans

        completed : todos -> booleans

        active_filter : filters
    defined
        `,
        // Depending on the active filter, some todos
        // can be hidden. Because this is a derived
        // property, we use a defined fluent.
        `
        visible : todos -> booleans
axioms
`,
    // Teaching Flamingo complement.
    `
    complement(true) = false.
    complement(false) = true.
    `,
    
    // Natural Language:
    // When the new_todo action occurs,
    // given the next todo is Todo,
    // and the input text is Text,
    // then:
    // - that todo's text becomes Text
    // - the new todo is incomplete
    // - the next todo is incremented.
    `
    occurs(A) causes
        text(Todo) = Text,
        completed(Todo) = false,
        next_todo = Todo + 1
    if
        instance(A, new_todo),
        text(A) = Text,
        next_todo = Todo.
    `,
    // Natural language:
    // When the toggle_all action occurs,
    // and the selected state is "complete"
    // then all todos should become completed.
    `
    occurs(A) causes completed(Todo) if
        instance(A, toggle_all),
        state(A) = complete.
    `,

    // Natural language:
    // When the toggle_all action occurs,
    // and the selected state is "incomplete"
    // then all todos should become completed.
    // Note: the astute reader may have noticed
    // the lack of disjunction (OR operations,
    // or the ELSE in an IF-THEN-ELSE expression)
    // in ALM. The workaround is to just create
    // multiple rules like we've done for toggle_all.
    `
    occurs(A) causes -completed(Todo) if
        instance(A, toggle_all),
        state(A) = incomplete.
    `,
    // Natural language:
    // Toggling a todo causes its completed
    // state to flip.
    `
    occurs(A) causes completed(Todo) = Comp if
        instance(A, toggle_todo),
        target(A) = Todo,
        completed(Todo) = Completed,
        complement(Completed) = Comp.
    `,
    // Natural language:
    // Editing a todo causes it to take on the given text.
    `
    occurs(A) causes text(Todo) = Text if
        instance(A, edit_todo),
        target(A) = Todo,
        edit(A) = Text.
    `,
    // Natural language
    // When the clear_completed action occurs,
    // all completed todos are destroyed.
    `
    occurs(A) causes destroyed(Todo) if
        instance(A, clear_completed),
        // Notice that Todo is only used
        // once in the body. That means
        // it will bind to _all_ possible
        // values in that "slot", which, in 
        // this case, means all the completed
        // todos.
        completed(Todo).
    `,
    // Natural language:
    // When the set_active_filter action occurs
    // with a given filter F, the active filter
    // becomes F.
    `
    occurs(A) causes active_filter = F if
        instance(A, set_active_filter),
        filter(A) = F.
    `,
    // Just like in clear_completed, Todo here
    // will bind to all todos.
    `
    visible(Todo) if active_filter = all.
    `,
    // Here, since we bind Todo with "completed(Todo)", it's
    // narrowed to just the completed todos.
    `
    visible(Todo) if completed(Todo), active_filter = completed.
    `,
    // And vice versa here.
    `
    visible(Todo) if -completed(Todo), active_filter = active.
    `,

// This is a new section that didn't appear in the fruit_and_basket
// system. In practical systems, it's often useful to give fluents
// an initial "starting value". We do so here by writing them as facts.
`
initially
    next_todo = 1.
    active_filter = all.
`].join("\n");