import { s as ssr, a as ssrHydrationKey } from './server.js';
import 'path';
import 'buffer';
import 'tty';
import 'util';
import 'fs';
import 'net';
import 'zlib';
import 'fs/promises';
import 'http';
import 'querystring';
import 'events';
import 'stream';
import 'undici';
import 'crypto';
import 'stream/web';
import 'url';

const _tmpl$ = ["<div", ">This component Will be split in another file</div>"];
const Lazy = () => ssr(_tmpl$, ssrHydrationKey());

export { Lazy as default };
