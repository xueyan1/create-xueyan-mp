#!/usr/bin/env node
console.log('=========== 欢迎使用xueyan - mp ===========')
console.log('=========== 查询inquirer用户与命令行交互的所有API ===========')

let allType = require('../utils/type-config')

const inquirer = require('inquirer')
const typeArr = [
 {
  type: 'list',
  message: '选择类型',
  name: 'type',
  choices: [
   { name: "Input        > 输入框", value: 1 },
   { name: "Confirm      > 确认", value: 2 },
   { name: "List         > 列表", value: 3 },
   { name: "Rawlist      > 原始列表", value: 4 },
   { name: "Expand       > 扩展", value: 5 },
   { name: "Checkbox     > 单选框", value: 6 },
   { name: "Password     > 密码", value: 7 },
   { name: "Editor       > 文本输入框", value: 8 },
  ],
  default: { name: "Input      > 输入框", value: 1 },
 }
]


async function main() {
 const r = await inquirer.prompt(typeArr)
 setType(r.type)
}

async function getInquirerData(typeName, type) {
 console.log(`您选择的是${typeName}`);
 const r = await inquirer.prompt(type)
 console.log("value=>", r);
}

async function setType(type) {
 switch (type) {
  case 1:
   getInquirerData('Input',allType.typeForInput)
   break;
  case 2:
   getInquirerData('Confirm',allType.typeForConfirm)
   break;
  case 3:
   getInquirerData('List',allType.typeForList)
   break;
  case 4:
   getInquirerData('Rawlist',allType.typeForRawlist)
   break;
  case 5:
   getInquirerData('Expand',allType.typeForExpand)
   break;
  case 6:
   getInquirerData('Checkbox',allType.typeForCheckbox)
   break;
  case 7:
   getInquirerData('Password',allType.typeForPassword)
   break;
  case 8:
   getInquirerData('Editor',allType.typeForEditor)
   break;
 }
}

main()