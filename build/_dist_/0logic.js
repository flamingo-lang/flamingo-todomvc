export const logic=[`module todomvc
        sorts`,"todos :: 1..5",`filters :: { all, active, completed }
            new_todo :: actions
                attributes
                    new_text : strings`,`todo_action :: actions
                attributes
                target : todos`,`toggle_todo :: todo_action
            destroy_todo :: todo_action
            edit_todo :: todo_action
                attributes
                    edit_text : strings`,`set_all :: actions
            attributes
                set_completed: booleans
                clear_completed :: actions
                set_active_filter :: actions
                    attributes
                        filter : filters`,`statics
            complement : booleans -> booleans
        fluents
            basic`,"next_todo : todos","text : todos -> strings",`active : todos -> booleans

                completed : todos -> booleans

                active_filter : filters
            defined`,`visible : todos -> booleans
        axioms`,`complement(true) = false.
            complement(false) = true.`,`occurs(A) causes
                text(Todo) = Text,
                completed(Todo) = false,
                active(Todo),
                next_todo = Todo + 1
            if
                instance(A, new_todo),
                new_text(A) = Text,
                next_todo = Todo.`,`occurs(A) causes completed(Todo) = Comp if
                instance(A, toggle_todo),
                target(A) = Todo,
                completed(Todo) = Completed,
                complement(Completed) = Comp.`,`occurs(A) causes text(Todo) = Text if
                instance(A, edit_todo),
                target(A) = Todo,
                edit_text(A) = Text.`,`occurs(A) causes -active(Todo) if
                instance(A, destroy_todo),
                target(A) = Todo.`,`occurs(A) causes completed(Todo) = Completed if
                instance(A, set_all),
                set_completed(A) = Completed.`,`occurs(A) causes -active(Todo) if
                instance(A, clear_completed),
                completed(Todo).`,`occurs(A) causes active_filter = F if
                instance(A, set_active_filter),
                filter(A) = F.`,"visible(Todo) if active(Todo), active_filter = all.","visible(Todo) if active(Todo), completed(Todo), active_filter = completed.","visible(Todo) if active(Todo), -completed(Todo), active_filter = active.",`initially
            next_todo = 1.
            active_filter = all.`].join(`
`);
