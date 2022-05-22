import {Plugin, SettingsType} from '@yarnpkg/core';

import npmAudit               from './commands/npm/audit';
import npmInfo                from './commands/npm/info';
import npmLogin               from './commands/npm/login';
import npmLogout              from './commands/npm/logout';
import npmPublish             from './commands/npm/publish';
import npmTagAdd              from './commands/npm/tag/add';
import npmTagList             from './commands/npm/tag/list';
import npmTagRemove           from './commands/npm/tag/remove';
import npmWhoami              from './commands/npm/whoami';

declare module '@yarnpkg/core' {
  interface ConfigurationValueMap {
    npmPublishAccess: string | null;
    npmAuditExcludePackages: Array<string>;
    npmAuditIgnoreAdvisories: Array<string>;
  }
}

const plugin: Plugin = {
  configuration: {
    npmPublishAccess: {
      description: `Default access of the published packages`,
      type: SettingsType.STRING,
      default: null,
    },
    npmAuditExcludePackages: {
      description: `Array of glob patterns of packages to exclude from npm audit`,
      type: SettingsType.STRING,
      default: [],
      isArray: true,
    },
    npmAuditIgnoreAdvisories: {
      description: `Array of glob patterns of advisory IDs to exclude from npm audit`,
      type: SettingsType.STRING,
      default: [],
      isArray: true,
    },
  },
  commands: [
    npmAudit,
    npmInfo,
    npmLogin,
    npmLogout,
    npmPublish,
    npmTagAdd,
    npmTagList,
    npmTagRemove,
    npmWhoami,
  ],
};

// eslint-disable-next-line arca/no-default-export
export default plugin;
