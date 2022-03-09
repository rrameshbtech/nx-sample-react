import { ExecutorContext } from '@nrwl/devkit';
import { exec } from 'child_process';
import { link } from 'fs';
import { promisify } from 'util';

export interface CopyLocalesExecutorOptions {
  libs: string[];
}

type CommandResponse = {
  stdout: string;
  stderr: string;
};

export default async function copyLocalesExecutor(
  { libs }: CopyLocalesExecutorOptions,
  context: ExecutorContext
) {
  const copyLocaleFiles = (appLocalePath: string) => (libName: string) => {
    return promisify(exec)(
      `cp -R -f ./libs/${libName}/src/locales/* ${appLocalePath}`
    );
  };

  const anyCommandFailed = (cmdResponses: CommandResponse[]) =>
    !!cmdResponses.find(({ stderr }) => !stderr);

  console.info(`Linking i18n config to root...`);
  const appRoot = context.workspace.projects[context.projectName].root;
  const linkResponse = await linkConfigToRoot(appRoot);
  printCommandResponse(linkResponse);
  if (linkResponse.stderr) {
    return { success: false };
  }

  console.info(`copying locales...`);
  const appLocalesPath = `${appRoot}/public/locales`;
  const copyLocaleFilesForApp = copyLocaleFiles(appLocalesPath);

  const responses = await Promise.all(libs.map(copyLocaleFilesForApp));

  responses.map(printCommandResponse);

  const success = anyCommandFailed(responses);
  return { success };
}

function linkConfigToRoot(appRootPath: string) {
  const linkCmd = `ln -s -f ./${appRootPath}/next-i18next.config.js ./next-i18next.config.js`;
  return promisify(exec)(linkCmd);
}

function printCommandResponse({ stdout, stderr }: CommandResponse) {
  console.log(stdout);
  console.error(stderr);
}
