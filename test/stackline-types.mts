import {unified} from 'unified';
import parse from 'remark-parse';
import mdx, {type Options, type MicromarkOptions} from '../index.js';
const options: Options={acornOptions:{ecmaVersion:2020},addResult:true};
const micromark: MicromarkOptions=options;
unified().use(parse).use(mdx,micromark).parse('<A>{1 + 2}</A>');
// @ts-expect-error: addResult requires a boolean.
const invalid: Options={addResult:'yes'};
void invalid;
