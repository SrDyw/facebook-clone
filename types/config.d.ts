interface GlobalConfiguration {
    api : ApiConfiguration
    app : AppConfiguration
}

interface ApiConfiguration {
    origin: string
}

interface AppConfiguration {
    name: string
    description: string
}