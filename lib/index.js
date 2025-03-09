"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjenProjectFromGit = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const javascript_1 = require("projen/lib/javascript");
class ProjenProjectFromGit extends projen_1.cdk.JsiiProject {
    constructor(options) {
        super({
            projenrcTs: true,
            packageManager: projen_1.javascript.NodePackageManager.YARN_BERRY,
            yarnBerryOptions: {
                yarnRcOptions: {
                    nodeLinker: javascript_1.YarnNodeLinker.NODE_MODULES,
                }
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
exports.ProjenProjectFromGit = ProjenProjectFromGit;
_a = JSII_RTTI_SYMBOL_1;
ProjenProjectFromGit[_a] = { fqn: "@Rud5G/projen-from-git.ProjenProjectFromGit", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBeUM7QUFDekMsc0RBQXVEO0FBRXZELE1BQWEsb0JBQXFCLFNBQVEsWUFBRyxDQUFDLFdBQVc7SUFDdkQsWUFBbUIsT0FBK0I7UUFDaEQsS0FBSyxDQUFDO1lBQ0osVUFBVSxFQUFFLElBQUk7WUFDaEIsY0FBYyxFQUFFLG1CQUFVLENBQUMsa0JBQWtCLENBQUMsVUFBVTtZQUN4RCxnQkFBZ0IsRUFBRTtnQkFDaEIsYUFBYSxFQUFFO29CQUNiLFVBQVUsRUFBRSwyQkFBYyxDQUFDLFlBQVk7aUJBQ3hDO2FBQ0Y7WUFDRCxxQkFBcUIsRUFBRTtnQkFDckIsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjtZQUNELFdBQVcsRUFBRSxTQUFTO1lBQ3RCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGFBQWEsRUFBRSxTQUFTO1lBQ3hCLFlBQVksRUFBRSxLQUFLO1lBQ25CLEdBQUcsT0FBTztZQUNWLElBQUksRUFBRTtnQkFDSixHQUFHLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRTthQUN2QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxHQUFHLE9BQU8sRUFBRSxPQUFPLElBQUksRUFBRTtnQkFDekIsUUFBUTthQUNUO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLEdBQUcsT0FBTyxFQUFFLFFBQVEsSUFBSSxFQUFFO2dCQUMxQixnQkFBZ0I7YUFDakI7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7QUFqQ0gsb0RBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2RrLCBqYXZhc2NyaXB0IH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IFlhcm5Ob2RlTGlua2VyIH0gZnJvbSBcInByb2plbi9saWIvamF2YXNjcmlwdFwiO1xuXG5leHBvcnQgY2xhc3MgUHJvamVuUHJvamVjdEZyb21HaXQgZXh0ZW5kcyBjZGsuSnNpaVByb2plY3Qge1xuICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogY2RrLkpzaWlQcm9qZWN0T3B0aW9ucykge1xuICAgIHN1cGVyKHtcbiAgICAgIHByb2plbnJjVHM6IHRydWUsXG4gICAgICBwYWNrYWdlTWFuYWdlcjogamF2YXNjcmlwdC5Ob2RlUGFja2FnZU1hbmFnZXIuWUFSTl9CRVJSWSxcbiAgICAgIHlhcm5CZXJyeU9wdGlvbnM6IHtcbiAgICAgICAgeWFyblJjT3B0aW9uczoge1xuICAgICAgICAgIG5vZGVMaW5rZXI6IFlhcm5Ob2RlTGlua2VyLk5PREVfTU9EVUxFUyxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHBlZXJEZXBlbmRlbmN5T3B0aW9uczoge1xuICAgICAgICBwaW5uZWREZXZEZXBlbmRlbmN5OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBwdWJsaXNoVG9HbzogdW5kZWZpbmVkLFxuICAgICAgcHVibGlzaFRvTWF2ZW46IHVuZGVmaW5lZCxcbiAgICAgIHB1Ymxpc2hUb051Z2V0OiB1bmRlZmluZWQsXG4gICAgICBwdWJsaXNoVG9QeXBpOiB1bmRlZmluZWQsXG4gICAgICByZWxlYXNlVG9OcG06IGZhbHNlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGRlcHM6IFtcbiAgICAgICAgLi4ub3B0aW9ucz8uZGVwcyB8fCBbXSxcbiAgICAgIF0sXG4gICAgICBkZXZEZXBzOiBbXG4gICAgICAgIC4uLm9wdGlvbnM/LmRldkRlcHMgfHwgW10sXG4gICAgICAgICdwcm9qZW4nLFxuICAgICAgXSxcbiAgICAgIHBlZXJEZXBzOiBbXG4gICAgICAgIC4uLm9wdGlvbnM/LnBlZXJEZXBzIHx8IFtdLFxuICAgICAgICAncHJvamVuQF4wLjkwLjAnLFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHRoaXMuZ2l0aWdub3JlLnJlbW92ZVBhdHRlcm5zKCcuanNpaScsICcvbGliJyk7XG4gIH1cbn0iXX0=