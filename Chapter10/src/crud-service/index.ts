import { normalize, strings } from '@angular-devkit/core';
import { apply, applyTemplates, chain, externalSchematic, MergeStrategy, mergeWith, move, Rule, SchematicContext, Tree, url } from '@angular-devkit/schematics';

export function crudService(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const templateSource = apply(url('./files'), [
      applyTemplates({
        ..._options,
        classify: strings.classify,
        dasherize: strings.dasherize
      }),
      move(normalize(_options.path ?? normalize('src/app/')))
    ]);
    return chain([
      externalSchematic('@schematics/angular', 'service', _options),
      mergeWith(templateSource, MergeStrategy.Overwrite)
    ]);    
  };
}
 