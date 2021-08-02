/*
 * @Author: 董方旭
 * @Date: 2021-08-02 19:21:07
 * @LastEditors: 董方旭
 * @LastEditTime: 2021-08-02 19:34:07
 * @Description: hello world 
 */
import * as vscode from 'vscode';

export default function (context: vscode.ExtensionContext) {
    // 注册 HelloWord 命令
    let disposable = vscode.commands.registerCommand('vscode-plugin.helloWorld', () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage('Hello World from vscode-plugin!');
    });
    context.subscriptions.push(disposable);
};