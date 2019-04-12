const fs = require('fs');
const glob = require('glob');
const camelcase = require('camelcase');
const uppercamelcase = require('uppercamelcase');
const path = require('path');
const cheerio = require('cheerio');
const prettier = require('prettier');

const rootDir = path.join(__dirname, '..');

const initialTypeDefinitions = `/// <reference types="react" />
import { ComponentType, SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

type Icon = ComponentType<Props>;
`;

const writeText = (filePath, text) => {
  const directory = path.dirname(filePath);

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  fs.writeFileSync(filePath, text, 'utf-8');
};

glob(`${rootDir}/feather/icons/**.svg`, (err, icons) => {
  fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), '', 'utf-8');
  fs.writeFileSync(path.join(rootDir, 'src', 'index.d.ts'), initialTypeDefinitions, 'utf-8');

  icons.forEach(i => {
    const svg = fs.readFileSync(i, 'utf-8');
    const id = path.basename(i, '.svg');
    const ComponentName = id === 'github' ? 'GitHub' : uppercamelcase(id);
    const $ = cheerio.load(svg, {
      xmlMode: true,
    });
    const fileName = path.basename(i).replace('.svg', '.js');
    const location = path.join(rootDir, 'src/icons', fileName);

    const defaults = `{
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }`;

    const defaultsModule = `
      export default ${defaults};
    `;

    const defaultsFilePath = path.join(rootDir, 'src', 'defaults.js');

    writeText(defaultsFilePath, defaultsModule);

    $('*').each((index, el) => {
      Object.keys(el.attribs).forEach(x => {
        if (x.includes('-')) {
          $(el)
            .attr(camelcase(x), el.attribs[x])
            .removeAttr(x);
        }
        if (x === 'stroke') {
          $(el).attr(x, 'currentColor');
        }
      });

      if (el.name === 'svg') {
        el.attribs = {};
        $(el).attr('otherProps', '...');
      }
    });

    const element = `
      import React from 'react';

      import defaults from '../defaults';

      const ${ComponentName} = props => (
        ${$('svg')
    .toString()
    .replace(/(x1=)"([\d\.]*)"/gi, '$1{$2}')
    .replace(/(x2=)"([\d\.]*)"/gi, '$1{$2}')
    .replace(/(y1=)"([\d\.]*)"/gi, '$1{$2}')
    .replace(/(y2=)"([\d\.]*)"/gi, '$1{$2}')
    .replace(/(cx=)"([\d\.]*)"/gi, '$1{$2}')
    .replace(/(cy=)"([\d\.]*)"/gi, '$1{$2}')
    .replace(/(r=)"([\d\.]*)"/gi, '$1{$2}')
    .replace(/(x=)"([\d\.]*)"/gi, '$1{$2}')
    .replace(/(y=)"([\d\.]*)"/gi, '$1{$2}')
    .replace(/(width=)"([\d\.]*)"/gi, '$1{$2}')
    .replace(/(height=)"([\d\.]*)"/gi, '$1{$2}')
    .replace(/(rx=)"([\d\.]*)"/gi, '$1{$2}')
    .replace(/(ry=)"([\d\.]*)"/gi, '$1{$2}')
    .replace('width="24"', 'width={24}')
    .replace('height="24"', 'height={24}')
    .replace('otherProps="..."', '{...defaults} {...props}')}
      );

      export default ${ComponentName};
    `;

    const component = prettier.format(element, {
      singleQuote: true,
      trailingComma: 'es5',
      bracketSpacing: true,
      parser: 'flow',
    });

    writeText(location, component);

    const exportString = `export ${ComponentName} from './icons/${id}';\r\n`;
    fs.appendFileSync(path.join(rootDir, 'src', 'index.js'), exportString, 'utf-8');

    const exportTypeString = `export const ${ComponentName}: Icon;\n`;
    fs.appendFileSync(path.join(rootDir, 'src', 'index.d.ts'), exportTypeString, 'utf-8');
  });
});
