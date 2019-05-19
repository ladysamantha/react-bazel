package(default_visibility=["//visibility:public"])

exports_files(["tsconfig.json"], visibility = ["//visibility:public"])

load("@npm_bazel_typescript//:index.bzl", "ts_library", "ts_devserver")
load("@build_bazel_rules_nodejs//:defs.bzl", "rollup_bundle")

ts_library(
    name = "app",
    srcs = ["index.tsx"],
    deps = [
        "@npm//react",
        "@npm//@types/react",
        "@npm//react-dom",
        "@npm//@types/react-dom",
        "//lib:hello-component",
    ],
)

ts_library(
    name = "prodapp",
    srcs = ["index.tsx"],
    deps = [
        "@npm//@types/react",
        "@npm//@types/react-dom",
        "//lib:hello-component",
    ],
)

ts_devserver(
    name = "devserver",
    deps = [":app"],
    serving_path = "/bundle.min.js",
    additional_root_paths = [
        "npm/node_modules/react/umd",
        "npm/node_modules/react-dom/umd",
    ],
    static_files = [
        ":index.html",
        "@npm//node_modules/react:umd/react.development.js",
        "@npm//node_modules/react-dom:umd/react-dom.development.js",
    ],
)

rollup_bundle(
    name = "bundle",
    entry_point = "react_bazel/index",
    deps = [
        ":prodapp",
        "@npm//react",
        "@npm//react-dom",
    ],
)
