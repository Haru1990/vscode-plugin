/*
 * @Author: 董方旭
 * @Date: 2021-08-02 19:05:58
 * @LastEditors: 董方旭
 * @LastEditTime: 2021-08-02 20:21:31
 * @Description: extension entry
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import helloworld from './helloworld';
import codeslot from './codeslot';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-plugin" is now active!  dfx');

	helloworld(context);
	codeslot(context);
}

// this method is called when your extension is deactivated
export function deactivate() {}
