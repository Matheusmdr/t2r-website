import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ClientController::index
* @see app/Http/Controllers/Admin/ClientController.php:13
* @route '/admin/clients'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/clients',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ClientController::index
* @see app/Http/Controllers/Admin/ClientController.php:13
* @route '/admin/clients'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ClientController::index
* @see app/Http/Controllers/Admin/ClientController.php:13
* @route '/admin/clients'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::index
* @see app/Http/Controllers/Admin/ClientController.php:13
* @route '/admin/clients'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::index
* @see app/Http/Controllers/Admin/ClientController.php:13
* @route '/admin/clients'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::index
* @see app/Http/Controllers/Admin/ClientController.php:13
* @route '/admin/clients'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::index
* @see app/Http/Controllers/Admin/ClientController.php:13
* @route '/admin/clients'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Admin\ClientController::create
* @see app/Http/Controllers/Admin/ClientController.php:20
* @route '/admin/clients/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/clients/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ClientController::create
* @see app/Http/Controllers/Admin/ClientController.php:20
* @route '/admin/clients/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ClientController::create
* @see app/Http/Controllers/Admin/ClientController.php:20
* @route '/admin/clients/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::create
* @see app/Http/Controllers/Admin/ClientController.php:20
* @route '/admin/clients/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::create
* @see app/Http/Controllers/Admin/ClientController.php:20
* @route '/admin/clients/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::create
* @see app/Http/Controllers/Admin/ClientController.php:20
* @route '/admin/clients/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::create
* @see app/Http/Controllers/Admin/ClientController.php:20
* @route '/admin/clients/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\Admin\ClientController::store
* @see app/Http/Controllers/Admin/ClientController.php:25
* @route '/admin/clients'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/clients',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ClientController::store
* @see app/Http/Controllers/Admin/ClientController.php:25
* @route '/admin/clients'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ClientController::store
* @see app/Http/Controllers/Admin/ClientController.php:25
* @route '/admin/clients'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::store
* @see app/Http/Controllers/Admin/ClientController.php:25
* @route '/admin/clients'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::store
* @see app/Http/Controllers/Admin/ClientController.php:25
* @route '/admin/clients'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Admin\ClientController::edit
* @see app/Http/Controllers/Admin/ClientController.php:46
* @route '/admin/clients/edit/{client}'
*/
export const edit = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/clients/edit/{client}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ClientController::edit
* @see app/Http/Controllers/Admin/ClientController.php:46
* @route '/admin/clients/edit/{client}'
*/
edit.url = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { client: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { client: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            client: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        client: typeof args.client === 'object'
        ? args.client.id
        : args.client,
    }

    return edit.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ClientController::edit
* @see app/Http/Controllers/Admin/ClientController.php:46
* @route '/admin/clients/edit/{client}'
*/
edit.get = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::edit
* @see app/Http/Controllers/Admin/ClientController.php:46
* @route '/admin/clients/edit/{client}'
*/
edit.head = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::edit
* @see app/Http/Controllers/Admin/ClientController.php:46
* @route '/admin/clients/edit/{client}'
*/
const editForm = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::edit
* @see app/Http/Controllers/Admin/ClientController.php:46
* @route '/admin/clients/edit/{client}'
*/
editForm.get = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::edit
* @see app/Http/Controllers/Admin/ClientController.php:46
* @route '/admin/clients/edit/{client}'
*/
editForm.head = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\Admin\ClientController::update
* @see app/Http/Controllers/Admin/ClientController.php:53
* @route '/admin/clients/{client}'
*/
export const update = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/clients/{client}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\ClientController::update
* @see app/Http/Controllers/Admin/ClientController.php:53
* @route '/admin/clients/{client}'
*/
update.url = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { client: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { client: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            client: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        client: typeof args.client === 'object'
        ? args.client.id
        : args.client,
    }

    return update.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ClientController::update
* @see app/Http/Controllers/Admin/ClientController.php:53
* @route '/admin/clients/{client}'
*/
update.put = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::update
* @see app/Http/Controllers/Admin/ClientController.php:53
* @route '/admin/clients/{client}'
*/
const updateForm = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::update
* @see app/Http/Controllers/Admin/ClientController.php:53
* @route '/admin/clients/{client}'
*/
updateForm.put = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Admin\ClientController::destroy
* @see app/Http/Controllers/Admin/ClientController.php:91
* @route '/admin/clients/delete/{client}'
*/
export const destroy = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/clients/delete/{client}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ClientController::destroy
* @see app/Http/Controllers/Admin/ClientController.php:91
* @route '/admin/clients/delete/{client}'
*/
destroy.url = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { client: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { client: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            client: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        client: typeof args.client === 'object'
        ? args.client.id
        : args.client,
    }

    return destroy.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ClientController::destroy
* @see app/Http/Controllers/Admin/ClientController.php:91
* @route '/admin/clients/delete/{client}'
*/
destroy.delete = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::destroy
* @see app/Http/Controllers/Admin/ClientController.php:91
* @route '/admin/clients/delete/{client}'
*/
const destroyForm = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::destroy
* @see app/Http/Controllers/Admin/ClientController.php:91
* @route '/admin/clients/delete/{client}'
*/
destroyForm.delete = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\Admin\ClientController::deleteClientImage
* @see app/Http/Controllers/Admin/ClientController.php:80
* @route '/admin/clients/delete-image/{client}'
*/
export const deleteClientImage = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteClientImage.url(args, options),
    method: 'delete',
})

deleteClientImage.definition = {
    methods: ["delete"],
    url: '/admin/clients/delete-image/{client}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ClientController::deleteClientImage
* @see app/Http/Controllers/Admin/ClientController.php:80
* @route '/admin/clients/delete-image/{client}'
*/
deleteClientImage.url = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { client: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { client: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            client: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        client: typeof args.client === 'object'
        ? args.client.id
        : args.client,
    }

    return deleteClientImage.definition.url
            .replace('{client}', parsedArgs.client.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ClientController::deleteClientImage
* @see app/Http/Controllers/Admin/ClientController.php:80
* @route '/admin/clients/delete-image/{client}'
*/
deleteClientImage.delete = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteClientImage.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::deleteClientImage
* @see app/Http/Controllers/Admin/ClientController.php:80
* @route '/admin/clients/delete-image/{client}'
*/
const deleteClientImageForm = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteClientImage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ClientController::deleteClientImage
* @see app/Http/Controllers/Admin/ClientController.php:80
* @route '/admin/clients/delete-image/{client}'
*/
deleteClientImageForm.delete = (args: { client: number | { id: number } } | [client: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteClientImage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteClientImage.form = deleteClientImageForm

const clients = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    deleteClientImage: Object.assign(deleteClientImage, deleteClientImage),
}

export default clients