/*
 * @Author: 董方旭
 * @Date: 2021-08-02 19:41:19
 * @LastEditors: 董方旭
 * @LastEditTime: 2021-08-02 20:24:48
 * @Description: 替换指定位置内容
 * 
 * 第一步，openWebview，右键菜单跳转到 webview 组件配置界面，
 * 第二步，完成组件自定义操作后，界面提供返回按钮，此时插槽代码片段带回
 * 第三步，回到当前编辑器，将带回的代码片段进行替换显示，
 */
import * as vscode from 'vscode';

export default function (context: vscode.ExtensionContext) {
  console.log('vscode.window: ', vscode.window);

  // 注册 菜单右键-代码片段 命令
  let disposable = vscode.commands.registerCommand('vscode-plugin.codeSlot', (uri) => {

    // 第一步，右键菜单跳转到 webview 组件配置界面，
    // 第二步，完成组件自定义操作后，界面提供返回按钮，此时插槽代码片段带回
    // 第三步，回到当前编辑器，将带回的代码片段进行替换显示

    // 第一步，openWebview，右键菜单跳转到 webview 组件配置界面，


    // 第二步

    // 第三步
    // 1、查找自定义位置 自定义TAG：<!-- dfx -->
    // 2、替换内容：来自开放服务接口
    (vscode as any).window.activeTextEditor.edit((editBuilder: any) => {
      console.log('editBuilder: ', editBuilder);
      // 从开始到结束，全量替换
      const end = new vscode.Position((vscode as any).window.activeTextEditor.document.lineCount + 1, 0);
      const text = '新替换的内容';
      editBuilder.replace(new vscode.Range(new vscode.Position(0, 0), end), text);
    });
  });
  context.subscriptions.push(disposable);
};


