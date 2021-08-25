import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
    Expect<Equal<isRequiredKey<{ a: number, b?: string },'a'>, true>>,
    Expect<Equal<isRequiredKey<{ a: number, b?: string },'b'>, false>>,
    Expect<Equal<isRequiredKey<{ a: number, b?: string },'b' | 'a'>, false>>,
]
