import { normalize } from '@angular-devkit/core';
import { Rule, SchematicContext, Tree, apply, applyTemplates, chain, mergeWith, move, strings, url } from '@angular-devkit/schematics';

export function attrDirective(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    _options.path = _options.path ?? normalize('src/app/');
    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: _options.name
      }),
      move(normalize(_options.path as string))
    ]);
    return chain([
      mergeWith(templateSource)
    ]);    
  };
}
