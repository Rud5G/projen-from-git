import { cdk, javascript } from 'projen';
import { YarnNodeLinker } from 'projen/lib/javascript';

export class ProjenProjectFromGit extends cdk.JsiiProject {
  public constructor(options: cdk.JsiiProjectOptions) {
    super({
      projenrcTs: true,
      packageManager: javascript.NodePackageManager.YARN_BERRY,
      yarnBerryOptions: {
        yarnRcOptions: {
          nodeLinker: YarnNodeLinker.NODE_MODULES,
        },
      },
      peerDependencyOptions: {
        pinnedDevDependency: false,
      },
      publishToGo: undefined,
      publishToMaven: undefined,
      publishToNuget: undefined,
      publishToPypi: undefined,
      releaseToNpm: false,
      ...options,
      deps: [
        ...options?.deps || [],
      ],
      devDeps: [
        ...options?.devDeps || [],
        'projen',
      ],
      peerDeps: [
        ...options?.peerDeps || [],
        'projen@^0.90.0',
      ],
    });

    this.gitignore.removePatterns('.jsii', '/lib');
  }
}