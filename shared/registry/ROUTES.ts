enum ROUTES {
    HOME = '/',
    INSURANCE_SOLUTIONS = '/insurance-solutions',

    // REST
    COLLECTION = '/rest/collection',
    SCHEMA = '/rest/schema',
    DOCUMENT = '/rest/document',

    ARTICLE = '/rest/article',

    // admin routes
    ADMIN_PANEL = '/admin',
    ADMIN_COLLECTION = '/admin/collection', // param = :collectionName
    ADMIN_DOCUMENT_EDIT = '/admin/document' // params = /:documentId'
}

export {ROUTES}
