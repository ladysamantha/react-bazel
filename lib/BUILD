package(default_visibility=["//visibility:public"])
load("@npm_bazel_typescript//:index.bzl", "ts_library")

ts_library(
    name = "hello",
    srcs = glob(["hello.ts"]),
)

ts_library(
    name = "hello-component",
    srcs = ["HelloComponent.tsx"],
    deps = [
        "@npm//@types/react",
    ],
)
