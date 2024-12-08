import {
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { GenerateAngularLibraryGeneratorSchema } from './schema';
import { libraryGenerator } from '@nx/angular/generators';

const TYPES = ['ui', 'data-access', 'feature', 'util'];

export async function generateAngularLibraryGenerator(
  tree: Tree,
  options: GenerateAngularLibraryGeneratorSchema
) {
  if (options.type === 'all') {
    console.log(options.type);
    for (const type of TYPES) {
    await generateLibrary(tree, options, type);
    }
    } else {
    await generateLibrary(tree, options, options.type);
    }

    const libPath = `libs/${options.domain}/${options.type}/${options.name}/src`;
    tree.delete(`${libPath}/lib/${options.name}`);
    tree.write(`${libPath}/index.ts`, '');
}

async function generateLibrary(
  tree: Tree,
  options: GenerateAngularLibraryGeneratorSchema,
  type: string
){
  await libraryGenerator(tree, {name: options.name,
    simpleName: true,
    standalone: true,
    buildable: true,
    prefix: `bt-libs-${type}`,
    style: 'scss',
    changeDetection: 'OnPush',
    directory: `${options.domain}/${type}`,
    tags: `domain:${options.domain}, type:${type}`,
    importPath: `@bt-libs/${options.domain}/${type}/${options.name}`,
    });
}

export default generateAngularLibraryGenerator;
