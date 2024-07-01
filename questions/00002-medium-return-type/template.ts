type MyReturnType<T> = T extends (..._: any) => infer R ? R : never

type Foo = MyReturnType< () => string >
