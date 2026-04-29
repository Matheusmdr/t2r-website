import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import ppk from './ppk'
import baseGnss from './base-gnss'
import t2rGeotagger from './t2r-geotagger'
import metashape from './metashape'
import sobreNos from './sobre-nos'
import blog from './blog'
import faleConosco from './fale-conosco'
import produtos from './produtos'
/**
* @see routes/web.php:19
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:19
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see routes/web.php:19
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:19
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see routes/web.php:19
* @route '/'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:19
* @route '/'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see routes/web.php:19
* @route '/'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

const publicMethod = {
    home: Object.assign(home, home),
    ppk: Object.assign(ppk, ppk),
    baseGnss: Object.assign(baseGnss, baseGnss),
    t2rGeotagger: Object.assign(t2rGeotagger, t2rGeotagger),
    metashape: Object.assign(metashape, metashape),
    sobreNos: Object.assign(sobreNos, sobreNos),
    blog: Object.assign(blog, blog),
    faleConosco: Object.assign(faleConosco, faleConosco),
    produtos: Object.assign(produtos, produtos),
}

export default publicMethod