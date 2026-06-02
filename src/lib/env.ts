const domain = 'https://lightcyan-chicken-628904.hostingersite.com/wp-json'
const nameSpace = '/headless-api/v1'

const ROUTES = {
    MENU: domain + nameSpace + '/menu',
    PAGES: domain + nameSpace + '/pages',
    POSTS: domain + nameSpace + '/posts',
    SLUGS: domain + nameSpace + '/post-slugs',
    CONFIG: domain + nameSpace + '/config',
    TAX: domain + nameSpace + '/taxonomies',
    SEARCH: domain + nameSpace + '/search',
    FORM: domain + nameSpace + '/form'
}

export default ROUTES