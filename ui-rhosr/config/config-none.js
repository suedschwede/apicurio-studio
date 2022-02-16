var ApicurioConfig = {
    auth: {
        type: "none"
    },
    features: {},
    instances: {
        auth: {
            type: "none"
        }
    },
    registries: {
        auth: {
            type: "none"
        },
        static: [
            {
                id: "local",
                name: "local-registry",
                registryUrl: "http://localhost:8080/"
            }
        ]
    },
    ui: {
        contextPath: "/",
        navPrefixPath: "/"
    },
};
