import { AppRouter } from "../app/router"
import { Renderer, tag } from "./renderer"
import * as injectTapEventPlugin from "react-tap-event-plugin"
import { unmountComponentAtNode } from "react-dom"
import { runServiceWorker } from "./sw"
injectTapEventPlugin()
require("offline-js")

Renderer(AppRouter)
runServiceWorker()


if (module.hot) {
    module.hot.accept(
        [
            "../store/createStore.tsx",
            "../app/router.tsx",
            "./renderer.tsx"
        ],
        () => {
            unmountComponentAtNode(tag)
            const NextEatApp = require("../app/router.tsx").AppRouter
            Renderer(NextEatApp)
        })
}

