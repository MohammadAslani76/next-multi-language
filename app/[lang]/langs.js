import 'server-only'

const langs = {
    fa : () => import("@/langs/fa.json").then(module => module.default),
    en : () => import("@/langs/en.json").then(module => module.default)
}

export const getLangs = async (locale) => langs[locale]()